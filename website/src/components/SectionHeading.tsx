"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-10 border-t border-line pt-5 md:mb-14"
    >
      <div className="grid gap-5 md:grid-cols-12 md:gap-8">
        {label && (
          <p className="label md:col-span-3 md:pt-2">{label}</p>
        )}
        <div className="md:col-span-9">
          <h2 className="display text-[2rem] leading-[0.98] text-ink sm:text-[2.6rem] lg:text-[3.2rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-text-secondary">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
