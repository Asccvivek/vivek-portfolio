"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/SectionHeading";
import { caseStudies } from "@/lib/data";
import { Target, Lightbulb, TrendingUp, ExternalLink, Github, ArrowUpRight } from "lucide-react";

export function CaseStudiesPageContent() {
  return (
    <section className="section-padding pt-32">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="mb-2 font-mono text-sm text-accent">Deep Technical Breakdowns</p>
          <h1 className="font-heading text-4xl font-bold md:text-5xl text-white">
            Architecture Case Studies
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary text-base leading-relaxed">
            Detailed breakdowns of challenges, engineering approaches, outcomes, and verifiable production metrics across key platforms.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.slug} delay={i * 0.08}>
              <article
                id={study.slug}
                className="scroll-mt-32 rounded-2xl border border-white/5 bg-surface/40 p-8 md:p-12 transition-all hover:border-secondary/20 shadow-xl"
              >
                {/* Header */}
                <div className="mb-8 border-b border-white/5 pb-8">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs font-semibold text-secondary">
                        {study.category}
                      </span>
                      <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
                        {study.industry}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {study.githubUrl && (
                        <a
                          href={study.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-white/10 hover:text-white transition-colors"
                        >
                          <Github size={13} />
                          <span>Repository</span>
                        </a>
                      )}
                      {study.liveUrl && (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs font-semibold text-primary hover:bg-secondary/90 transition-colors shadow-sm"
                        >
                          <ExternalLink size={13} />
                          <span>Live System</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                    {study.title}
                  </h2>
                  <p className="mt-1 text-base text-text-secondary">
                    {study.subtitle}
                  </p>
                  <p className="mt-2 font-mono text-xs text-accent">
                    Role: <span className="text-white font-medium">{study.role}</span>
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Challenge */}
                  <div className="rounded-xl bg-surface/30 p-6 border border-white/5">
                    <div className="mb-3 flex items-center gap-2">
                      <Target size={18} className="text-red-400" />
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                        The Challenge
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="rounded-xl bg-surface/30 p-6 border border-white/5">
                    <div className="mb-3 flex items-center gap-2">
                      <Lightbulb size={18} className="text-yellow-400" />
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                        My Approach
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {study.approach.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="rounded-xl bg-surface/30 p-6 border border-white/5">
                    <div className="mb-3 flex items-center gap-2">
                      <TrendingUp size={18} className="text-emerald-400" />
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                        Outcomes & Impact
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {study.outcomes.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/5 pt-6">
                  <span className="font-mono text-xs text-text-muted mr-2">Skills Applied:</span>
                  {study.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/5 bg-primary/80 px-3 py-1.5 font-mono text-xs text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
