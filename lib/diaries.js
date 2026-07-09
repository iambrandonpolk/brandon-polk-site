import { diaries as fallbackDiaries } from "./content";

// ------------------------------------------------------------------
// Diary entries come from Notion so Brandon can publish without touching
// code. Write the entry, upload the photo, set Status to Published.
//
// The database id is not a secret. NOTION_TOKEN is, and lives in Vercel.
//
// If Notion is unreachable, or the token is missing, or the integration
// hasn't been given access, we fall back to the entries hard-coded in
// content.js rather than showing an empty site. A stale page beats a
// broken one.
// ------------------------------------------------------------------
const DATABASE_ID = "cd93ed7d938c419ba39b9c455aeb9eb5";
const NOTION_VERSION = "2022-06-28";

// Re-check Notion every 5 minutes. New entries appear without a redeploy.
export const DIARY_REVALIDATE = 300;

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  if (!y || !m || !d) return "";
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

function plain(rich) {
  if (!Array.isArray(rich)) return "";
  return rich.map((r) => r.plain_text).join("");
}

function toParagraphs(text) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

function mapPage(page) {
  const p = page.properties;
  const slug = plain(p.Slug?.rich_text).trim();
  const body = toParagraphs(plain(p.Body?.rich_text));
  const iso = p.Date?.date?.start || "";
  const hasPhoto = (p.Photo?.files || []).length > 0;

  // The fallback entry, if one exists, supplies a repo-hosted image for the
  // two entries that predate the Notion database.
  const fallback = fallbackDiaries.find((d) => d.slug === slug);

  return {
    slug,
    number: p.Entry?.number ?? 0,
    question: p.Question?.title ? plain(p.Question.title) : "",
    date: iso,
    dateLabel: formatDate(iso),
    alt: plain(p["Alt text"]?.rich_text) || fallback?.alt || "",
    body: body.length ? body : fallback?.body || [],
    // Photos in Notion are served through our own route: Notion's file URLs
    // expire after about an hour, which would break any page we cached.
    img: hasPhoto ? `/api/photo?slug=${encodeURIComponent(slug)}` : fallback?.img,
  };
}

export async function getDiaries() {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    console.warn("Diaries: NOTION_TOKEN missing, using fallback entries.");
    return fallbackDiaries;
  }

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": NOTION_VERSION,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: { property: "Status", select: { equals: "Published" } },
          sorts: [{ property: "Entry", direction: "descending" }],
        }),
        next: { revalidate: DIARY_REVALIDATE },
      }
    );

    if (!res.ok) {
      console.error("Diaries: Notion returned", res.status, await res.text());
      return fallbackDiaries;
    }

    const data = await res.json();
    const entries = (data.results || [])
      .map(mapPage)
      // A published entry with no slug or no body would break the site.
      .filter((e) => e.slug && e.body.length && e.question && e.img);

    if (!entries.length) {
      console.warn("Diaries: Notion returned no usable entries, using fallback.");
      return fallbackDiaries;
    }

    return entries;
  } catch (error) {
    console.error("Diaries: could not reach Notion:", error);
    return fallbackDiaries;
  }
}

export async function getDiary(slug) {
  const all = await getDiaries();
  const index = all.findIndex((d) => d.slug === slug);
  if (index === -1) return null;

  return {
    entry: all[index],
    newer: all[index - 1] || null,
    older: all[index + 1] || null,
  };
}

// Used by the image proxy. Returns a fresh, signed Notion file URL.
export async function getPhotoUrl(slug) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return null;

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "Slug", rich_text: { equals: slug } },
        page_size: 1,
      }),
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  const file = data.results?.[0]?.properties?.Photo?.files?.[0];
  if (!file) return null;

  return file.file?.url || file.external?.url || null;
}
