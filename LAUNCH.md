# Go live today — a short checklist

Here's everything needed to get the site running and collecting emails today,
in priority order. You can do the whole thing in an afternoon.

## Already wired up for you ✓

- **Kit** — I created a new form in your account called **"The Journal"**
  (form ID `9661601`) and connected the site's signup directly to it. The
  form on the site is your own teal design, but it posts real subscribers into
  that Kit form and shows an inline success message. Nothing more to paste.
- **Domain** — set to `iambrandonpolk.com` across the site + SEO files.
- **Social links** — Instagram, YouTube, VSCO (`iambrandonpolk`) + your Spotify show.
- **Podcast** — your live Spotify show is embedded and auto-updates as you post.
- **Books** — pulled from your Notion shelf with your Amazon affiliate links;
  full browsable page lives at `/bookshelf` (with the required Associates
  disclosure). Update your current reads in `lib/content.js` → `booksReading`.

Still to do: publish to Vercel + point the domain (below), confirm your current
reads, and add photos.

---

## Brand colors (already applied)

| Role | Color | Where it's used |
|------|-------|-----------------|
| Teal (brand) | `#1B998B` | Wordmark, buttons, links, hero accent, hairlines |
| White | `#FFFFFF` | Background |
| Orange (accent) | `#F55D3E` | Small touches only (e.g. the active quote dot) |
| Text | `#0F2320` | A deep teal-charcoal for readable body text |

The yellow (`#F7CB15`) and indigo (`#586BA4`) from your kit are held in
reserve — say the word and I'll work one in as a secondary accent. To tweak any
color later, edit the CSS variables at the top of `app/globals.css`.

---

## 1. Run it locally (5 minutes) — do this first

You need **Node.js 18.17+** installed ([nodejs.org](https://nodejs.org) → LTS).
Then, in a terminal, from inside the unzipped `brandon-polk-site` folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000 — that's your site, live on your machine.

---

## 2. Connect Kit so emails actually save (most important)

Right now the signup form is a good-looking placeholder — it doesn't store
anyone yet. To make it real:

1. In **Kit** → Grow → Landing Pages & Forms → your form → **Embed** → copy the
   **HTML** code.
2. Open `components/Newsletter.jsx`, find the line marked
   `KIT EMBED GOES HERE`, and paste your code in place of `<FallbackForm />`.

**What I need from you:** your Kit form embed code (or just your Kit account —
I can walk you through creating the form). This is the one thing that turns the
site from a page into a working journal.

---

## 3. Drop in your real details (15 minutes)

Everything editable lives in **`lib/content.js`**. Replace the placeholders:

- **Social links** — your real Instagram, YouTube, VSCO, and Spotify URLs.
- **Books** — a couple you're reading and a few that shaped you.
- **Writing/archive** — real titles once you have them (placeholders are fine
  for launch).

**What I need from you:** those links + book titles, and I'll slot them in.

---

## 4. Add a few images (optional for launch)

- Put photos in `public/photos/`, then set the `src` for each item in
  `lib/content.js` (e.g. `src: "/photos/morning-light.jpg"`).
- Add a `favicon.ico` and a `og.jpg` (1200×630 social-share image) to `public/`.
  Placeholders work fine until you have these.

**What I need from you:** any photos you want on the homepage. I can also
generate a simple teal-and-white favicon + share image for you.

---

## 5. Publish to the web (10 minutes)

1. Push the folder to a new **GitHub** repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, **Import** the
   repo, and click **Deploy**. It's free and auto-detects everything.
3. You'll get a live URL immediately (e.g. `brandon-polk.vercel.app`).

**Custom domain (optional):** if you own `brandonpolk.com`, add it in Vercel →
Settings → Domains, then update `siteUrl` in `app/layout.jsx`, `app/sitemap.js`,
and `app/robots.js`. If you don't have a domain yet, the free Vercel URL works
perfectly to start.

---

## The short version — what I need from you

1. **Kit form embed code** (or access to set it up) — makes signups real.
2. **Your social links + a few book titles** — for `lib/content.js`.
3. *(Optional)* **A few photos**, and whether you want a **custom domain**.

Send me those three and I can finish the wiring for you. Everything else —
design, layout, SEO, performance — is done.
