"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/lib/content";

// Sticky navigation. Transparent at the top, then a whisper of a border and
// blur once you begin to scroll. Wordmark set in the serif for character.
//
// Nav items are either a plain link or a group with `children`, which renders
// a calm dropdown on desktop and an accordion on mobile.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobile = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-all duration-500 ease-calm ${
        scrolled
          ? "border-b border-[var(--border-soft)] bg-[var(--bg)]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <a
          href="#top"
          className="font-serif text-xl tracking-tight text-[var(--brand)]"
        >
          Brandon Polk
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="link-underline flex items-center gap-1 text-sm text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text)] group-focus-within:text-[var(--text)]"
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Dropdown panel. A small padding bridge keeps hover alive
                    across the gap between the label and the panel. */}
                <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 ease-calm group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <div className="w-64 overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--bg)]/95 p-2 shadow-xl backdrop-blur-xl">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-[var(--brand-soft)]"
                      >
                        <span className="block text-sm font-medium text-[var(--text)]">
                          {child.label}
                        </span>
                        {child.desc ? (
                          <span className="mt-0.5 block text-xs leading-snug text-[var(--text-muted)]">
                            {child.desc}
                          </span>
                        ) : null}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="link-underline text-sm text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#newsletter"
            className="hidden rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--brand)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--brand-soft)] hover:text-[var(--brand-strong)] sm:inline-flex"
          >
            Join the Journal
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center text-[var(--text)] md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile sheet — full, calm, generously spaced */}
      <div
        className={`fixed inset-x-0 top-[4.5rem] z-40 origin-top overflow-y-auto bg-[var(--bg)] transition-all duration-500 ease-calm md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{ height: open ? "calc(100vh - 4.5rem)" : 0 }}
      >
        <Container className="flex flex-col pt-8">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-[var(--border-soft)]">
                <button
                  type="button"
                  onClick={() =>
                    setOpenGroup((g) => (g === item.label ? null : item.label))
                  }
                  aria-expanded={openGroup === item.label}
                  className="flex w-full items-center justify-between py-5 font-serif text-3xl font-light tracking-tight"
                >
                  {item.label}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${
                      openGroup === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-calm ${
                    openGroup === item.label ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={closeMobile}
                      className="block py-3 pl-4 font-serif text-xl font-light tracking-tight text-[var(--text-muted)]"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="border-b border-[var(--border-soft)] py-5 font-serif text-3xl font-light tracking-tight"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="#newsletter"
            onClick={closeMobile}
            className="mt-10 inline-flex justify-center rounded-full bg-[var(--brand)] px-7 py-4 text-base font-medium text-white"
          >
            Join the Journal
          </a>
        </Container>
      </div>
    </header>
  );
}
