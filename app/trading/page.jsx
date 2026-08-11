import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { patreon } from "@/lib/content";

export const metadata = {
  title: "Trading",
  description:
    "In the markets I go by Pipcasso. Join me live in The Canvas, a private Discord, every time I trade. Watch the screen, hear the reasoning, ask in real time.",
  alternates: { canonical: "/trading" },
};

const steps = [
  {
    n: "01",
    title: "Join through Patreon",
    desc: "One tap. Patreon handles the membership and hands you the key to The Canvas automatically.",
  },
  {
    n: "02",
    title: "Step into The Canvas",
    desc: "You land in the private Discord. Introduce yourself, or just watch. Both are fine.",
  },
  {
    n: "03",
    title: "Trade alongside me, live",
    desc: "When I sit down to trade, I go live. You see the screen, hear the reasoning, and ask questions in the moment.",
  },
];

export default function TradingPage() {
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
        {/* Hero */}
        <Container className="pt-20 pb-14 sm:pt-28">
          <div className="max-w-reading">
            <span className="eyebrow">Trading with Pipcasso</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tighter sm:text-6xl">
              Trade with me, live.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-[var(--text-muted)]">
              In the markets, I go by Pipcasso. A chart is a blank canvas and
              every trade is a brushstroke, and the same
              eye that hunts for a different angle in everyday life is the one I
              point at price.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)]">
              Every time I sit down to trade, I go live in a private Discord
              called <span className="text-[var(--text)]">The Canvas</span>. You
              see the screen, hear why I'm taking a trade or sitting on my hands,
              and ask questions while it's happening, not in a recap after the
              fact.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)]">
              It's not signals to copy. It's a seat next to me while I paint, so
              you can watch how the decisions actually get made.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={patreon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
              >
                Join The Canvas
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <span className="text-sm text-[var(--text-faint)]">
                Members join through Patreon.
              </span>
            </div>
          </div>
        </Container>

        {/* How it works */}
        <Container className="pb-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] p-8">
                  <span className="font-serif text-2xl font-light text-[var(--brand)]">
                    {s.n}
                  </span>
                  <h2 className="mt-4 text-base font-medium text-[var(--text)]">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>

        {/* What you get */}
        <Container className="py-14">
          <div className="max-w-reading">
            <p className="eyebrow mb-6">What you get</p>
            <ul className="space-y-4 text-lg leading-relaxed text-[var(--text-muted)]">
              {[
                "Live screen-shares every time I trade, with the reasoning out loud.",
                "The Canvas, a private Discord to ask questions and think through setups together.",
                "The honest version: the trades I skip and the ones that don't work, not just the wins.",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        {/* Closing CTA */}
        <Container className="pb-16">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--brand-soft)] p-10 text-center sm:p-14">
            <h2 className="font-serif text-3xl font-light tracking-tight text-[var(--text)] sm:text-4xl">
              Pull up to the canvas.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[var(--text-muted)]">
              Join through Patreon and you're in the Discord in a minute.
            </p>
            <a
              href={patreon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
            >
              Join The Canvas
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </Container>

        {/* Disclaimer */}
        <Container className="pb-24">
          <div className="max-w-reading border-t border-[var(--border-soft)] pt-8">
            <p className="text-xs leading-relaxed text-[var(--text-faint)]">
              <strong className="text-[var(--text-muted)]">Not financial advice.</strong>{" "}
              Everything shared here is for education and entertainment only. I'm
              not a licensed financial advisor, and nothing in The Canvas is a
              recommendation to buy, sell, or hold any security or asset. Trading
              involves real risk, including the loss of your capital. You are
              responsible for your own decisions. Trade only what you can afford
              to lose, and consider speaking with a licensed professional before
              you do.
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
