"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-primary/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight">
          <span className="gradient-text">VD</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume.pdf"
              className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/5 bg-primary/95 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                className="inline-block rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white"
              >
                Resume
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
