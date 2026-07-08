# /public — static assets

Drop your images and icons here. Referenced files are served from the site root
(e.g. `/public/og.jpg` is available at `/og.jpg`).

Add before launch:

- `favicon.ico` — browser tab icon
- `apple-touch-icon.png` — 180×180 home-screen icon
- `og.jpg` — 1200×630 social share image (used by Open Graph + Twitter)

For photography, put files in `/public/photos/` and set the `src` field for each
item in `/lib/content.js`, e.g. `src: "/photos/morning-light.jpg"`.
