import Container from "@/components/Container";
import Footer from "@/components/Footer";

export const metadata = {
  title: "You're in",
  description: "Your subscription to the Journal is confirmed.",
  // A utility page. Keep it out of search results.
  robots: { index: false, follow: false },
  alternates: { canonical: "/subscribed" },
};

// Where Kit sends people after they click "confirm" in the double opt-in
// email. Before this page existed, that link dropped them on the homepage
// with no acknowledgement that anything had happened. This closes the loop.
export default function SubscribedPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg)]/70 backdrop-blur-xl">
        <Container className="flex h-[4.5rem] items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-tight text-[var(--brand)]">
            Brandon Polk
          </a>
          <a
            href="/diaries"
            className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            Read the diaries
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Container>
      </header>

      <main>
        <Container className="flex min-h-[70vh] items-center py-20">
          <div className="mx-auto max-w-reading text-center">
            <span className="eyebrow justify-center">The Journal</span>

            <h1 className="mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tighter sm:text-5xl">
              You're in.
            </h1>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
              <p>
                Your email is confirmed, so you're on the list for real now.
              </p>
              <p>
                From here, I'll let you know when a new diary entry goes up, when
                a podcast episode drops, and whatever I'm working through in
                between. Nothing else, and nothing on a schedule.
              </p>
              <p className="text-[var(--text)]">
                Thanks for being here. Talk soon. &mdash; Brandon
              </p>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/diaries"
                className="inline-block rounded-full bg-[var(--brand)] px-8 py-3 text-sm font-medium text-white transition-all duration-500 ease-calm hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
              >
                Start with the diaries
              </a>
              <a
                href="/podcast"
                className="link-underline text-sm font-medium text-[var(--brand)]"
              >
                Or listen to the podcast
              </a>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
