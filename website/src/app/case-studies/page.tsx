import type { Metadata } from "next";
import { CaseStudiesPageContent } from "./CaseStudiesPageContent";

export const metadata: Metadata = {
  title: "Case Studies — Vivek Debnath",
  description:
    "Detailed case studies showcasing marketplace architecture, SaaS operations, and startup strategy across 13+ platforms.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageContent />;
}
