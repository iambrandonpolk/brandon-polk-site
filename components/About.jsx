import Section from "./Section";

// A genuine, non-expert introduction. Written like a person, not a brand.
// No email invitation here on purpose: casual questions go to Instagram DMs,
// which keeps the inbox from becoming a support queue.
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
    </Section>
  );
}
