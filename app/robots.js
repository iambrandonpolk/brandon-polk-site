// Generates /robots.txt automatically.
const siteUrl = "https://iambrandonpolk.com";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
