import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { gear } from "@/lib/content";

export const metadata = {
  title: "Camera Gear",
  description:
    "The camera, lenses, tripods, filters, and audio I actually shoot with. Grouped by what it does.",
  alternates: { canonical: "/gear" },
};

// A companion to /bookshelf. Same shape, same affiliate disclosure.
export default function GearPage() {
  const total = gear.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      {/* Minimal header, matching the bookshelf subpage */}
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
            <span className="eyebrow">Camera Gear</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tighter sm:text-6xl">
              What I actually shoot with.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-[var(--text-muted)]">
              {total} pieces of gear I use to make the photographs and videos on
              this site. Nothing aspirational, nothing I haven't carried around.
              Tap anything to find it on Amazon.
            </p>
          </div>
        </Container>

        {gear.map((group) => (
          <section key={group.category} className="scroll-mt-24 py-14 sm:py-16">
            <Container>
              <p className="eyebrow mb-10">{group.category}</p>
              <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 3) * 70}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="group flex gap-5"
                    >
                      <div className="relative flex h-28 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1.5 shadow-sm ring-1 ring-[var(--border-soft)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-500 ease-calm group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-serif text-lg font-light leading-snug tracking-tight transition-colors duration-300 group-hover:text-[var(--brand)]">
                          {item.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                          {item.blurb}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        ))}

        {/* Amazon Associates disclosure, required and honest */}
        <Container className="py-16">
          <p className="max-w-reading text-sm leading-relaxed text-[var(--text-faint)]">
            As an Amazon Associate I earn from qualifying purchases. Links above
            are affiliate links. If you buy through them it costs you nothing
            extra and helps support the Journal. I only list gear I actually use.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
