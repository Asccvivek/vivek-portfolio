"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Download, MapPin, BadgeCheck } from "lucide-react";
import { heroContent, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />

      <div className="container-max relative z-10 grid items-center gap-12 px-6 py-24 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* ---------- Left: copy ---------- */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Available for Senior PM roles
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-3 font-mono text-sm text-accent"
          >
            {siteConfig.title} • Bhopal, India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl"
          >
            {heroContent.headline.split("That").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}That</span>
              ) : (
                <span key={i} className="gradient-text">
                  {part}
                </span>
              )
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              href="/#projects"
              className="rounded-xl bg-secondary px-8 py-3.5 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/25"
            >
              View My Work
            </Link>
            <Link
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-3.5 font-medium text-white transition-all hover:border-white/25 hover:bg-white/5"
            >
              <Download size={18} />
              Download Resume
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-5 md:grid-cols-4"
          >
            {heroContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-surface/50 px-3 py-3 text-center backdrop-blur-sm"
              >
                <p className="font-heading text-xl font-bold text-white md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------- Right: photo ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm justify-self-center lg:max-w-none"
        >
          {/* accent halo */}
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-secondary/25 via-accent/15 to-secondary/25 blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface/70 p-2 backdrop-blur-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
              <Image
                src="/profile.jpg"
                alt={`${siteConfig.name} — ${siteConfig.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top"
              />
              {/* subtle bottom scrim for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </div>

            {/* Floating credential card */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl border border-white/10 bg-primary/85 px-3.5 py-3 backdrop-blur-md">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                <BadgeCheck size={18} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  {siteConfig.name}
                </p>
                <p className="flex items-center gap-1 truncate text-xs text-text-secondary">
                  <MapPin size={11} className="shrink-0" />
                  {siteConfig.location} • 14+ yrs
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
