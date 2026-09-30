import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About — Vivek Debnath",
  description:
    "Senior IT Project Manager specializing in multi-platform digital ecosystems, marketplace architecture, and AI-integrated workflows.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
