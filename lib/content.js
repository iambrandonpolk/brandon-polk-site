// ------------------------------------------------------------------
// Central content file.
// Everything that changes over time lives here: words, links, lists,
// so the site can be updated without touching component code.
// ------------------------------------------------------------------

export const site = {
  url: "https://iambrandonpolk.com",
  // Amazon Associates tag, appended to book links automatically.
  amazonTag: "iambrandonpol-20",
};

// Trimmed, intentional navigation.
export const nav = [
  { label: "Journal", href: "#newsletter" },
  { label: "Writing", href: "#writing" },
  { label: "Podcast", href: "#podcast" },
  { label: "Photography", href: "#photography" },
  { label: "Books", href: "#books" },
  { label: "About", href: "#about" },
];

export const social = [
  { label: "Instagram", href: "https://instagram.com/iambrandonpolk" },
  { label: "YouTube", href: "https://www.youtube.com/@iambrandonpolk" },
  { label: "VSCO", href: "https://vsco.co/iambrandonpolk" },
  { label: "Spotify", href: "https://open.spotify.com/show/033KprEn6FaLjyLYLQVjr6" },
  { label: "Email", href: "mailto:hello@iambrandonpolk.com" },
];

// The public contact address. Used in the About section and the footer.
export const contactEmail = "hello@iambrandonpolk.com";

// Podcast: the live Spotify show.
export const podcast = {
  showUrl: "https://open.spotify.com/show/033KprEn6FaLjyLYLQVjr6",
  embedUrl: "https://open.spotify.com/embed/show/033KprEn6FaLjyLYLQVjr6?theme=0",
};

// The writing / archive index.
export const writing = [
  {
    kind: "Journal",
    title: "Why I'd rather document than perform",
    dek: "A note on learning out loud, and why the unfinished version is the honest one.",
    date: "This week",
    href: "#",
  },
  {
    kind: "Podcast",
    title: "The podcast is live on Spotify",
    dek: "Slow, curious conversations with people I'm learning from. Follow to catch new episodes.",
    date: "Now playing",
    href: "https://open.spotify.com/show/033KprEn6FaLjyLYLQVjr6",
  },
  {
    kind: "Photography",
    title: "Everyday moments on VSCO",
    dek: "Ordinary days worth remembering, shared as I shoot them.",
    date: "Ongoing",
    href: "https://vsco.co/iambrandonpolk",
  },
];

// ------------------------------------------------------------------
// Books: pulled from Brandon's Notion "Book Shelf".
// All links are Amazon affiliate links (tag: iambrandonpol-20).
//
// "booksReading" powers the "Reading now" list on the homepage: the books
// people can follow along with. To update as you finish one:
//   - change the title, author, and href (Amazon link with your tag), and
//   - set "status" to a short label like "Currently reading", "Partway through",
//     "Almost done", or "Just finished".
// "bookshelf" powers the full /bookshelf page, grouped by category.
// ------------------------------------------------------------------
export const booksReading = [
  {
    title: "Start With No",
    author: "Jim Camp",
    status: "Currently reading",
    href: "https://www.amazon.com/dp/0609608002?tag=iambrandonpol-20",
  },
  {
    title: "Show Your Work!",
    author: "Austin Kleon",
    status: "Partway through",
    href: "https://www.amazon.com/dp/076117897X?tag=iambrandonpol-20",
  },
];

// A short "shaped me" set for the homepage (a curated slice of the shelf).
export const booksInfluential = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    href: "https://www.amazon.com/dp/0735211299?tag=iambrandonpol-20",
  },
  {
    title: "Never Split the Difference",
    author: "Chris Voss",
    href: "https://www.amazon.com/dp/0062407805?tag=iambrandonpol-20",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    href: "https://www.amazon.com/dp/1612681131?tag=iambrandonpol-20",
  },
  {
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi & Fumitake Koga",
    href: "https://www.amazon.com/dp/1668065967?tag=iambrandonpol-20",
  },
];

// Full categorized shelf for /bookshelf. Covers are Amazon image URLs.
export const bookshelf = [
  {
    category: "Creativity & Craft",
    books: [
      { title: "Keep Going", blurb: "Ten ways to stay creative for the long haul. Build a daily practice and keep making things even when life gets hard.", href: "https://www.amazon.com/dp/1523506644?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71Kqghd9AjL._SS284_.jpg" },
      { title: "Show Your Work!", blurb: "On sharing your process publicly as you go, instead of waiting until a project feels finished.", href: "https://www.amazon.com/dp/076117897X?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71MTgEEjNVL._SS284_.jpg" },
      { title: "Don't Call It Art", blurb: "Austin Kleon's newest. Lessons on creating like a kid again, for anyone feeling burned out or blocked.", href: "https://www.amazon.com/dp/B0FQHP6MBN?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71dreuaM7WL._SS284_.jpg" },
      { title: "The Vein of Gold", blurb: "A follow-up to The Artist's Way, with essays and exercises to dig into a deeper, more personal vein of creative work.", href: "https://www.amazon.com/dp/0874778794?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81vKC0GBCjL._AC_UY218_.jpg" },
    ],
  },
  {
    category: "Mindset & Self-Image",
    books: [
      { title: "The New Psycho-Cybernetics", blurb: "An updated edition of the self-image psychology classic: change the picture you hold of yourself, change your results.", href: "https://www.amazon.com/dp/0735202753?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/51GKSPJZQ4L._SS284_.jpg" },
      { title: "Psycho-Cybernetics", blurb: "The foundational text on self-image and mental rehearsal that inspired decades of confidence work.", href: "https://www.amazon.com/dp/0399176136?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/61NpPe+wHAL._SS284_.jpg" },
      { title: "The Greatest Salesman in the World", blurb: "A parable of ten scrolls on discipline, persistence, and mastering yourself before your craft.", href: "https://www.amazon.com/dp/B002BRVQ0S?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81ok89MddgL._SS284_.jpg" },
      { title: "Think and Grow Rich", blurb: "One of the original personal-success classics, on the mindset behind achieving big goals.", href: "https://www.amazon.com/dp/1585424331?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/61IxJuRI39L._AC_UY218_.jpg" },
      { title: "The Courage to Be Disliked", blurb: "A dialogue-style intro to Adlerian psychology, on letting go of the need for approval.", href: "https://www.amazon.com/dp/1668065967?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81O2KXHVkDL._AC_UY218_.jpg" },
      { title: "Atomic Habits", blurb: "A practical framework for building good habits through small, consistent changes to systems and identity.", href: "https://www.amazon.com/dp/0735211299?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UY218_.jpg" },
      { title: "Antifragile", blurb: "Some systems don't just survive disorder. They grow stronger from it. How to build that resilience in.", href: "https://www.amazon.com/dp/0812979680?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71bPC5sjX5L._AC_UY218_.jpg" },
    ],
  },
  {
    category: "Communication & People Skills",
    books: [
      { title: "Conversation", blurb: "A research-backed playbook for small talk, rapport, and holding your own in any room.", href: "https://www.amazon.com/dp/B0GS7YCNG9?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71Oa51iii6L._SS284_.jpg" },
      { title: "Captivate", blurb: "Science-backed tactics for reading body language and building rapport quickly.", href: "https://www.amazon.com/dp/0399564497?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81Ksx9YwqTL._SS284_.jpg" },
      { title: "Cues", blurb: "The small nonverbal signals that shape whether people find you likable, competent, and trustworthy.", href: "https://www.amazon.com/dp/0593332199?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/7103JxV6QtL._SS284_.jpg" },
      { title: "Never Split the Difference", blurb: "An FBI hostage negotiator's playbook, built around tactical empathy and what the other side really needs.", href: "https://www.amazon.com/dp/0062407805?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81PPq8CP4sL._AC_UY218_.jpg" },
      { title: "Surrounded by Idiots", blurb: "A four-color personality framework to read people and communicate better at work and in life.", href: "https://www.amazon.com/dp/1250420458?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71pYssIiv8L._AC_UY218_.jpg" },
      { title: "You're Not Listening", blurb: "Why so few people really listen anymore, and what's lost as a result.", href: "https://www.amazon.com/dp/1250779871?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71JyEcCW1+L._AC_UY218_.jpg" },
      { title: "The Storytelling Workbook", blurb: "A nine-week program for telling your own story more clearly and persuasively.", href: "https://www.amazon.com/dp/1912555972?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/41xdXTBSrrL._AC_UY218_.jpg" },
    ],
  },
  {
    category: "Money & Wealth",
    books: [
      { title: "Rich Dad Poor Dad", blurb: "A personal finance classic contrasting two mindsets toward money and thinking like an investor.", href: "https://www.amazon.com/dp/1612681131?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY218_.jpg" },
      { title: "The Richest Man in Babylon", blurb: "Ancient parables laying out timeless principles of saving, investing, and building wealth.", href: "https://www.amazon.com/dp/1954839499?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71VZub0QnLL._AC_UY218_.jpg" },
      { title: "The Psychology of Money", blurb: "How emotion, ego, and personal history shape financial decisions more than spreadsheets do.", href: "https://www.amazon.com/dp/0857197681?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81gC3mdNi5L._AC_UY218_.jpg" },
      { title: "Start Your Own Corporation", blurb: "A plain-language guide to choosing the right business entity and protecting personal assets.", href: "https://www.amazon.com/dp/1962988023?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71akUqYKxOL._AC_UY218_.jpg" },
    ],
  },
  {
    category: "Business & Entrepreneurship",
    books: [
      { title: "The Innovation Secrets of Steve Jobs", blurb: "The thinking patterns and habits behind Steve Jobs' approach to product and business innovation.", href: "https://www.amazon.com/dp/B004477DIW?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/713hmmUaLlL._AC_UY218_.jpg" },
      { title: "10x Is Easier Than 2x", blurb: "Why dramatic growth often takes less effort than incremental growth. Let go of what doesn't work.", href: "https://www.amazon.com/dp/140196995X?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71TU2-eN-BL._AC_UY218_.jpg" },
      { title: "The Song of Significance", blurb: "A manifesto on building workplaces where people do meaningful work because they want to.", href: "https://www.amazon.com/dp/0593715543?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/61rZZ9qwKUL._AC_UY218_.jpg" },
      { title: "The 80/20 Principle", blurb: "How a small share of causes drives most results, and how to focus effort where it matters.", href: "https://www.amazon.com/dp/0385491743?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71sAovz8llL._AC_UY218_.jpg" },
      { title: "Key Person of Influence", blurb: "A five-step method for becoming a recognized, highly valued expert instead of competing on price.", href: "https://www.amazon.com/dp/178133109X?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/71Hku+fg7bL._AC_UY218_.jpg" },
      { title: "Oversubscribed", blurb: "Building so much demand for what you offer that people line up before you even launch.", href: "https://www.amazon.com/dp/0857088254?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81HbECHtU8L._AC_UY218_.jpg" },
    ],
  },
  {
    category: "Wellness",
    books: [
      { title: "Blue Mind", blurb: "The science behind why being near water calms the brain and boosts creativity and focus.", href: "https://www.amazon.com/dp/0316579904?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81V1VIxpeSL._AC_UY218_.jpg" },
    ],
  },
  {
    category: "Faith",
    books: [
      { title: "Discerning the Voice of God", blurb: "A guided Bible study on recognizing God's voice and growing in prayer, discernment, and trust.", href: "https://www.amazon.com/dp/1462774040?tag=iambrandonpol-20", img: "https://m.media-amazon.com/images/I/81QClh+CKnL._SS284_.jpg" },
    ],
  },
];

export const quotes = [
  { text: "The person who asks better questions lives a better life.", author: "A working belief" },
  { text: "You don't have to have the answers to begin.", author: "A reminder" },
  { text: "Document more than you perform.", author: "How I try to show up" },
  { text: "Grow slowly, then all at once.", author: "Patience, mostly" },
];
