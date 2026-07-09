import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Ask from "@/components/Ask";

export const metadata = {
  title: "Perspective",
  description:
    "If you read something, learned something, or noticed something that changed the way you see things, send it here.",
  alternates: { canonical: "/perspective" },
};

// Its own page. On the homepage this sat between the writing and the footer,
// where a stranger met it before they had any reason to give Brandon anything.
export default function PerspectivePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg)]/70 backdrop-blur-xl">
        <Container className="flex h-[4.5rem] items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-tight text-[var(--brand)]">
            Brandon Polk
          </a>
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Back home
          </a>
        </Container>
      </header>

      <main>
        <Container className="pt-20 pb-20 sm:pt-28">
          <div className="max-w-reading">
            <span className="eyebrow">Perspective</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tighter sm:text-5xl">
              If it changed the way you see things, send it here.
            </h1>

            <div className="mt-10 space-y-7 text-lg leading-relaxed text-[var(--text-muted)]">
              <p>
                Something you read. Something you learned. Something you noticed
                and haven't been able to put down since. It doesn't have to be
                an answer, and it doesn't have to be about me. If it shifted
                the way you think, I want to sit with it too.
              </p>
              <p>
                It doesn't have to be profound. The small, strange, specific
                ones tend to be the best. I read every one, and some will end up
                in the Journal or on the podcast, where it might do for someone
                else what it did for you. Leave your first name so I can say who
                it came from.
              </p>
            </div>
          </div>

          <Ask />
        </Container>
      </main>

      <Footer />
    </>
  );
}
