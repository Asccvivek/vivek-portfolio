"use client";

import { SectionHeading, FadeIn } from "./SectionHeading";
import { aboutContent, services } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeading
          label="About — 03"
          title="Operational excellence, met with AI"
        />

        <div className="grid gap-8 border-t border-line pt-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label">Profile</p>
          </div>
          <div className="space-y-5 md:col-span-9">
            <FadeIn>
              <p className="text-[19px] leading-relaxed text-ink md:text-[22px]">
                {aboutContent.intro}
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="prose-note">{aboutContent.description}</p>
            </FadeIn>
          </div>
        </div>

        {/* Services as a numbered ledger */}
        <div className="mt-16 border-t border-line">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.06}>
              <div className="grid gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-8">
                <p className="label md:col-span-3 md:pt-1.5">
                  {String(i + 1).padStart(2, "0")} / Practice
                </p>
                <div className="md:col-span-9">
                  <h3 className="font-heading text-xl font-semibold text-ink md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {aboutContent.principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="border-t-2 border-secondary pt-5">
                <p className="label mb-3">{String(i + 1).padStart(2, "0")}</p>
                <h4 className="font-heading text-lg font-semibold text-ink">
                  {p.title}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {p.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
