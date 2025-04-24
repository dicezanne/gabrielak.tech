import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F06A6A", // Fúcsia
          light: "#F9B5B5",
          dark: "#D14545",
        },
        secondary: {
          DEFAULT: "#4FD1C5", // Verde/Azul Tiffany
          light: "#A7E8E0",
          dark: "#38A89D",
        },
        background: {
          DEFAULT: "#FFFFFF", // Branco
          alt: "#F9F9F9",
        },
        text: {
          DEFAULT: "#333333",
          light: "#666666",
          dark: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
