import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { getDiaries, getDiary, DIARY_REVALIDATE } from "@/lib/diaries";

// Entries come from Notion. Pre-rendered at build, re-checked every few
// minutes, and any slug published later is rendered on first request.
export const revalidate = DIARY_REVALIDATE;
export const dynamicParams = true;

export async function generateStaticParams() {
  const diaries = await getDiaries();
  return diaries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }) {
  const found = await getDiary(params.slug);
  if (!found) return {};
  const entry = found.entry;

  return {
    title: entry.question,
    description: entry.body[0].slice(0, 155),
    alternates: { canonical: `/diaries/${entry.slug}` },
    openGraph: {
      type: "article",
      title: entry.question,
      description: entry.body[0].slice(0, 155),
      publishedTime: entry.date,
      images: [{ url: entry.img, width: 1069, height: 1600, alt: entry.alt }],
    },
  };
}

export default async function DiaryEntry({ params }) {
  const found = await getDiary(params.slug);
  if (!found) notFound();

  const { entry, newer, older } = found;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg)]/70 backdrop-blur-xl">
        <Container className="flex h-[4.5rem] items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-tight text-[var(--brand)]">
            Brandon Polk
          </a>
          <a
            href="/diaries"
            className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            All entries
          </a>
        </Container>
      </header>

      <main>
        <Container className="pt-16 pb-12 sm:pt-20">
          <article className="mx-auto max-w-2xl">
            <p className="eyebrow">Self Growth Diaries</p>

            <h1 className="mt-6 font-serif text-3xl font-light italic leading-[1.15] tracking-tight sm:text-4xl">
              {entry.question}
            </h1>

            <p className="mt-5 text-sm text-[var(--text-faint)]">
              Entry {entry.number} &middot; {entry.dateLabel}
            </p>

            <figure className="mt-10">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-[var(--bg-soft)]">
                <Image
                  src={entry.img}
                  alt={entry.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
              {entry.body.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "text-[var(--text)]" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 flex items-center justify-between gap-6 border-t border-[var(--border)] pt-8 text-sm">
              {older ? (
                <a href={`/diaries/${older.slug}`} className="link-underline text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]">
                  &larr; Entry {older.number}
                </a>
              ) : (
                <span />
              )}
              {newer ? (
                <a href={`/diaries/${newer.slug}`} className="link-underline text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]">
                  Entry {newer.number} &rarr;
                </a>
              ) : (
                <span />
              )}
            </div>

            <div className="mt-14 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] px-6 py-8 text-center sm:px-10">
              <p className="font-serif text-xl font-light tracking-tight">
                Don't check back. I'll tell you.
              </p>
              <p className="mx-auto mt-3 max-w-reading text-[var(--text-muted)]">
                The Journal is how I let people know when a new entry goes up or
                an episode drops. No schedule, and nothing sent just to fill one.
              </p>
              <a
                href="/#newsletter"
                className="mt-6 inline-block rounded-full bg-[var(--brand)] px-8 py-3 text-sm font-medium text-white transition-all duration-500 ease-calm hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
              >
                Join the Journal
              </a>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
