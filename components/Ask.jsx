"use client";

import { useState } from "react";
import Section from "./Section";

// ------------------------------------------------------------------
// An open invitation to ask a question worth sitting with.
//
// Submissions go to /api/ask, which files them in Notion. No email is
// collected: this is a question box, not a mailing list, and asking for
// an address here would quietly change what the form is.
// ------------------------------------------------------------------
export default function Ask() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

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
          question: data.get("question"),
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
    <Section id="ask" eyebrow="Ask">
      <h2 className="mt-6 max-w-reading font-serif text-4xl font-light leading-[1.12] tracking-tighter sm:text-5xl">
        What are you turning over?
      </h2>

      <div className="mt-10 max-w-reading space-y-7 text-lg leading-relaxed text-[var(--text-muted)]">
        <p>
          If there's a question you keep circling back to, send it here. The
          best ones tend to be the ones you haven't fully answered yourself.
        </p>
        <p>
          I read all of them. Some will end up in the Journal or on the podcast,
          and I'll say where it came from.
        </p>
      </div>

      {status === "success" ? (
        <div className="animate-fade-up mt-12 max-w-reading" role="status">
          <p className="font-serif text-2xl font-light tracking-tight text-[var(--brand)] sm:text-3xl">
            Got it. Thank you.
          </p>
          <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
            Your question is sitting in my notebook now. I read every one, though
            I can't promise a reply to each. If yours ends up shaping something I
            write, you'll see it.
          </p>
        </div>
      ) : (
        <div className="mt-12 max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="ask-name" className="sr-only">
              Your name
            </label>
            <input
              id="ask-name"
              name="name"
              type="text"
              required
              maxLength={80}
              autoComplete="name"
              disabled={loading}
              placeholder="Your name"
              className={fieldClass}
            />

            <label htmlFor="ask-question" className="sr-only">
              Your question
            </label>
            <textarea
              id="ask-question"
              name="question"
              required
              rows={5}
              maxLength={1500}
              disabled={loading}
              placeholder="What's the question you keep coming back to?"
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
              {loading ? "Sending..." : "Send your question"}
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
