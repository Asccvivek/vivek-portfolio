"use client";

import { SectionHeading, FadeIn } from "./SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-max">
        <SectionHeading
          label="Expertise"
          title="Skills & Capabilities"
          description="A comprehensive toolkit spanning project management, AI integration, operations, and platform architecture."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div className="glass-card h-full p-6 transition-all hover:-translate-y-1 hover:border-secondary/20">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-base font-semibold text-white">
                    {group.category}
                  </h3>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 font-mono text-xs text-secondary">
                    {group.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/5 bg-primary/60 px-3 py-1.5 text-xs text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
