import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

// Two self-hosted, optimized typefaces used with intention:
// Inter for UI + body, Newsreader (serif) for editorial display + quotes.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

// ------------------------------------------------------------------
// SEO: update siteUrl to your real domain before launch.
// ------------------------------------------------------------------
const siteUrl = "https://iambrandonpolk.com";
const title = "Brandon Polk | Learning in public. Building with curiosity.";
const description =
  "I'm Brandon. I write about the questions I'm sitting with: business, faith, health, and the small photographs of everyday life. I share what I learn as I go.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Brandon Polk",
  },
  description,
  keywords: [
    "Brandon Polk",
    "learning in public",
    "journal",
    "podcast",
    "photography",
    "business",
    "investing",
    "faith",
    "health",
  ],
  authors: [{ name: "Brandon Polk" }],
  creator: "Brandon Polk",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Brandon Polk",
    // Add a 1200x630 image at /public/og.jpg before launch.
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Brandon Polk" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1413" },
  ],
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data for richer search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brandon Polk",
  url: siteUrl,
  description,
  sameAs: [
    "https://instagram.com/iambrandonpolk",
    "https://www.youtube.com/@iambrandonpolk",
    "https://vsco.co/iambrandonpolk",
    "https://open.spotify.com/show/033KprEn6FaLjyLYLQVjr6",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Runs before paint. Two jobs:
          1. Prevent a flash of the wrong theme.
          2. Stop the browser restoring the old scroll position on reload, so
             a refresh starts at the top. Do NOT also scrollTo(0,0) on 'load':
             that event fires late (after the podcast iframe and images) and
             would yank the reader back up mid-click, breaking anchor links.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
                try {
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
