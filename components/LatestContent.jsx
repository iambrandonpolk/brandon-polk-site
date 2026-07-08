import Section from "./Section";
import Reveal from "./Reveal";
import { writing } from "@/lib/content";

// An editorial index instead of boxy cards — a quiet, living archive.
// Each row is a full-width link with a hairline divider and a hover shift.
// Edit entries in /lib/content.js.
export default function LatestContent() {
  return (
    <Section
      id="writing"
      eyebrow="Recently"
      title="A living archive."
      intro="Journal notes, photographs, and — soon — conversations. New things land here first."
    >
      <div className="mt-16 border-t border-[var(--border)]">
        {writing.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group grid grid-cols-1 gap-2 border-b border-[var(--border)] py-9 transition-colors duration-500 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="text-sm text-[var(--text-faint)]">
                {item.kind}
              </span>

              <div className="max-w-reading">
                <h3 className="font-serif text-2xl font-light leading-snug tracking-tight transition-all duration-500 ease-calm group-hover:translate-x-1 group-hover:text-[var(--brand)] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[var(--text-muted)]">
                  {item.dek}
                </p>
              </div>

              <span className="hidden text-sm text-[var(--text-faint)] sm:block">
                {item.date}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
