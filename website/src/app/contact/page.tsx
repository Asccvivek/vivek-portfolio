import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Vivek Debnath",
  description:
    "Get in touch with Vivek Debnath for IT Project Management, Operations, and AI Workflow opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
