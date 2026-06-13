/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      boxShadow: {
        diffusion: "0 24px 60px -32px rgba(31, 33, 27, 0.28)",
      },
      colors: {
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        "ink-muted": "rgb(var(--ink-muted-rgb) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft-rgb) / <alpha-value>)",
        paper: "rgb(var(--paper-rgb) / <alpha-value>)",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', "monospace"],
        sans: ['"Avenir Next"', '"Helvetica Neue"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
