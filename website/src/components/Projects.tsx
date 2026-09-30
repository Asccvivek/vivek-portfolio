"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import { SectionHeading, FadeIn } from "./SectionHeading";
import { projects } from "@/lib/data";
import { brandFor } from "@/lib/brands";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeading
          label="Portfolio & Live Systems"
          title="Platforms I've Built & Coordinated"
          description="13+ production ecosystems across Refurbished E-Commerce, Enterprise SaaS ERP, Dental Healthcare UX, Mobility, and AI Automation."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const brand = brandFor(project.slug);
            return (
            <FadeIn key={project.slug} delay={i * 0.06}>
              <div className="glass-card group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5">
                {/* Brand accent bar */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${brand.accent}, transparent)` }}
                />

                {/* Brand tile + badges */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border"
                    style={{
                      borderColor: `${brand.accent}40`,
                      background: `radial-gradient(circle at 30% 25%, ${brand.accent}33, rgba(2,6,23,0.65))`,
                      boxShadow: `0 8px 24px -12px ${brand.accent}`,
                    }}
                  >
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={`${project.title} logo`}
                        fill
                        sizes="48px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <span
                        className="font-heading text-sm font-bold"
                        style={{ color: brand.accent }}
                      >
                        {brand.monogram}
                      </span>
                    )}
                  </span>

                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs font-medium text-secondary">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-accent">
                        <Sparkles size={11} /> Featured
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="mb-1 font-heading text-lg font-semibold text-white transition-colors group-hover:text-secondary">
                  {project.title}
                </h3>
                <p className="mb-3 text-xs font-medium text-accent leading-snug">
                  {project.subtitle}
                </p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Metrics Pills */}
                {project.metrics && (
                  <div className="mb-4 flex flex-wrap gap-1.5 border-t border-b border-white/5 py-2.5">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[11px] font-medium text-emerald-400"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/5 bg-primary/80 px-2 py-1 text-[11px] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                  <Link
                    href={`/case-studies#${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-secondary transition-colors hover:text-accent"
                  >
                    Case Study
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded bg-white/5 px-2.5 py-1 text-xs font-medium text-text-secondary hover:bg-white/10 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={12} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded bg-secondary/15 px-2.5 py-1 text-xs font-semibold text-secondary hover:bg-secondary/25 transition-colors"
                        title="View Live URL / Demo"
                      >
                        <ExternalLink size={12} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
