"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading, FadeIn } from "./SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeading
          label="Portfolio"
          title="Platforms I've Built & Coordinated"
          description="13+ digital ecosystems across marketplaces, SaaS, healthcare, hospitality, and mobility."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <div className="glass-card group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-secondary/20">
                {/* Category badge */}
                <span className="mb-4 inline-block w-fit rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs text-secondary">
                  {project.category}
                </span>

                <h3 className="mb-1 font-heading text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-accent">{project.subtitle}</p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/5 bg-primary/60 px-2 py-1 text-[11px] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/case-studies#${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-accent"
                >
                  View Case Study
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
