/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization: add your image hosts here as you grow
  // (e.g. Cloudinary, a CMS, or your own domain).
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
