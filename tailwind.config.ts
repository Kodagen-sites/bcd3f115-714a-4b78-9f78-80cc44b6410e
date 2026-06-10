import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy & Cream — pre-locked palette
        bg: "#FAF6EE",
        surface: "#E8DFCF",
        primary: "#1F3252",
        contrast: "#0E1C33",
        cream: "#FAF6EE",
        navy: "#1F3252",
      },
      fontFamily: {
        display: ["var(--font-display)", "Archivo Black", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
