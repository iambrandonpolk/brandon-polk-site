import Script from "next/script";
import Container from "./Container";

// ------------------------------------------------------------------
// The heart of the site — a personal invitation, wired to Kit.
//
// ✅ CONNECTED TO KIT: this form posts to Brandon's "The Journal" form
//    (Kit form ID 9661601, uid ae9c6a23fa). Subscribers land on that list.
//    Kit's ck.js script below enhances it with inline success + spinner,
//    so the visitor never leaves the page.
//
// To point this at a different Kit form later, change the form `action`
// URL, `data-sv-form`, and `data-uid` to the new form's values (found in
// Kit → your form → Embed → HTML).
// ------------------------------------------------------------------
const KIT_ACTION = "https://app.kit.com/forms/9661601/subscriptions";
const KIT_FORM_ID = "9661601";
const KIT_UID = "ae9c6a23fa";

export default function Newsletter() {
  return (
    <section id="newsletter" className="scroll-mt-28 py-28 sm:py-36 lg:py-44">
      {/* Kit's enhancement script — enables inline success without a redirect */}
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />

      <Container>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-soft)] px-6 py-16 text-center sm:px-14 sm:py-20">
          <span className="eyebrow justify-center">The Journal</span>

          <h2 className="mt-7 font-serif text-4xl font-light leading-[1.06] tracking-tighter sm:text-5xl lg:text-6xl">
            Come think alongside me.
          </h2>

          <p className="mx-auto mt-7 max-w-reading text-lg leading-relaxed text-[var(--text-muted)]">
            Most weeks I send a short letter — a question I can't stop turning
            over, something I'm reading, a lesson I didn't see coming, and what
            I'm quietly building. It's honest and a little unfinished. If that's
            your kind of thing, I'd love for you to read along.
          </p>

          <div className="mx-auto mt-11 max-w-md">
            <KitForm />
          </div>

          <p className="mt-6 text-sm text-[var(--text-faint)]">
            For people who like to think out loud. No noise, no selling. Leave
            whenever you like.
          </p>
        </div>
      </Container>
    </section>
  );
}

// The site's own styled form, wired to Kit. ck.js finds it via the
// data-sv-form / data-uid attributes and handles submission inline.
function KitForm() {
  return (
    <form
      action={KIT_ACTION}
      method="post"
      data-sv-form={KIT_FORM_ID}
      data-uid={KIT_UID}
      data-format="inline"
      data-version="5"
      className="seva-form formkit-form"
    >
      {/* Kit renders validation + success messages into these elements */}
      <ul
        className="formkit-alert formkit-alert-error mb-3 list-none text-sm text-[var(--accent)]"
        data-element="errors"
        data-group="alert"
      />

      <div
        data-element="fields"
        data-stacked="false"
        className="seva-fields formkit-fields flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="ck-email" className="sr-only">
          Email address
        </label>
        <input
          id="ck-email"
          className="formkit-input w-full rounded-full border border-[var(--border)] bg-[var(--bg)] px-5 py-3.5 text-sm text-[var(--text)] outline-none transition-all duration-300 placeholder:text-[var(--text-faint)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/25"
          name="email_address"
          type="email"
          required
          placeholder="your@email.com"
        />
        <button
          data-element="submit"
          className="formkit-submit whitespace-nowrap rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-calm hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
        >
          <span>Join</span>
          <span className="formkit-spinner">
            <div />
            <div />
            <div />
          </span>
        </button>
      </div>

      <div
        className="formkit-alert formkit-alert-success mt-4 text-sm text-[var(--brand-strong)] hidden"
        data-element="success"
      >
        <div className="formkit-success-content">
          You're in — check your inbox to confirm. Talk soon.
        </div>
      </div>
    </form>
  );
}
