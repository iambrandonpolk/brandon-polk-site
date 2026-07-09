"use client";

import { useEffect, useState } from "react";
import Section from "./Section";

// A blank box is intimidating. These rotate on each visit to show the kind
// of thing worth sending. They are deliberately open-ended and make no
// factual claims of their own: they're prompts, not statements.
const PROMPTS = [
  "Someone sent me a study that changed how I think about habits...",
  "I read a line this week that I can't stop turning over...",
  "I noticed something on a walk that I haven't stopped thinking about...",
  "My grandmother said something that reframed my whole week...",
  "I realized I've been wrong about something for years...",
  "A conversation with a stranger shifted how I see my work...",
];

// ------------------------------------------------------------------
// Not a Q&A box. An invitation to send something that shifted the way
// you see things: an idea, a passage, a thing you noticed.
//
// Submissions go to /api/ask, which files them in Notion. No email is
// collected: asking for an address would quietly turn this into a
// mailing list signup, which it isn't.
// ------------------------------------------------------------------
export default function Ask() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  // Server renders the first prompt, then the client swaps in a random one
  // after mount. Picking randomly during render would mismatch hydration.
  const [prompt, setPrompt] = useState(PROMPTS[0]);
  useEffect(() => {
    setPrompt(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          perspective: data.get("perspective"),
          website: data.get("website"), // honeypot, always empty for humans
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (err) {
      setMessage("We couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  const loading = status === "loading";
  const fieldClass =
    "w-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3.5 text-sm text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--text-faint)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/25 disabled:opacity-60";

  return (
    <Section id="perspective" eyebrow="Perspective">
      <h2 className="mt-6 max-w-reading font-serif text-4xl font-light leading-[1.12] tracking-tighter sm:text-5xl">
        Show me something I'd miss.
      </h2>

      <div className="mt-10 max-w-reading space-y-7 text-lg leading-relaxed text-[var(--text-muted)]">
        <p>
          This isn't a place to ask me things and wait for an answer. It's the
          other way around. If you read something, learned something, or noticed
          something that changed the way you see things, send it here.
        </p>
        <p>
          It doesn't have to be profound. The small, strange, specific ones tend
          to be the best. I read every one, and some will end up in the Journal
          or on the podcast. Leave your first name so I can say who it came
          from.
        </p>
      </div>

      {status === "success" ? (
        <div className="animate-fade-up mt-12 max-w-reading" role="status">
          <p className="font-serif text-2xl font-light tracking-tight text-[var(--brand)] sm:text-3xl">
            Got it. Thank you.
          </p>
          <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
            This is in my notebook now, and I'll sit with it. If it shifts
            something for me, there's a good chance you'll hear about it.
          </p>
        </div>
      ) : (
        <div className="mt-12 max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="ask-name" className="sr-only">
              Your first name
            </label>
            <input
              id="ask-name"
              name="name"
              type="text"
              required
              maxLength={40}
              autoComplete="given-name"
              disabled={loading}
              placeholder="Your first name"
              className={fieldClass}
            />

            <label htmlFor="ask-perspective" className="sr-only">
              What shifted the way you see things
            </label>
            <textarea
              id="ask-perspective"
              name="perspective"
              required
              rows={5}
              maxLength={1500}
              disabled={loading}
              placeholder={prompt}
              className={`${fieldClass} resize-y`}
            />

            {/* Hidden from people, irresistible to bots. */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="ask-website">Leave this field empty</label>
              <input
                id="ask-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-calm hover:-translate-y-0.5 hover:bg-[var(--brand-strong)] disabled:pointer-events-none disabled:opacity-70 sm:w-auto sm:self-start sm:px-12"
            >
              {loading ? "Sending..." : "Send it my way"}
            </button>
          </form>

          {status === "error" && (
            <p className="mt-4 text-sm text-[var(--accent)]" role="alert">
              {message}
            </p>
          )}

          <p className="mt-6 text-sm text-[var(--text-faint)]">
            No email needed. This won't sign you up for anything.
          </p>
        </div>
      )}
    </Section>
  );
}
