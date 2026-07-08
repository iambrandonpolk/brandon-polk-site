import Container from "./Container";
import Button from "./Button";

// The first five seconds. Who I am, what I document, and one clear invitation.
// Serif headline for emotion; staged fade so the eye arrives in order.
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-24 pb-28 sm:pt-36 sm:pb-36 lg:pt-44 lg:pb-44">
        <div className="max-w-4xl">
          <p
            className="eyebrow animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Brandon Polk
          </p>

          <h1
            className="animate-fade-up mt-8 font-serif text-5xl font-light leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            style={{ animationDelay: "0.12s" }}
          >
            Learning in public,
            <br />
            <span className="italic text-[var(--brand)]">
              building with curiosity.
            </span>
          </h1>

          <p
            className="animate-fade-up mt-9 max-w-reading text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl"
            style={{ animationDelay: "0.24s" }}
          >
            I write about the questions I'm sitting with: business, faith,
            health, and the small photographs of everyday life. Not answers.
            Just an honest record of what I'm learning, shared as I go.
          </p>

          <div
            className="animate-fade-up mt-11 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: "0.36s" }}
          >
            <Button href="#newsletter" variant="primary">
              Join the Journal
            </Button>
            <a
              href="#podcast"
              className="link-underline text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              or listen to the podcast
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
