import Image from "next/image";
import Section from "./Section";
import { getDiaries } from "@/lib/diaries";

// Replaces the old photography grid. The photographs were decoration; these
// are writing. Each entry is a picture, a question, and what Brandon thought.
//
// Entries come from the Diaries database in Notion. Only the two newest show
// here. The rest live at /diaries.
export default async function Diaries() {
  const diaries = await getDiaries();
  const latest = diaries.slice(0, 2);

  if (!latest.length) return null;

  return (
    <Section
      id="diaries"
      eyebrow="Self Growth Diaries"
      title="Everyday moments."
      intro="I keep the ordinary: the light, the small scenes, the things easy to walk past. Then I sit with what they're asking me."
    >
      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
        {latest.map((entry) => (
          <article key={entry.slug}>
            <a href={`/diaries/${entry.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[var(--bg-soft)]">
                {/* next/image resizes and re-encodes to WebP, so a large
                    upload from Notion never reaches the reader at full size. */}
                <Image
                  src={entry.img}
                  alt={entry.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-5 text-sm text-[var(--text-faint)]">
                Entry {entry.number} &middot; {entry.dateLabel}
              </p>

              <h3 className="mt-2 max-w-reading font-serif text-2xl font-light italic leading-snug tracking-tight transition-colors duration-300 group-hover:text-[var(--brand)] sm:text-[1.75rem]">
                {entry.question}
              </h3>

              <p className="mt-3 max-w-reading leading-relaxed text-[var(--text-muted)]">
                {entry.body[0]}
              </p>

              <span className="link-underline mt-4 inline-block text-sm font-medium text-[var(--brand)]">
                Read the entry
              </span>
            </a>
          </article>
        ))}
      </div>

      {diaries.length > 0 && (
        <a
          href="/diaries"
          className="link-underline mt-12 inline-block text-sm font-medium text-[var(--brand)]"
        >
          All {diaries.length} entries
        </a>
      )}

    </Section>
  );
}
