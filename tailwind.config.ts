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
        honey: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#F5C842",
          400: "#F0B429",
          500: "#D4A017",
          600: "#B7860E",
          700: "#926C09",
          800: "#6D4F07",
          900: "#4A3405",
        },
        charcoal: {
          DEFAULT: "#2C2C2C",
          light: "#3D3D3D",
          dark: "#1A1A1A",
        },
        cream: {
          DEFAULT: "#FAF8F4",
          dark: "#F2EFE9",
        },
        oregonGreen: {
          DEFAULT: "#4A7C59",
          light: "#5E9B6E",
          dark: "#366045",
        },
        warmGray: {
          50: "#F9F8F6",
          100: "#F2F0EC",
          200: "#E5E1D9",
          300: "#C9C3B8",
          400: "#A89E90",
          500: "#877C6D",
          600: "#6B6056",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "honeycomb-pattern": "url('/honeycomb-bg.svg')",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        warm: "0 4px 24px rgba(212, 160, 23, 0.15)",
        "warm-lg": "0 8px 40px rgba(212, 160, 23, 0.2)",
        card: "0 2px 16px rgba(44, 44, 44, 0.08)",
        "card-hover": "0 8px 32px rgba(44, 44, 44, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
