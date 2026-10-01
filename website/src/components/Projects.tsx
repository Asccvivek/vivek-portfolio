"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading, FadeIn } from "./SectionHeading";
import { projects } from "@/lib/data";
import { brandFor } from "@/lib/brands";

export function Projects() {
  return (
    <section id="work" className="section-padding">
      <div className="container-max">
        <SectionHeading
          label="Selected work — 01"
          title="Platforms I've built & coordinated"
          description="13+ production ecosystems across refurbished e-commerce, enterprise SaaS ERP, dental healthcare, mobility and AI automation."
        />

        <div className="border-t border-line">
          {projects.map((project, i) => {
            const brand = brandFor(project.slug);
            const n = String(i + 1).padStart(2, "0");
            return (
              <FadeIn key={project.slug} delay={i * 0.04}>
                <Link
                  href={`/case-studies#${project.slug}`}
                  className="group relative block border-b border-line"
                >
                  <div className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-1 px-1 py-6 transition-colors duration-300 group-hover:bg-ink md:grid-cols-[3.5rem_3.5rem_1fr_14rem_3rem] md:gap-x-6 md:py-7">
                    <span className="self-start font-mono text-[11px] tracking-label text-text-secondary transition-colors group-hover:text-secondary md:self-center">
                      {n}
                    </span>

                    <span
                      className="hidden h-11 w-11 shrink-0 items-center justify-center overflow-hidden border md:flex"
                      style={{
                        borderColor: `${brand.accent}55`,
                        background: `radial-gradient(circle at 30% 25%, ${brand.accent}26, rgba(20,18,15,0.04))`,
                      }}
                    >
                      {brand.logo ? (
                        <Image
                          src={brand.logo}
                          alt={`${project.title} mark`}
                          width={44}
                          height={44}
                          className="h-full w-full object-contain p-1.5"
                        />
                      ) : (
                        <span
                          className="font-heading text-[13px] font-bold"
                          style={{ color: brand.accent }}
                        >
                          {brand.monogram}
                        </span>
                      )}
                    </span>

                    <span className="min-w-0">
                      <span className="block font-heading text-xl font-semibold leading-tight text-ink transition-colors group-hover:text-primary md:text-[26px]">
                        {project.title}
                      </span>
                      <span className="mt-1 block truncate text-[13px] text-text-secondary transition-colors group-hover:text-primary/70">
                        {project.subtitle}
                      </span>
                    </span>

                    <span className="hidden font-mono text-[10px] uppercase tracking-label text-text-secondary transition-colors group-hover:text-primary/70 md:block">
                      {project.category}
                    </span>

                    <span className="flex items-center justify-end gap-3 text-text-secondary transition-colors group-hover:text-secondary">
                      <ArrowUpRight
                        size={20}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>

                  {/* metric strip revealed on hover (desktop) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="hidden overflow-hidden bg-ink transition-all duration-300 max-h-0 group-hover:max-h-24 md:block">
                      <div className="flex flex-wrap gap-x-6 gap-y-1 px-1 pb-5 pl-[5.5rem] pt-0 font-mono text-[10px] uppercase tracking-label text-primary/70">
                        {project.metrics.slice(0, 3).map((m) => (
                          <span key={m} className="text-secondary">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-label text-text-secondary">
            {projects.length} entries · full case studies inside
          </p>
          <Link
            href="/projects"
            className="link-underline font-mono text-[11px] uppercase tracking-label text-ink hover:text-secondary"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
