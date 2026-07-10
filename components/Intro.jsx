import Container from "./Container";

// The only thing above the diaries. Two sentences, so a stranger knows this
// is a place for questions and not a photography portfolio.
//
// This carries the page's <h1>. Everything below it is an <h2>, which is the
// heading order screen readers and search engines expect.
export default function Intro() {
  return (
    <section className="pt-14 sm:pt-20">
      <Container>
        <div className="max-w-reading">
          <h1 className="font-serif text-4xl font-light leading-[1.08] tracking-tighter sm:text-5xl">
            Notes from someone still figuring it out.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            I ask questions, test what I think I know, and challenge the
            opinions I've inherited, including my own. The photographs are how I
            slow down long enough to notice.
          </p>
        </div>
      </Container>
    </section>
  );
}
