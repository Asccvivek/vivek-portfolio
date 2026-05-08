"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/SectionHeading";
import { aboutContent } from "@/lib/data";

export function AboutPageContent() {
  return (
    <section className="section-padding pt-32">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="mb-2 font-mono text-sm text-accent">About Me</p>
          <h1 className="font-heading text-4xl font-bold md:text-5xl">
            The Person Behind the Platforms
          </h1>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-6 text-text-secondary">
          <FadeIn>
            <p className="text-lg leading-relaxed">{aboutContent.intro}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="leading-relaxed">{aboutContent.description}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="leading-relaxed">
              My approach is built on three principles:
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          {aboutContent.principles.map((p, i) => (
            <FadeIn key={p.title} delay={0.1 * i}>
              <div className="glass-card p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {p.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 font-heading text-2xl font-bold text-white">
              My Working Style
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Structured yet Adaptive",
                  desc: "Framework-driven thinking with flexibility to pivot",
                },
                {
                  title: "Detail-Oriented yet Big-Picture",
                  desc: "Zoom into specifics while maintaining strategic alignment",
                },
                {
                  title: "Collaborative yet Decisive",
                  desc: "Coordinate across teams while driving clear decisions",
                },
                {
                  title: "AI-Augmented yet Human-Centered",
                  desc: "Leverage AI tools while keeping user needs at the core",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/5 bg-surface/40 p-4"
                >
                  <h4 className="mb-1 text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
