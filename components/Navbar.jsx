"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/lib/content";

// Sticky navigation. Transparent at the top, then a whisper of a border and
// blur once you begin to scroll. Wordmark set in the serif for character.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="link-underline text-sm text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
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
        className={`fixed inset-x-0 top-[4.5rem] z-40 origin-top bg-[var(--bg)] transition-all duration-500 ease-calm md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{ height: open ? "calc(100vh - 4.5rem)" : 0 }}
      >
        <Container className="flex flex-col pt-8">
          {nav.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--border-soft)] py-5 font-serif text-3xl font-light tracking-tight"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex justify-center rounded-full bg-[var(--brand)] px-7 py-4 text-base font-medium text-white"
          >
            Join the Journal
          </a>
        </Container>
      </div>
    </header>
  );
}
