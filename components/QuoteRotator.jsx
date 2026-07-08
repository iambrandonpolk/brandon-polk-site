"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { quotes } from "@/lib/content";

// A quiet, rotating line set in serif italic. Slow crossfade; pauses on hover.
// This section is almost all whitespace — that restraint is the point.
export default function QuoteRotator() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || quotes.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(id);
  }, [paused]);

  const quote = quotes[index];

  return (
    <section className="py-32 sm:py-40 lg:py-48">
      <Container>
        <div
          className="mx-auto max-w-3xl text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <blockquote
            key={index}
            className="animate-fade-in font-serif text-3xl font-light italic leading-[1.25] tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl"
          >
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <p className="mt-8 text-sm text-[var(--text-faint)]">
            {quote.author}
          </p>

          <div className="mt-10 flex justify-center gap-2.5">
            {quotes.map((_, i) => (
              <button
                key={i}
                aria-label={`Show quote ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-calm ${
                  i === index
                    ? "w-6 bg-[var(--accent)]"
                    : "w-1.5 bg-[var(--border)] hover:bg-[var(--text-faint)]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
