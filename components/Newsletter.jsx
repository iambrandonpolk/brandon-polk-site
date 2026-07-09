"use client";

import { useState } from "react";
import Container from "./Container";

// ------------------------------------------------------------------
// The heart of the site: a personal invitation, wired to Kit.
//
// Subscribers post directly to Brandon's "The Journal" form
// (Kit form ID 9661601). We handle the request ourselves rather than
// relying on Kit's ck.js, so the thank-you message always appears and
// we control the wording.
//
// We send first_name too, so the welcome email can greet people by name.
// Kit responds 200 with JSON: { status: "success" | "failed", errors }
// To point this at a different Kit form, change KIT_ACTION below.
// ------------------------------------------------------------------
const KIT_ACTION = "https://app.kit.com/forms/9661601/subscriptions";

export default function Newsletter() {
  return (
    <section id="newsletter" className="scroll-mt-28 py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-soft)] px-6 py-16 text-center sm:px-14 sm:py-20">
          <span className="eyebrow justify-center">The Journal</span>

          <h2 className="mt-7 font-serif text-4xl font-light leading-[1.06] tracking-tighter sm:text-5xl lg:text-6xl">
            Come think alongside me.
          </h2>

          <p className="mx-auto mt-7 max-w-reading text-lg leading-relaxed text-[var(--text-muted)]">
            Most weeks I send a short letter: a question I can't stop turning
            over, something I'm reading, a lesson I didn't see coming, and what
            I'm quietly building. It's honest and a little unfinished. If that's
            your kind of thing, I'd love for you to read along.
          </p>

          <JournalForm />
        </div>
      </Container>
    </section>
  );
}

function JournalForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email_address");
    const firstName = data.get("first_name");

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(KIT_ACTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          first_name: firstName,
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok || result.status === "failed") {
        setMessage(
          (result &&
            result.errors &&
            result.errors.messages &&
            result.errors.messages[0]) ||
            "Something went wrong. Please try again in a moment."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (err) {
      setMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="animate-fade-up mx-auto mt-11 max-w-reading" role="status">
        <p className="font-serif text-2xl font-light tracking-tight text-[var(--brand)] sm:text-3xl">
          Thank you for joining the Journal.
        </p>
        <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
          I just sent you a confirmation email. Click the link inside to finish
          signing up, and you'll be all set.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-faint)]">
          Don't see it? Check your spam or promotions folder, just in case it
          landed there. Marking it "not spam" makes sure you never miss a
          letter.
        </p>
      </div>
    );
  }

  const loading = status === "loading";
  const fieldClass =
    "w-full rounded-full border border-[var(--border)] bg-[var(--bg)] px-5 py-3.5 text-sm text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--text-faint)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/25 disabled:opacity-60";

  return (
    <div className="mx-auto mt-11 max-w-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="ck-first-name" className="sr-only">
            First name
          </label>
          <input
            id="ck-first-name"
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            disabled={loading}
            placeholder="First name"
            className={fieldClass}
          />

          <label htmlFor="ck-email" className="sr-only">
            Email address
          </label>
          <input
            id="ck-email"
            name="email_address"
            type="email"
            required
            autoComplete="email"
            disabled={loading}
            placeholder="your@email.com"
            className={fieldClass}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mx-auto w-full rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-calm hover:-translate-y-0.5 hover:bg-[var(--brand-strong)] disabled:pointer-events-none disabled:opacity-70 sm:w-auto sm:px-12"
        >
          {loading ? "Joining..." : "Join the Journal"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-4 text-sm text-[var(--accent)]" role="alert">
          {message}
        </p>
      )}

      <p className="mt-6 text-sm text-[var(--text-faint)]">
        For people who like to think out loud. No noise, no selling. Leave
        whenever you like.
      </p>
    </div>
  );
}
