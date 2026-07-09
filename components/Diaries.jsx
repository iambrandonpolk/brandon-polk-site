import Section from "./Section";
import { diaries } from "@/lib/content";

// Replaces the old photography grid. The photographs were decoration; these
// are writing. Each entry is a picture, a question, and what Brandon thought.
//
// Only the two newest show here. The rest live at /diaries.
export default function Diaries() {
  const latest = diaries.slice(0, 2);

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
              <div className="overflow-hidden rounded-lg bg-[var(--bg-soft)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.img}
                  alt={entry.alt}
                  width={1069}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.02]"
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

      {diaries.length > 2 && (
        <a
          href="/diaries"
          className="link-underline mt-12 inline-block text-sm font-medium text-[var(--brand)]"
        >
          All {diaries.length} entries
        </a>
      )}

      <div className="mt-14 border-t border-[var(--border)]">
        <a
          href="/gear"
          className="group flex items-baseline justify-between gap-6 border-b border-[var(--border)] py-7"
        >
          <div>
            <span className="font-serif text-2xl font-light tracking-tight transition-colors duration-300 group-hover:text-[var(--brand)]">
              Camera gear
            </span>
            <span className="ml-3 text-sm text-[var(--text-faint)]">the kit</span>
            <p className="mt-1 text-[var(--text-muted)]">
              The camera, lenses, and small things I actually carry.
            </p>
          </div>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 translate-y-1 text-[var(--text-faint)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--brand)]"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Section>
  );
}
