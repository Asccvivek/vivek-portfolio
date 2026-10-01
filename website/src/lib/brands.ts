export interface Brand {
  /** URL of the real logo asset, if one exists in /public/logos */
  logo?: string;
  /** Brand hex used for the tile glow + accent ring */
  accent: string;
  /** 2-letter monogram shown when there is no logo file */
  monogram: string;
}

export const brands: Record<string, Brand> = {
  fonezone: {
    logo: "/logos/fonezone.png",
    accent: "#20a0e0",
    monogram: "FZ",
  },
  "happy-whites": {
    logo: "/logos/happywhites.png",
    accent: "#38bdf8",
    monogram: "HW",
  },
  erestro: {
    logo: "/logos/erestro.png",
    accent: "#e04010",
    monogram: "eR",
  },
  "electric-dada": { accent: "#f59e0b", monogram: "ED" },
  "loan-platform": { accent: "#8b5cf6", monogram: "NB" },
  "yaan-cab": { accent: "#10b981", monogram: "YC" },
  "ai-career-os": {
    logo: "/logos/aicareeros.png",
    accent: "#ec4899",
    monogram: "AI",
  },
  "client-blueprints": { accent: "#0ea5e9", monogram: "EB" },
  salonix: { accent: "#f43f5e", monogram: "SX" },
  homecare: { accent: "#14b8a6", monogram: "HC" },
};

export function brandFor(slug: string): Brand {
  return brands[slug] ?? { accent: "#2563eb", monogram: slug.slice(0, 2).toUpperCase() };
}
