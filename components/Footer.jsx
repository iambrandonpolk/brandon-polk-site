import Container from "./Container";
import { social } from "@/lib/content";

// A calm close. One last invitation, quiet links, and room to breathe.
// The "Elsewhere" list carries Instagram (where DMs land) and a discreet
// Email link. No loud "contact me" call, on purpose.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-2xl font-light tracking-tight text-[var(--brand)]">
              Brandon Polk
            </p>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Learning in public, one question at a time. If you'd like to
              follow along,{" "}
              <a
                href="#newsletter"
                className="link-underline font-medium text-[var(--brand)]"
              >
                join the Journal
              </a>
              .
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            <p className="eyebrow">Elsewhere</p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="link-underline w-fit text-sm text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[var(--border-soft)] pt-8 text-sm text-[var(--text-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Brandon Polk</p>
          <p>Made quietly, and still in progress.</p>
        </div>
      </Container>
    </footer>
  );
}
