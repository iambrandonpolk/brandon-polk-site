import { getDiaries } from "@/lib/diaries";

// ------------------------------------------------------------------
// Generated, not hand-written. The old version listed two sections that no
// longer exist (#writing, #photography) and none of the diary entries,
// which are the only real content on the site.
//
// Anchor links are deliberately absent: "/#books" is not a separate page,
// and telling a search engine otherwise is noise.
// ------------------------------------------------------------------
const SITE = "https://iambrandonpolk.com";

export default async function sitemap() {
  const diaries = await getDiaries();

  const entries = diaries.map((entry) => ({
    url: `${SITE}/diaries/${entry.slug}`,
    lastModified: entry.date ? new Date(entry.date) : new Date(),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [
    { url: SITE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/diaries`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...entries,
    { url: `${SITE}/bookshelf`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/gear`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
