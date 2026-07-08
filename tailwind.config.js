/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — teal + white, with orange used only as a small accent.
        brand: {
          DEFAULT: "#1b998b", // teal — the primary brand color
          strong: "#157f73", // darker teal for hover / contrast
          soft: "#f1faf8", // barely-there teal tint for soft surfaces
        },
        accent: {
          DEFAULT: "#f55d3e", // orange — sparingly, for tiny highlights
        },
        ink: {
          DEFAULT: "#0f2320", // deep teal-charcoal for readable text
          soft: "#33463f",
        },
        paper: {
          DEFAULT: "#ffffff", // clean white
          soft: "#f5faf9",
        },
      },
      fontFamily: {
        // Newsreader for display/editorial emotion; Inter for UI + body.
        serif: ["var(--font-serif)", "Georgia", "ui-serif", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
      },
      maxWidth: {
        content: "68rem",
        reading: "40rem",
        prose: "38rem",
      },
      transitionTimingFunction: {
        // A single, calm easing curve used everywhere.
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
