import Container from "./Container";

// Vertical rhythm wrapper with generous, restrained spacing.
// `eyebrow` renders as an editorial hairline + quiet label.
// `title` is set in the serif display face for emotional hierarchy.
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
    <section id={id} className={`scroll-mt-28 py-28 sm:py-36 lg:py-44 ${className}`}>
      <Container className={containerClassName}>
        {(eyebrow || title || intro) && (
          <div className="max-w-reading">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tighter sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
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
