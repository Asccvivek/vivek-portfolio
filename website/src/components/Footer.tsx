"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-primary px-6 py-12 md:px-12">
      <div className="container-max">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-xl font-bold">
              <span className="gradient-text">Vivek Debnath</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-text-secondary">
              IT Project Manager & AI Operations Strategist building digital
              ecosystems that scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Navigation</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Case Studies", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Case Studies"
                          ? "/case-studies"
                          : `/#${item.toLowerCase()}`
                      }
                      className="text-sm text-text-secondary transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-2.5 text-text-secondary transition-all hover:border-secondary/30 hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-2.5 text-text-secondary transition-all hover:border-secondary/30 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-lg border border-white/10 p-2.5 text-text-secondary transition-all hover:border-secondary/30 hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Vivek Debnath. Built with Next.js,
            Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
