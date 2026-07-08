import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { bookshelf } from "@/lib/content";

export const metadata = {
  title: "Bookshelf",
  description:
    "Books I'm reading and recommending — on creativity, mindset, money, business, communication, wellness, and faith. Grouped by theme.",
  alternates: { canonical: "/bookshelf" },
};

// A dedicated, browsable shelf. Every cover + title links to Amazon (affiliate).
export default function BookshelfPage() {
  const total = bookshelf.reduce((n, g) => n + g.books.length, 0);

  return (
    <>
      {/* Minimal header — keeps subpage navigation simple and unbroken */}
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
        <Container className="pt-20 pb-16 sm:pt-28">
          <div className="max-w-reading">
            <span className="eyebrow">Bookshelf</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tighter sm:text-6xl">
              What I'm reading & recommending.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-[var(--text-muted)]">
              A running shelf of {total} books that have shaped how I think about
              creativity, money, people, faith, and building a life worth
              documenting. Tap any cover to grab it on Amazon.
            </p>
          </div>
        </Container>

        {bookshelf.map((group) => (
          <section key={group.category} className="scroll-mt-24 py-14 sm:py-16">
            <Container>
              <p className="eyebrow mb-10">{group.category}</p>
              <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {group.books.map((book, i) => (
                  <Reveal key={book.title} delay={(i % 3) * 70}>
                    <a
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="group flex gap-5"
                    >
                      <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-md bg-[var(--bg-soft)] shadow-sm ring-1 ring-[var(--border-soft)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={book.img}
                          alt={`${book.title} cover`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-serif text-lg font-light leading-snug tracking-tight transition-colors duration-300 group-hover:text-[var(--brand)]">
                          {book.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                          {book.blurb}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        ))}

        {/* Amazon Associates disclosure — required, and honest */}
        <Container className="py-16">
          <p className="max-w-reading text-sm leading-relaxed text-[var(--text-faint)]">
            As an Amazon Associate I earn from qualifying purchases. Links above
            are affiliate links — if you buy through them it costs you nothing
            extra and helps support the Journal. I only list books I've actually
            read and would recommend.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
