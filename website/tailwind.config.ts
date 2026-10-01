import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4F1EA",
        secondary: "#E04010",
        accent: "#1B3A5C",
        surface: "#EBE6DC",
        ink: "#14120F",
        line: "#D8D1C4",
        "text-primary": "#14120F",
        "text-secondary": "#57524A",
        success: "#2F6F4E",
      },
      fontFamily: {
        heading: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        label: "0.16em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
