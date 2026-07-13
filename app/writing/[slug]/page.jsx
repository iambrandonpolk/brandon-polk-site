import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { getPosts, getPost, WRITING_REVALIDATE } from "@/lib/writing";

// Essays come from Notion. Pre-rendered at build, re-checked every few
// minutes, and any slug published later is rendered on first request.
export const revalidate = WRITING_REVALIDATE;
export const dynamicParams = true;

const SPOTIFY_SHOW = "https://open.spotify.com/show/033KprEn6FaLjyLYLQVjr6";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@iambrandonpolk";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const found = await getPost(params.slug);
  if (!found) return {};
  const { post } = found;
  const description = post.excerpt || post.blocks[0]?.text.slice(0, 155);
  return {
    title: post.title,
    description,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      publishedTime: post.date,
    },
  };
}

export default async function WritingArticle({ params }) {
  const found = await getPost(params.slug);
  if (!found) notFound();

  const { post, newer, older } = found;
  const hasEpisode = Boolean(post.episode);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg)]/70 backdrop-blur-xl">
        <Container className="flex h-[4.5rem] items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-tight text-[var(--brand)]">
            Brandon Polk
          </a>
          <a
            href="/writing"
            className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            All writing
          </a>
        </Container>
      </header>

      <main>
        <Container className="pt-16 pb-12 sm:pt-20">
          <article className="mx-auto max-w-2xl">
            <p className="eyebrow">Writing</p>

            <h1 className="mt-6 font-serif text-3xl font-light italic leading-[1.14] tracking-tight sm:text-4xl">
              {post.title}
            </h1>

            <p className="mt-5 text-sm text-[var(--text-faint)]">
              {hasEpisode && (
                <>
                  From the podcast{" "}
                  <span className="text-[var(--brand)]">The Other Angle</span>
                  {" · "}
                </>
              )}
              {post.dateLabel}
              {post.readTime ? ` · ${post.readTime}` : ""}
            </p>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
              {post.blocks.map((block, i) =>
                block.type === "h2" ? (
                  <h2
                    key={i}
                    className="pt-4 font-serif text-2xl font-normal tracking-tight text-[var(--text)]"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p key={i} className={i === 0 ? "text-[var(--text)]" : undefined}>
                    {block.text}
                  </p>
                )
              )}
            </div>

            {hasEpisode && (
              <div className="mt-14 rounded-2xl border border-[var(--brand)]/25 bg-gradient-to-b from-[var(--brand-soft)] to-[var(--brand-soft)]/40 px-6 py-7 sm:px-8">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand)]">
                  Listen to the full episode
                </p>
                <p className="mt-1.5 font-serif text-xl tracking-tight">
                  {post.episode}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={post.spotifyUrl || SPOTIFY_SHOW}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--brand)]"
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: "#1DB954" }} />
                    Spotify
                  </a>
                  {post.youtubeUrl && (
                    <a
                      href={post.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--brand)]"
                    >
                      <span className="h-2 w-2 rounded-full" style={{ background: "#FF0000" }} />
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="mt-14 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] px-6 py-8 text-center sm:px-10">
              <p className="font-serif text-xl font-light tracking-tight">
                Everyone has a story.
              </p>
              <p className="mx-auto mt-3 max-w-reading text-[var(--text-muted)]">
                If this stirred something up, tell me about it on the{" "}
                <a href="/perspective" className="link-underline font-medium text-[var(--brand)]">
                  Perspective
                </a>{" "}
                page &mdash; or come along in the Journal.
              </p>
              <a
                href="/#newsletter"
                className="mt-6 inline-block rounded-full bg-[var(--brand)] px-8 py-3 text-sm font-medium text-white transition-all duration-500 ease-calm hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
              >
                Join the Journal
              </a>
            </div>

            {(newer || older) && (
              <div className="mt-14 flex items-center justify-between gap-6 border-t border-[var(--border)] pt-8 text-sm">
                {older ? (
                  <a href={`/writing/${older.slug}`} className="link-underline text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]">
                    &larr; {older.title}
                  </a>
                ) : (
                  <span />
                )}
                {newer ? (
                  <a href={`/writing/${newer.slug}`} className="link-underline text-right text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]">
                    {newer.title} &rarr;
                  </a>
                ) : (
                  <span />
                )}
              </div>
            )}
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
