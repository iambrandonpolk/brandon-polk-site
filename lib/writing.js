import { writingPosts as fallbackPosts } from "./content";

// ------------------------------------------------------------------
// Written essays come from the "Writing" database in Notion, so Brandon
// can publish without touching code. Write it, set Status to Published.
//
// The database id is not a secret. NOTION_TOKEN is, and lives in Vercel.
//
// If Notion is unreachable, or the token is missing, or the integration
// hasn't been given access to this database, we fall back to the essays
// hard-coded in content.js. A stale page beats a broken one.
// ------------------------------------------------------------------
const DATABASE_ID = "93a4ef5b748844bcb401e7338854386b";
const NOTION_VERSION = "2022-06-28";

export const WRITING_REVALIDATE = 300;

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

// Body is one string. Blank lines separate blocks. A block that starts
// with "## " is a subheading; everything else is a paragraph.
function toBlocks(text) {
  return (text || "")
    .split(/\n\s*\n/)
    .map((raw) => {
      const t = raw.replace(/\s*\n\s*/g, " ").trim();
      if (!t) return null;
      if (t.startsWith("## ")) return { type: "h2", text: t.slice(3).trim() };
      return { type: "p", text: t };
    })
    .filter(Boolean);
}

function mapPage(page) {
  const p = page.properties;
  const iso = p.Date?.date?.start || "";
  return {
    slug: plain(p.Slug?.rich_text).trim(),
    title: p.Title?.title ? plain(p.Title.title) : "",
    excerpt: plain(p.Excerpt?.rich_text),
    date: iso,
    dateLabel: formatDate(iso),
    readTime: plain(p["Read time"]?.rich_text),
    episode: plain(p.Episode?.rich_text),
    spotifyUrl: p["Spotify URL"]?.url || "",
    youtubeUrl: p["YouTube URL"]?.url || "",
    blocks: toBlocks(plain(p.Body?.rich_text)),
  };
}

// The fallback array in content.js stores body as a raw string, so it goes
// through the same block parser as the Notion data.
function normalizeFallback() {
  return fallbackPosts.map((f) => ({
    ...f,
    dateLabel: f.dateLabel || formatDate(f.date),
    blocks: toBlocks(f.body),
  }));
}

export async function getPosts() {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    console.warn("Writing: NOTION_TOKEN missing, using fallback essays.");
    return normalizeFallback();
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
          sorts: [{ property: "Date", direction: "descending" }],
        }),
        next: { revalidate: WRITING_REVALIDATE },
      }
    );

    if (!res.ok) {
      console.error("Writing: Notion returned", res.status, await res.text());
      return normalizeFallback();
    }

    const data = await res.json();
    const posts = (data.results || [])
      .map(mapPage)
      .filter((e) => e.slug && e.title && e.blocks.length);

    if (!posts.length) {
      console.warn("Writing: Notion returned no usable essays, using fallback.");
      return normalizeFallback();
    }

    return posts;
  } catch (error) {
    console.error("Writing: could not reach Notion:", error);
    return normalizeFallback();
  }
}

export async function getPost(slug) {
  const all = await getPosts();
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return {
    post: all[index],
    newer: all[index - 1] || null,
    older: all[index + 1] || null,
  };
}
