import Section from "./Section";
import { booksReading, booksInfluential } from "@/lib/content";

// Two quiet columns: what's in my hands now, and a few that have stayed with me.
// Titles link to Amazon (affiliate). The full shelf lives at /bookshelf.
function BookRow({ book }) {
  return (
    <li className="border-b border-[var(--border)] py-5 first:pt-0">
      <a
        href={book.href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group block"
      >
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-serif text-xl font-light tracking-tight transition-colors duration-300 group-hover:text-[var(--brand)]">
            {book.title}
          </p>
          {book.status && (
            <span className="shrink-0 whitespace-nowrap text-xs text-[var(--brand)]">
              {book.status}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{book.author}</p>
      </a>
    </li>
  );
}

export default function Books() {
  return (
    <Section
      id="books"
      eyebrow="Books"
      title="On the shelf."
      intro="The books in my hands right now, and a few that quietly changed how I think."
    >
      <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow mb-8">Reading now</p>
          <ul>
            {booksReading.map((book) => (
              <BookRow key={book.title} book={book} />
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-8">A few that shaped me</p>
          <ul>
            {booksInfluential.map((book) => (
              <BookRow key={book.title} book={book} />
            ))}
          </ul>
        </div>
      </div>

      <a
        href="/bookshelf"
        className="group mt-14 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] transition-colors duration-300 hover:text-[var(--brand-strong)]"
      >
        See the full bookshelf
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </Section>
  );
}
