"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { heroContent, siteConfig } from "@/lib/data";

const ticker = [
  "Senior IT Project Manager",
  "Software Project Manager",
  "Technical Project Coordinator",
  "AI Operations",
  "Platform Delivery",
  "Bhopal, India",
];

export function Hero() {
  const [lead, tail] = heroContent.headline.split("That");

  return (
    <section className="relative overflow-hidden pt-16 md:pt-[72px]">
      <div className="container-max">
        {/* meta rail */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line py-4">
          <span className="label">Portfolio / 2026</span>
          <span className="label hidden sm:block">14+ Years · 13+ Platforms</span>
          <span className="flex items-center gap-2 label text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Available for senior PM roles
          </span>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-14 lg:pt-16">
          {/* ---------- statement ---------- */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[13vw] leading-[0.9] sm:text-[9vw] lg:text-[5.4rem] xl:text-[6.2rem]"
            >
              {lead}
              That{" "}
              <span className="font-serif font-normal italic tracking-[-0.02em] text-secondary">
                {tail.trim()}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-7 max-w-[54ch] text-[17px] leading-relaxed text-text-secondary"
            >
              {heroContent.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <Link
                href="/#work"
                className="group inline-flex items-center gap-2 bg-ink px-7 py-4 font-mono text-[11px] uppercase tracking-label text-primary transition-colors hover:bg-secondary"
              >
                Selected work
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/resume.pdf"
                className="group inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-label text-ink hover:border-secondary hover:text-secondary"
              >
                <Download size={14} />
                Download résumé
              </Link>
            </motion.div>

            {/* previous roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-12 border-t border-line pt-5"
            >
              <p className="label">Previously</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-label text-text-secondary">
                <li className="text-ink">NexG · 2019—26</li>
                <li>Orion Edu Tech · 2016—19</li>
                <li>Firstsource · 2015</li>
                <li>HGS · 2012—15</li>
              </ul>
            </motion.div>
          </div>

          {/* ---------- portrait ---------- */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface">
              <Image
                src="/profile.jpg"
                alt={`${siteConfig.name} — ${siteConfig.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 34vw"
                className="object-cover object-top grayscale-[0.15] transition-all duration-700 hover:grayscale-0"
              />
              <span className="absolute left-0 top-0 bg-secondary px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-label text-primary">
                Vivek Debnath
              </span>
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-label text-text-secondary">
              <span>Bhopal, India</span>
              <span>2012 — 2026</span>
            </figcaption>
          </motion.figure>
        </div>

        {/* ---------- ledger stats ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 grid grid-cols-2 border-t border-line md:grid-cols-4"
        >
          {heroContent.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-line px-0 py-5 md:border-b-0 md:border-r md:px-5 md:last:border-r-0 md:first:pl-0"
            >
              <p className="display text-3xl text-ink md:text-4xl">{stat.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------- ticker ---------- */}
      <div className="mt-16 overflow-hidden border-y border-line bg-surface py-3">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8">
              {ticker.map((t) => (
                <span
                  key={`${dup}-${t}`}
                  className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-label text-text-secondary"
                >
                  {t}
                  <span className="h-1 w-1 rounded-full bg-secondary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <a
        href="/#work"
        aria-label="Scroll to work"
        className="absolute bottom-6 left-6 hidden text-text-secondary hover:text-secondary lg:block"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="block"
        >
          <ArrowDown size={16} />
        </motion.span>
      </a>
    </section>
  );
}
