"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-primary/90 backdrop-blur-md"
          : "border-transparent bg-primary/0"
      }`}
    >
      <nav className="container-max flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-ink"
        >
          <span className="h-2.5 w-2.5 bg-secondary transition-transform duration-300 group-hover:rotate-45" />
          Vivek Debnath
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="link-underline font-mono text-[11px] uppercase tracking-label text-text-secondary hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/resume.pdf"
            className="hidden items-center gap-1 bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-label text-primary transition-colors hover:bg-secondary sm:inline-flex"
          >
            Résumé
            <ArrowUpRight size={13} />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-ink md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-line bg-primary md:hidden">
          <ul className="container-max flex flex-col divide-y divide-line py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 font-heading text-lg text-ink"
                >
                  {link.label}
                  <ArrowUpRight size={16} className="text-text-secondary" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 font-heading text-lg text-secondary"
              >
                Download Résumé
                <ArrowUpRight size={16} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
