import Section from "./Section";
import { contactEmail } from "@/lib/content";

// A genuine, non-expert introduction. Written like a person, not a brand.
// Ends with an open, personable invitation to get in touch.
export default function About() {
  return (
    <Section id="about" eyebrow="About">
      <h2 className="mt-6 max-w-reading font-serif text-4xl font-light leading-[1.12] tracking-tighter sm:text-5xl">
        I'm not writing from the finish line.
      </h2>

      <div className="mt-10 max-w-reading space-y-7 text-lg leading-relaxed text-[var(--text-muted)]">
        <p>
          I'm Brandon. I'm somewhere in the middle of figuring things out:
          learning about business, investing, faith, health, and photography,
          and trying to become someone I'd actually respect.
        </p>
        <p>
          I don't have it worked out, and I'm not pretending to. What I care
          about is asking better questions, staying curious, and writing down
          what I learn while it's still fresh: the good days, the false starts,
          and the quiet things in between.
        </p>
        <p>
          If any of that feels familiar, you're in good company. The best way to
          follow along is the{" "}
          <a
            href="#newsletter"
            className="link-underline font-medium text-[var(--brand)]"
          >
            Journal
          </a>
          .
        </p>
      </div>

      {/* Personable, low-pressure invitation to write in. */}
      <div className="mt-16 max-w-reading rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-soft)] px-7 py-9 sm:px-9 sm:py-10">
        <p className="font-serif text-2xl font-light tracking-tight sm:text-3xl">
          Come say hello.
        </p>
        <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
          If you have a question, want to share what you're working through, or
          just feel like introducing yourself, my inbox is genuinely open. I
          read everything that comes in, even when life gets busy and I take a
          while to write back.
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="group mt-6 inline-flex items-center gap-2 font-medium text-[var(--brand)] transition-colors duration-300 hover:text-[var(--brand-strong)]"
        >
          {contactEmail}
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
      </div>
    </Section>
  );
}
