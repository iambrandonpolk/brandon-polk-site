import Section from "./Section";
import { social } from "@/lib/content";

// No manual uploads. Brandon already posts photos to VSCO, so this section is a
// calm invitation to follow along there, with nothing to maintain.
const vsco = social.find((s) => s.label === "VSCO")?.href || "#";

const places = [
  {
    label: "VSCO",
    handle: "iambrandonpolk",
    note: "A quiet, considered set of everyday frames.",
    href: vsco,
  },
];

export default function Photography() {
  return (
    <Section
      id="photography"
      eyebrow="Photography"
      title="Everyday moments."
      intro="I keep the ordinary: the light, the small scenes, the things easy to walk past. I share it all as I shoot it, over on VSCO."
    >
      <div className="mt-16 border-t border-[var(--border)]">
        {places.map((place) => (
          <a
            key={place.label}
            href={place.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline justify-between gap-6 border-b border-[var(--border)] py-8"
          >
            <div>
              <span className="font-serif text-2xl font-light tracking-tight transition-colors duration-300 group-hover:text-[var(--brand)] sm:text-3xl">
                {place.label}
              </span>
              <span className="ml-3 text-sm text-[var(--text-faint)]">
                {place.handle}
              </span>
              <p className="mt-1 text-[var(--text-muted)]">{place.note}</p>
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
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        ))}
      </div>
    </Section>
  );
}
