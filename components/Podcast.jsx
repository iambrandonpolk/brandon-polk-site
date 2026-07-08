import Section from "./Section";
import { podcast } from "@/lib/content";

// The live Spotify show. A calm intro + the official embed + a follow link.
// To swap shows later, change `podcast.embedUrl` / `showUrl` in lib/content.js.
export default function Podcast() {
  return (
    <Section
      id="podcast"
      eyebrow="Podcast"
      title="Conversations, out loud."
      intro="Slow, curious talks with people I'm learning from — on business, faith, health, and figuring life out in real time. New episodes land on Spotify."
    >
      <div className="mt-14 overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)]">
        <iframe
          title="Brandon Polk — Podcast on Spotify"
          src={podcast.embedUrl}
          width="100%"
          height="352"
          frameBorder="0"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="block w-full"
        />
      </div>

      <a
        href={podcast.showUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] transition-colors duration-300 hover:text-[var(--brand-strong)]"
      >
        Follow on Spotify
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </Section>
  );
}
