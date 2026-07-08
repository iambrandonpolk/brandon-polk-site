# Brandon Polk — Personal Website

A calm, minimal personal site for documenting the journey — built to grow for the
next ten years. Next.js (App Router) + React + Tailwind CSS.

> Learning in public. Building with curiosity.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Build for production
npm run build && npm start
```

Requires Node 18.17+.

---

## Project structure

```
brandon-polk-site/
├── app/
│   ├── layout.jsx        # <html> shell, fonts, SEO metadata, JSON-LD, theme script
│   ├── page.jsx          # Homepage — composes the sections in order
│   ├── globals.css       # Tailwind layers + theme tokens + reveal animation
│   ├── sitemap.js        # Auto-generates /sitemap.xml
│   └── robots.js         # Auto-generates /robots.txt
├── components/
│   ├── Navbar.jsx        # Sticky nav w/ blur-on-scroll + mobile menu
│   ├── Hero.jsx          # Headline + two CTAs
│   ├── Newsletter.jsx    # ⭐ Kit signup — paste embed here
│   ├── About.jsx
│   ├── LatestContent.jsx # "A living archive" — editorial index of writing/photos
│   ├── Photography.jsx   # Image grid
│   ├── Books.jsx         # Currently reading + influential
│   ├── QuoteRotator.jsx  # Rotating featured quotes
│   ├── Footer.jsx        # Social links + copyright
│   ├── ThemeToggle.jsx   # Light/dark toggle (no flash)
│   ├── Reveal.jsx        # Scroll-in animation wrapper
│   ├── Section.jsx       # Section layout primitive
│   ├── Container.jsx     # Max-width + padding wrapper
│   └── Button.jsx        # Primary/secondary button
├── lib/
│   └── content.js        # ✏️ All editable content lives here
├── public/               # Images, favicon, og.jpg (see public/README.md)
├── tailwind.config.js    # Colors, fonts, animations
├── next.config.js
└── package.json
```

**Rule of thumb:** to change words, links, photos, books, or quotes, edit
`lib/content.js`. To change layout or styling, edit the component.

---

## Connecting Kit (your newsletter)

The newsletter is the most important section — everything points to it. It ships
with a design-only placeholder form so you can see the layout. To make it real:

1. In **Kit** → **Grow → Landing Pages & Forms**, open (or create) your form.
2. Click **Embed** and copy the **HTML** or **JavaScript** snippet.
3. Open `components/Newsletter.jsx` and find the block marked:

   ```jsx
   {/* ===== KIT EMBED GOES HERE ===== */}
   <FallbackForm />
   ```

4. Replace `<FallbackForm />` with your pasted code. If Kit gives you a
   `<script>` tag, paste it in the same spot.
5. (Optional) Keep the Tailwind classes shown on the fallback `<input>` and
   `<button>` so the real form stays on-brand.

That's it — no other file needs to change.

---

## Deploying to Vercel

Vercel is the easiest host for Next.js (same company). Free tier is plenty.

**Option A — via GitHub (recommended):**

1. Create a new GitHub repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<you>/brandon-polk-site.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. Done.
4. Every future `git push` to `main` auto-deploys.

**Option B — via CLI:**

```bash
npm i -g vercel
vercel        # follow prompts (first run creates the project)
vercel --prod # promote to production
```

**Custom domain:** In the Vercel project → **Settings → Domains**, add
`brandonpolk.com` and follow the DNS instructions. Then update `siteUrl` in
`app/layout.jsx`, `app/sitemap.js`, and `app/robots.js` to your real domain.

---

## SEO checklist (already wired up)

- Per-page metadata + title template in `app/layout.jsx`
- Open Graph + Twitter card tags (add `/public/og.jpg`, 1200×630)
- JSON-LD `Person` structured data
- Auto `sitemap.xml` and `robots.txt`
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, one `<h1>`)
- Descriptive `alt` text on images

**Before launch:** set your real domain in the three files above, add favicon +
og image to `/public`, and fill in your real social URLs in `lib/content.js`.

---

## Performance notes

- `next/font` self-hosts the type pairing — **Newsreader** (serif display + quotes)
  and **Inter** (UI + body) — with no render-blocking requests and no layout shift.
- `next/image` handles responsive sizing + modern formats (AVIF/WebP).
- Animations are CSS-only and respect `prefers-reduced-motion`.
- Almost everything is a Server Component; only Navbar, ThemeToggle,
  QuoteRotator, and Reveal are client components (they need interactivity).
- Expect a near-perfect Lighthouse score out of the box.

---

## Growing the site

The homepage is section-based, but the structure is ready for real routes.
To add a page (e.g. a full Journal), create `app/journal/page.jsx` — Next.js
turns any folder under `app/` into a route. Suggested next pages:

`app/journal` · `app/podcast` · `app/photography` · `app/books` ·
`app/speaking` · `app/contact`

Update the `nav` array in `lib/content.js` to point to the new routes when ready.

---

Built to stay calm, fast, and easy to expand. Enjoy the journey.
