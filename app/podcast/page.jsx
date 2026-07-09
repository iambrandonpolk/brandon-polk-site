import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { podcast } from "@/lib/content";

export const metadata = {
  title: "Podcast",
  description:
    "Slow, curious talks on business, faith, health, and figuring life out in real time. Every episode, in one place.",
  alternates: { canonical: "/podcast" },
};

// The show lives here now rather than on the homepage. Spotify's show
// embed already lists every episode and plays in place, so there is no
// second list to keep in sync. Swap the show in lib/content.js.
export default function PodcastPage() {
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
        <Container className="pt-20 pb-12 sm:pt-28">
          <div className="max-w-reading">
            <span className="eyebrow">Podcast</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tighter sm:text-6xl">
              Conversations, out loud.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-[var(--text-muted)]">
              Slow, curious talks with people I'm learning from, on business,
              faith, health, and figuring life out in real time. Every episode
              is below.
            </p>
          </div>
        </Container>

        <Container className="pb-20">
          {/* Spotify's show embed lists every episode and plays in place. */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)]">
            <iframe
              title="Brandon Polk Podcast on Spotify"
              src={podcast.embedUrl}
              width="100%"
              height="600"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="block w-full"
            />
          </div>

          <a
            href={podcast.showUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] transition-colors duration-300 hover:text-[var(--brand-strong)]"
          >
            Follow on Spotify
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Container>
      </main>

      <Footer />
    </>
  );
}
