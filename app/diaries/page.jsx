import Image from "next/image";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getDiaries, DIARY_REVALIDATE } from "@/lib/diaries";

export const revalidate = DIARY_REVALIDATE;

export const metadata = {
  title: "Self Growth Diaries",
  description:
    "A photograph, a question, and what I was thinking. Ordinary things, looked at for longer than they deserve.",
  alternates: { canonical: "/diaries" },
};

export default async function DiariesIndex() {
  const diaries = await getDiaries();

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
        <Container className="pt-16 pb-12 sm:pt-20">
          <div className="max-w-reading">
            <span className="eyebrow">Self Growth Diaries</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tighter sm:text-5xl">
              A photograph, and the question it left me with.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
              Ordinary things, looked at for longer than they deserve. Nothing
              here is resolved. That's the point.
            </p>
          </div>
        </Container>

        <Container className="pb-16">
          <div className="border-t border-[var(--border)]">
            {diaries.map((entry, i) => (
              <Reveal key={entry.slug} delay={i * 80}>
                <a
                  href={`/diaries/${entry.slug}`}
                  className="group grid grid-cols-1 items-center gap-6 border-b border-[var(--border)] py-8 sm:grid-cols-[10rem_1fr] sm:gap-10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[var(--bg-soft)]">
                    <Image
                      src={entry.img}
                      alt={entry.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 160px"
                      className="object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="max-w-reading">
                    <p className="text-sm text-[var(--text-faint)]">
                      Entry {entry.number} &middot; {entry.dateLabel}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-light italic leading-snug tracking-tight transition-all duration-500 ease-calm group-hover:translate-x-1 group-hover:text-[var(--brand)] sm:text-3xl">
                      {entry.question}
                    </h2>
                    <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
                      {entry.body[0]}
                    </p>
                  </div>
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
