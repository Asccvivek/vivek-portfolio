import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A1628",
        secondary: "#2563EB",
        accent: "#06B6D4",
        surface: "#1E293B",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        success: "#10B981",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
