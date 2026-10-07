import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About — Vivek Debnath",
  description:
    "Technical Delivery Manager and Solutions Engineer specializing in scope-to-ship delivery, multi-platform digital ecosystems, and AI-integrated workflows.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
