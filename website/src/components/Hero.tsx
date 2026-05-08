"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { heroContent } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />

      <div className="container-max relative z-10 px-6 text-center md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          IT Project Manager • AI Operations • Platform Builder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
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
          className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4"
        >
          {heroContent.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} className="text-text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
