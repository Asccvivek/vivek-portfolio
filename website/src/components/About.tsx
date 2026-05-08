"use client";

import { Layers, Brain, Rocket } from "lucide-react";
import { SectionHeading, FadeIn } from "./SectionHeading";
import { aboutContent, services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={28} className="text-secondary" />,
  brain: <Brain size={28} className="text-accent" />,
  network: <Rocket size={28} className="text-success" />,
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeading
          label="About Me"
          title="Operational Excellence Meets AI Innovation"
        />

        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center text-text-secondary">
          <FadeIn>
            <p className="text-lg">{aboutContent.intro}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>{aboutContent.description}</p>
          </FadeIn>
        </div>

        {/* Services / Pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="glass-card group p-8 transition-all hover:-translate-y-1 hover:border-secondary/20">
                <div className="mb-4">{iconMap[service.icon]}</div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Principles */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {aboutContent.principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="border-l-2 border-secondary/30 pl-6">
                <h4 className="mb-2 font-heading text-base font-semibold text-white">
                  {p.title}
                </h4>
                <p className="text-sm text-text-secondary">{p.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
