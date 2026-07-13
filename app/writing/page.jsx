import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getPosts, WRITING_REVALIDATE } from "@/lib/writing";

export const revalidate = WRITING_REVALIDATE;

export const metadata = {
  title: "Writing",
  description:
    "Essays on asking better questions, faith, and building a life worth documenting. Some go out with the podcast.",
  alternates: { canonical: "/writing" },
};

export default async function WritingIndex() {
  const posts = await getPosts();

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
        <Container className="pt-16 pb-12 sm:pt-20">
          <div className="max-w-reading">
            <span className="eyebrow">Writing</span>
            <h1 className="mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tighter sm:text-5xl">
              Thinking, out loud and in full sentences.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
              Longer pieces on what I'm working through. Some of them go out with
              an episode of the podcast; some just stand on their own.
            </p>
          </div>
        </Container>

        <Container className="pb-16">
          {posts.length === 0 ? (
            <p className="border-t border-[var(--border)] pt-10 text-[var(--text-muted)]">
              The first essay is on its way. Check back soon.
            </p>
          ) : (
            <div className="border-t border-[var(--border)]">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <a
                    href={`/writing/${post.slug}`}
                    className="group block border-b border-[var(--border)] py-8"
                  >
                    <p className="text-sm text-[var(--text-faint)]">
                      {post.episode ? "The Other Angle · " : ""}
                      {post.dateLabel}
                      {post.readTime ? ` · ${post.readTime}` : ""}
                    </p>
                    <h2 className="mt-2 max-w-reading font-serif text-2xl font-light italic leading-snug tracking-tight transition-all duration-500 ease-calm group-hover:translate-x-1 group-hover:text-[var(--brand)] sm:text-3xl">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-3 max-w-reading leading-relaxed text-[var(--text-muted)]">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="link-underline mt-4 inline-block text-sm font-medium text-[var(--brand)]">
                      Read it
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}
