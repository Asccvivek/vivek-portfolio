"use client";

import { SectionHeading, FadeIn } from "./SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface">
      <div className="container-max">
        <SectionHeading
          label="Experience — 02"
          title="Professional journey"
          description="Fourteen years across BPO operations, campus placements and product delivery — the last seven leading engineering output at NexG."
        />

        <div className="border-t border-line">
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <article className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-label text-secondary">
                    {exp.period}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-label text-text-secondary">
                    {exp.location}
                  </p>
                </div>

                <div className="md:col-span-9">
                  <h3 className="display text-2xl text-ink md:text-[2rem]">
                    {exp.role}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-text-secondary">
                    {exp.company}
                  </p>

                  {exp.achievements?.length > 0 && (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 sm:gap-x-8">
                      {exp.achievements.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[14px] leading-relaxed text-text-secondary"
                        >
                          <span className="mt-[0.55rem] h-1 w-1 shrink-0 bg-secondary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
