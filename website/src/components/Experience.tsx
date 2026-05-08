"use client";

import { SectionHeading, FadeIn } from "./SectionHeading";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Driving operational excellence across multi-platform digital ecosystems."
        />

        <div className="mx-auto max-w-3xl">
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative border-l-2 border-secondary/30 pl-8 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-secondary bg-primary">
                  <Briefcase size={12} className="text-secondary" />
                </div>

                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {exp.period}
                  </span>
                </div>

                <p className="mb-4 text-sm text-text-secondary">
                  {exp.company} • {exp.location}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary/60" />
                      {item}
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
