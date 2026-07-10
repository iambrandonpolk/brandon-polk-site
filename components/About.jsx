import Image from "next/image";
import Section from "./Section";
import { aboutPhotos } from "@/lib/content";

// A genuine, non-expert introduction. Written like a person, not a brand.
// No email invitation here on purpose: casual questions go to Instagram DMs,
// which keeps the inbox from becoming a support queue.
//
// The photographs are optional. With none listed in lib/content.js the text
// runs full width and nothing looks unfinished. Add one and the layout
// becomes two columns on its own. Add two or three and they stack beside it.
function Photos() {
  if (!aboutPhotos.length) return null;

  const [lead, ...rest] = aboutPhotos;

  return (
    <div className="mt-12 lg:mt-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--bg-soft)]">
        <Image
          src={lead.src}
          alt={lead.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </div>

      {rest.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {rest.slice(0, 2).map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-xl bg-[var(--bg-soft)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function About() {
  const hasPhotos = aboutPhotos.length > 0;

  return (
    <Section id="about" eyebrow="About">
      <div
        className={
          hasPhotos
            ? "grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20"
            : ""
        }
      >
        <div>
          <h2 className="mt-6 max-w-reading font-serif text-4xl font-light leading-[1.12] tracking-tighter sm:text-5xl">
            Still somewhere in the middle.
          </h2>

          <div className="mt-10 max-w-reading space-y-7 text-lg leading-relaxed text-[var(--text-muted)]">
            <p>
              I'm Brandon. For most of my life I was a wide receiver: four years
              at Penn State, a last season at James Madison, and a contract with
              the Rams after the 2020 draft.
            </p>
            <p>
              Football taught me how to work. It also handed me a scoreboard, and
              when it ended I had to work out what a life outside of sport
              actually looks like. Finding myself out there was harder than I
              expected it to be.
            </p>
            <p>
              I never saw myself as creative. That was something other people
              were. Then I was given room to explore it, and everything here is
              what came out of that: the photographs, the writing, the questions
              I keep turning over.
            </p>
            <p>
              So I'm somewhere in the middle of figuring things out: business,
              investing, faith, health, and photography. I don't have it worked
              out, and I'm not pretending to. What I care about is asking better
              questions, staying curious, and writing down what I learn while
              it's still fresh.
            </p>
            <p>
              The camera is part of that. I photograph ordinary things, then sit
              with what they're asking me, and the answers usually arrive later
              than the picture does.
            </p>
            <p>
              If any of that feels familiar, you're in good company. The best
              way to follow along is the{" "}
              <a
                href="#newsletter"
                className="link-underline font-medium text-[var(--brand)]"
              >
                Journal
              </a>
              .
            </p>
          </div>
        </div>

        <Photos />
      </div>
    </Section>
  );
}
