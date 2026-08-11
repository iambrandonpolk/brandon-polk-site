import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { bookshelf, gear } from "@/lib/content";

export const metadata = {
  title: "Resources",
  description:
    "The things worth passing on: books I recommend, the podcast, and the camera gear I actually shoot with.",
  alternates: { canonical: "/resources" },
};

// A quiet hub. Three doors — books, podcast, gear — so the top nav stays
// clean and everything still lives one tap away.
const resources = [
  {
    href: "/bookshelf",
    eyebrow: "Reading",
    title: "Books",
    desc: "The books that shaped how I think, grouped by what they're for. Honest picks, with links.",
  },
  {
    href: "/podcast",
    eyebrow: "Listening",
    title: "The Podcast",
    desc: "The Other Angle — short, honest episodes on seeing your life from a different angle. New ones on Mondays.",
  },
  {
    href: "/gear",
    eyebrow: "Making",
    title: "Camera Gear",
    desc: "The camera, lenses, tripods, and audio I actually carry. Nothing aspirational.",
  },
];

export default function ResourcesPage() {
  const bookCount = bookshelf.reduce((n, g) => n + g.books.length, 0);
  const gearCount = gear.reduce((n, g) => n + g.items.length, 0);
  const counts = { "/bookshelf": `${bookCount} books`, "/gear": `${gearCount} pieces`, "/podcast": "On Spotify" };

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
            <span className="eyebrow">Resources</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tighter sm:text-6xl">
              The things worth passing on.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-[var(--text-muted)]">
              A short shelf of what I lean on and point people to — what I'm
              reading, what I'm recording, and what I shoot with. Pick a door.
            </p>
          </div>
        </Container>

        <Container className="pb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.href} delay={(i % 3) * 80}>
                <a
                  href={r.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="eyebrow">{r.eyebrow}</span>
                      <span className="text-xs text-[var(--text-faint)]">{counts[r.href]}</span>
                    </div>
                    <h2 className="mt-5 font-serif text-3xl font-light tracking-tight text-[var(--text)]">
                      {r.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                      {r.desc}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] transition-colors group-hover:text-[var(--brand-strong)]">
                    Open
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 max-w-reading text-xs leading-relaxed text-[var(--text-faint)]">
            Some book and gear links are Amazon affiliate links. If you buy
            through one, I may earn a small commission at no extra cost to you.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
