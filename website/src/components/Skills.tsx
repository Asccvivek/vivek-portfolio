"use client";

import { SectionHeading, FadeIn } from "./SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-padding border-y border-line">
      <div className="container-max">
        <SectionHeading
          label="Capabilities — 04"
          title="Skills & capabilities"
          description="Project management, AI integration, operations and platform architecture."
        />

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.06}>
              <div className="border-t border-line pt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="label">{String(i + 1).padStart(2, "0")}</p>
                  <span className="font-mono text-[10px] uppercase tracking-label text-secondary">
                    {group.level}
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-xl font-semibold text-ink">
                  {group.category}
                </h3>

                <ul className="mt-4 divide-y divide-line border-t border-line">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between gap-3 py-2.5 text-[14px] text-text-secondary"
                    >
                      <span>{skill}</span>
                      <span className="h-px w-6 shrink-0 bg-line" />
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
