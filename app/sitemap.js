// Next.js generates /sitemap.xml from this file automatically.
// Add new routes here as you create them (journal, podcast, books, etc.).
const siteUrl = "https://iambrandonpolk.com";

export default function sitemap() {
  const routes = ["", "bookshelf", "#newsletter", "#about", "#podcast", "#writing", "#photography", "#books"];
  return routes.map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
