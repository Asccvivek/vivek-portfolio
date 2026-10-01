"use client";

import { useState, FormEvent } from "react";
import { SectionHeading, FadeIn } from "./SectionHeading";
import { siteConfig } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const fieldBase =
  "w-full border-b border-line bg-transparent px-0 py-3 text-[15px] text-ink placeholder-text-secondary/60 outline-none transition-colors focus:border-secondary";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Job Opportunity", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const links = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, ext: false },
    { label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref, ext: false },
    { label: "LinkedIn", value: "vivek-debnath-it", href: siteConfig.linkedin, ext: true },
    { label: "GitHub", value: "Asccvivek", href: siteConfig.github, ext: true },
    { label: "Facebook", value: "vivek.devnth.9", href: siteConfig.facebook, ext: true },
    { label: "Instagram", value: "viknthdev", href: siteConfig.instagram, ext: true },
    { label: "Location", value: siteConfig.location, href: "", ext: false },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeading
          label="Contact — 05"
          title="Let's talk about the work"
          description="Looking for a project manager who thinks in systems, operates with AI, and executes with precision?"
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <FadeIn className="md:col-span-7">
            <form className="space-y-7" onSubmit={submit}>
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldBase}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldBase}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="label block">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`${fieldBase} appearance-none`}
                >
                  <option>Job Opportunity</option>
                  <option>Collaboration</option>
                  <option>Startup</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="label block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${fieldBase} resize-none`}
                  placeholder="Tell me about the role or project…"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-ink px-7 py-4 font-mono text-[11px] uppercase tracking-label text-primary transition-colors hover:bg-secondary"
              >
                Send message
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.12} className="md:col-span-5">
            <div className="border-t border-line">
              {links.map((l) => (
                <div
                  key={l.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                >
                  <span className="label">{l.label}</span>
                  {l.href ? (
                    <a
                      href={l.href}
                      target={l.ext ? "_blank" : undefined}
                      rel={l.ext ? "noopener noreferrer" : undefined}
                      className="link-underline text-[15px] text-ink hover:text-secondary"
                    >
                      {l.value}
                    </a>
                  ) : (
                    <span className="text-[15px] text-ink">{l.value}</span>
                  )}
                </div>
              ))}
            </div>

            <blockquote className="mt-10 border-t-2 border-secondary pt-6">
              <p className="font-serif text-[22px] italic leading-snug text-ink">
                &ldquo;I transform complex business requirements into operational
                digital ecosystems — combining AI-assisted workflows with
                structured project execution.&rdquo;
              </p>
              <footer className="mt-4 label">— Vivek Debnath</footer>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
