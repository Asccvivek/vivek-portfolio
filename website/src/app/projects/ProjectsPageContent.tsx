"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Filter } from "lucide-react";
import { FadeIn } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "E-Commerce & Ops",
    "Healthcare & Patient UX",
    "Enterprise SaaS & ERP",
    "Service Marketplace",
    "Fintech & Lending",
    "Mobility & Logistics",
    "AI & Automation",
    "Enterprise Architecture"
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase())));

  return (
    <section className="section-padding pt-32">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-secondary mb-3">
            <Sparkles size={13} /> Production Portfolio & Codebases
          </div>
          <h1 className="font-heading text-4xl font-bold md:text-5xl text-white">
            Platforms I&apos;ve Built & Coordinated
          </h1>
          <p className="mt-4 max-w-3xl text-text-secondary text-base leading-relaxed">
            13+ digital ecosystems across Refurbished E-Commerce, Enterprise SaaS ERP, Clinic UX, Fintech Lending, and AI Automation with verifiable codebases, live staging URLs, and metrics.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-secondary text-primary font-semibold shadow-md shadow-secondary/20"
                  : "bg-surface/60 text-text-secondary hover:bg-surface hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <div className="glass-card group flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-2xl">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs font-medium text-secondary">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                      {project.industry}
                    </span>
                  </div>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 font-mono text-xs text-emerald-400">
                      ★ Featured
                    </span>
                  )}
                </div>

                <h2 className="mb-1 font-heading text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                  {project.title}
                </h2>
                <p className="mb-2 text-sm font-medium text-accent">{project.subtitle}</p>
                <p className="mb-2 font-mono text-xs text-text-secondary">
                  Role: <span className="text-white font-medium">{project.role}</span>
                </p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Key Features */}
                {project.features && (
                  <div className="mb-4 rounded-lg bg-surface/50 p-3 border border-white/5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted mb-2">Key System Capabilities:</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-text-secondary">
                          <span className="text-secondary mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Metrics */}
                {project.metrics && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-400"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/5 bg-primary/80 px-2.5 py-1 text-[11px] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                  <Link
                    href={`/case-studies#${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-accent"
                  >
                    Deep Case Study
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <Github size={13} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs font-semibold text-primary hover:bg-secondary/90 shadow-sm transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>Live URL</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
