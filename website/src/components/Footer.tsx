"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Phone, Twitter } from "lucide-react";
import { siteConfig, socials } from "@/lib/data";

const nav = [
  { label: "Selected work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Contact", href: "/#contact" },
];

const connect = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, ext: false },
  { label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref, ext: false },
  { label: "LinkedIn", value: "vivek-debnath-it", href: siteConfig.linkedin, ext: true },
  { label: "GitHub", value: "Asccvivek", href: siteConfig.github, ext: true },
  { label: "Facebook", value: "vivek.devnth.9", href: siteConfig.facebook, ext: true },
  { label: "Instagram", value: "viknthdev", href: siteConfig.instagram, ext: true },
  { label: "X", value: "VivekDvnath", href: siteConfig.twitter, ext: true },
  { label: "Résumé", value: "Download PDF", href: "/resume.pdf", ext: false },
];

const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-primary">
      <div className="container-max py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-label text-primary/50">
              Senior IT Project Manager
            </p>
            <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-primary/70">
              Building digital ecosystems that scale — across restaurant ERP,
              e-commerce, healthcare and AI operations.
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Available for senior PM roles
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {socials.map((s) => {
                const Icon = socialIcons[s.key];
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} — ${s.handle}`}
                    title={`${s.label} — ${s.handle}`}
                    className="inline-flex h-9 w-9 items-center justify-center border border-primary/25 text-primary/70 transition-colors hover:border-secondary hover:bg-secondary hover:text-primary"
                  >
                    <Icon size={15} strokeWidth={1.75} />
                  </a>
                );
              })}
              <a
                href={siteConfig.phoneHref}
                aria-label={`Call ${siteConfig.phone}`}
                title={siteConfig.phone}
                className="inline-flex h-9 items-center gap-2 border border-primary/25 px-3 font-mono text-[11px] tracking-label text-primary/70 transition-colors hover:border-secondary hover:bg-secondary hover:text-primary"
              >
                <Phone size={13} strokeWidth={1.75} />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-label text-primary/50">
              Index
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="link-underline text-[15px] text-primary/80 hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-label text-primary/50">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {connect.map((c) => (
                <li key={c.label} className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-label text-primary/45">
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.ext ? "_blank" : undefined}
                    rel={c.ext ? "noopener noreferrer" : undefined}
                    className="link-underline inline-flex items-center gap-1 text-[15px] text-primary/85 hover:text-secondary"
                  >
                    {c.value}
                    {c.ext && <ArrowUpRight size={13} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-primary/15">
        <div className="container-max flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-label text-primary/45">
            © {new Date().getFullYear()} Vivek Debnath
          </p>
          <p className="font-mono text-[10px] uppercase tracking-label text-primary/45">
            Bhopal, India — 23.26°N 77.41°E
          </p>
        </div>
      </div>
    </footer>
  );
}
