import { getPhotoUrl } from "@/lib/diaries";

// ------------------------------------------------------------------
// Serves a diary photograph that lives in Notion.
//
// Why this exists: Notion hands out signed S3 URLs that expire after about
// an hour. If we put one directly in an <img src>, every cached page would
// break by lunchtime. So we fetch a fresh URL on request, stream the bytes
// through our own domain, and let Vercel's CDN cache the result for a day.
//
// The token never leaves the server. The reader only ever sees
// /api/photo?slug=would-you-still-water
// ------------------------------------------------------------------
export const runtime = "nodejs";

const SLUG_PATTERN = /^[a-z0-9-]{1,80}$/;

export async function GET(request) {
  const slug = new URL(request.url).searchParams.get("slug") || "";

  // The slug goes into a Notion query. Constrain it hard rather than trust it.
  if (!SLUG_PATTERN.test(slug)) {
    return new Response("Bad slug", { status: 400 });
  }

  let url;
  try {
    url = await getPhotoUrl(slug);
  } catch (error) {
    console.error("Photo proxy: Notion lookup failed for", slug, error);
    return new Response("Not found", { status: 404 });
  }

  if (!url) return new Response("Not found", { status: 404 });

  // Only ever fetch from Notion's own file hosts. Without this check, a
  // compromised or misconfigured Notion field could point us anywhere.
  const host = new URL(url).hostname;
  const allowed =
    host.endsWith(".amazonaws.com") ||
    host.endsWith(".notion.so") ||
    host.endsWith(".notion-static.com");

  if (!allowed) {
    console.error("Photo proxy: refused unexpected host", host);
    return new Response("Not found", { status: 404 });
  }

  const upstream = await fetch(url);
  if (!upstream.ok) {
    console.error("Photo proxy: upstream returned", upstream.status);
    return new Response("Not found", { status: 404 });
  }

  const type = upstream.headers.get("content-type") || "image/jpeg";

  // Only formats a browser can actually paint. A camera RAW file (.ARW, .CR2,
  // .NEF) has an image/* MIME type but renders as nothing, and weighs 25MB.
  // Rejecting it loudly here beats a silently broken photograph on the site.
  const WEB_FORMATS = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];
  if (!WEB_FORMATS.includes(type.split(";")[0].trim().toLowerCase())) {
    console.error(
      `Photo proxy: "${slug}" is ${type}, which browsers cannot display. ` +
        `Upload a JPEG to the Photo column in Notion instead of a camera RAW file.`
    );
    return new Response("Unsupported image format", { status: 415 });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": type,
      // Cached at the edge for a day, so the expiring Notion URL is only
      // ever fetched once. stale-while-revalidate keeps it instant after.
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
