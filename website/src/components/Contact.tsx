"use client";

import { SectionHeading, FadeIn } from "./SectionHeading";
import { siteConfig } from "@/lib/data";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Exceptional"
          description="Looking for a project manager who thinks in systems, operates with AI, and executes with precision? Let's talk."
        />

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <FadeIn>
            <form className="space-y-5" action="#" method="POST">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/10 bg-surface/60 px-4 py-3 text-sm text-white placeholder-text-secondary/50 outline-none transition-colors focus:border-secondary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-surface/60 px-4 py-3 text-sm text-white placeholder-text-secondary/50 outline-none transition-colors focus:border-secondary"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-text-secondary">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-white/10 bg-surface/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-secondary"
                >
                  <option value="job">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="startup">Startup</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-surface/60 px-4 py-3 text-sm text-white placeholder-text-secondary/50 outline-none transition-colors focus:border-secondary"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-secondary px-6 py-3.5 font-medium text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/25"
              >
                Send Message
              </button>
            </form>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="mb-4 font-heading text-lg font-semibold text-white">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-text-secondary transition-colors hover:text-white"
                  >
                    <Mail size={18} className="text-secondary" />
                    <span className="text-sm">{siteConfig.email}</span>
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary transition-colors hover:text-white"
                  >
                    <Linkedin size={18} className="text-secondary" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary transition-colors hover:text-white"
                  >
                    <Github size={18} className="text-secondary" />
                    <span className="text-sm">GitHub Profile</span>
                  </a>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin size={18} className="text-secondary" />
                    <span className="text-sm">{siteConfig.location}</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <p className="text-sm italic leading-relaxed text-text-secondary">
                  &ldquo;I transform complex business requirements into operational
                  digital ecosystems — combining AI-assisted workflows with
                  structured project execution to build platforms that scale.&rdquo;
                </p>
                <p className="mt-3 font-mono text-xs text-accent">
                  — Vivek Debnath
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
