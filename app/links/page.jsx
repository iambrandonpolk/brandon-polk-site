import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Links",
  description:
    "Everywhere Brandon Polk is posting: Instagram, YouTube, X, TikTok, the podcast, and more. One page, all the links.",
  alternates: { canonical: "/links" },
};

// A simple, calm link hub, good to drop in a bio. One tappable row per place.
const links = [
  { label: "Instagram", handle: "@iambrandonpolk", href: "https://instagram.com/iambrandonpolk" },
  { label: "YouTube", handle: "@iambrandonpolk", href: "https://www.youtube.com/@iambrandonpolk" },
  { label: "X (Twitter)", handle: "@iambrandonpolk", href: "https://x.com/iambrandonpolk" },
  { label: "TikTok", handle: "@iambrandonpolk", href: "https://www.tiktok.com/@iambrandonpolk" },
  { label: "The Other Angle", handle: "The podcast, on Spotify", href: "https://open.spotify.com/show/033KprEn6FaLjyLYLQVjr6" },
  { label: "VSCO", handle: "Photography", href: "https://vsco.co/iambrandonpolk" },
  { label: "Email", handle: "hello@iambrandonpolk.com", href: "mailto:hello@iambrandonpolk.com" },
];

export default function LinksPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg)]/70 backdrop-blur-xl">
        <Container className="flex h-[4.5rem] items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-tight text-[var(--brand)]">
            Brandon Polk
          </a>
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Back home
          </a>
        </Container>
      </header>

      <main>
        <Container className="pt-20 pb-20 sm:pt-28">
          <div className="mx-auto max-w-md text-center">
            <span className="eyebrow">Links</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tighter sm:text-5xl">
              Find me everywhere.
            </h1>
            <p className="mt-5 text-[var(--text-muted)]">
              Every place I'm posting, in one spot.
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-md flex-col gap-3">
            {links.map((item, i) => (
              <Reveal key={item.label} delay={(i % 7) * 50}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-lg"
                >
                  <span>
                    <span className="block text-base font-medium text-[var(--text)]">
                      {item.label}
                    </span>
                    <span className="block text-xs text-[var(--text-muted)]">
                      {item.handle}
                    </span>
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
