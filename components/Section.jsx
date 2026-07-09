import Container from "./Container";

// Vertical rhythm wrapper. Spacing is deliberately tighter than it was:
// the old py-44 meant 176px above and below every section, which turned a
// six-section page into ten screens of scrolling. Whitespace should frame
// the work, not replace it.
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>
        {(eyebrow || title || intro) && (
          <div className="max-w-reading">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="mt-5 font-serif text-4xl font-light leading-[1.08] tracking-tighter sm:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)]">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
