"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export function ProjectsPageContent() {
  return (
    <section className="section-padding pt-32">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-sm text-accent">Portfolio</p>
          <h1 className="font-heading text-4xl font-bold md:text-5xl">
            Platforms I&apos;ve Built & Coordinated
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            13+ digital ecosystems across marketplaces, SaaS, healthcare,
            hospitality, and mobility.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <div className="glass-card group flex h-full flex-col p-8 transition-all hover:-translate-y-1 hover:border-secondary/20">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs text-secondary">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                    {project.industry}
                  </span>
                </div>

                <h2 className="mb-1 font-heading text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mb-2 text-sm text-accent">{project.subtitle}</p>
                <p className="mb-1 font-mono text-xs text-text-secondary">
                  Role: {project.role}
                </p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/5 bg-primary/60 px-2.5 py-1 text-[11px] text-text-secondary"
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
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
