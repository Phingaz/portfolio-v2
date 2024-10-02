import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "hero-text": "clamp(1.8rem, 6vw, 2.2rem)",
        "section-head": "clamp(1.2rem, 6vw, 2rem)",
        "project-head": "clamp(1rem, 6vw, 1.5rem)",
      },
      backgroundImage: {
        bg: "url('/bg.avif')",
      },
      colors: {
        heading: "#1f2937",
        body: "#4b5563",
        black: "#010127",
        white: "#f3f4f6",
        accent: "#02024f",
      },
      borderRadius: { custom: "4px" },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in",
        "fade-out": "fadeOut 0.5s ease-out",
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", display: "hidden", width: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scroll: {
          to: {
            transform: "translateX(calc(-50% - 0.7rem))",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
