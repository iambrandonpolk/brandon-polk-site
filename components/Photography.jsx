import Section from "./Section";
import { social } from "@/lib/content";

// Real photographs, finally. A photography section that linked away without
// showing anything was the weakest thing on the site.
//
// To add one: drop a JPEG in /public/photos (long edge ~1600px, quality ~82),
// then add an entry below. `alt` is for screen readers and should describe
// what is literally in the frame. `caption` is Brandon's voice: what he saw,
// or why it mattered. Leave caption empty rather than inventing something.
const photos = [
  {
    src: "/photos/vine.jpg",
    alt: "Green grapes ripening on a vine, rainwater still beaded on the broad leaves around them.",
    caption: "",
  },
  {
    src: "/photos/dock.jpg",
    alt: "A yellow bucket and a crab rake left on a wooden dock, moored boats and a bridge behind.",
    caption: "",
  },
  {
    src: "/photos/garage.jpg",
    alt: "A black traffic cone leaning against a yellow bollard guard in a concrete parking garage.",
    caption: "",
  },
];

const vsco = social.find((s) => s.label === "VSCO")?.href || "#";

const places = [
  {
    label: "VSCO",
    handle: "iambrandonpolk",
    note: "The rest of them, with what I was thinking when I took them.",
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
      intro="I keep the ordinary: the light, the small scenes, the things easy to walk past."
    >
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
        {photos.map((photo) => (
          <figure key={photo.src} className="group">
            <div className="overflow-hidden rounded-lg bg-[var(--bg-soft)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                width={1069}
                height={1600}
                loading="lazy"
                decoding="async"
                className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.02]"
              />
            </div>
            {photo.caption && (
              <figcaption className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <div className="mt-14 border-t border-[var(--border)]">
        {places.map((place) => (
          <a
            key={place.label}
            href={place.href}
            target={place.external ? "_blank" : undefined}
            rel={place.external ? "noopener noreferrer" : undefined}
            className="group flex items-baseline justify-between gap-6 border-b border-[var(--border)] py-7"
          >
            <div>
              <span className="font-serif text-2xl font-light tracking-tight transition-colors duration-300 group-hover:text-[var(--brand)]">
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
