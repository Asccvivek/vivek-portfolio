import type { Metadata } from "next";
import { ProjectsPageContent } from "./ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects — Vivek Debnath",
  description:
    "13+ digital platforms across marketplaces, SaaS, healthcare, hospitality, and mobility — coordinated and architected by Vivek Debnath.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
