/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        "primary-container": "#04fb94",
        "primary-fixed": "#00e385",
        "surface-container": "#141414",
        "on-background": "#e5e2e1",
        "on-surface-variant": "#8a8a8a",
        "outline-variant": "#262626",
        primary: "#e4ffe8",
      },
      fontFamily: {
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Space Grotesk", "sans-serif"],
        code: ["Space Grotesk", "monospace"]
      },
    },
  },
  plugins: [],
}