import Section from "./Section";
import { social } from "@/lib/content";

// No manual uploads. Brandon already posts photos to VSCO, so this section is a
// calm invitation to follow along there, plus the gear he shoots with.
const vsco = social.find((s) => s.label === "VSCO")?.href || "#";

const places = [
  {
    label: "VSCO",
    handle: "iambrandonpolk",
    note: "A quiet, considered set of everyday frames.",
    href: vsco,
    external: true,
  },
  {
    label: "Camera gear",
    handle: "the kit",
    note: "The camera, lenses, and small things I actually carry.",
    href: "/gear",
    external: false,
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
            target={place.external ? "_blank" : undefined}
            rel={place.external ? "noopener noreferrer" : undefined}
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
              {place.external ? (
                <path d="M7 17L17 7M9 7h8v8" />
              ) : (
                <path d="M5 12h14M13 5l7 7-7 7" />
              )}
            </svg>
          </a>
        ))}
      </div>
    </Section>
  );
}
