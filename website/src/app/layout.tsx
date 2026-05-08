import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Vivek Debnath — IT Project Manager & AI Operations Strategist",
  description:
    "Results-oriented IT Project Manager with experience orchestrating 13+ digital platforms, AI-assisted workflows, and marketplace architectures. Specializing in operational excellence and scalable digital ecosystems.",
  keywords: [
    "IT Project Manager",
    "AI Operations",
    "Project Coordinator",
    "Marketplace Architecture",
    "Product Operations",
    "Startup Operations",
    "Technical Coordination",
    "Vivek Debnath",
  ],
  authors: [{ name: "Vivek Debnath" }],
  openGraph: {
    title: "Vivek Debnath — IT Project Manager & AI Operations Strategist",
    description:
      "Building operational digital ecosystems with AI-first project management across 13+ platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Debnath — IT Project Manager & AI Operations Strategist",
    description:
      "Building operational digital ecosystems with AI-first project management.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrains.variable}`}
    >
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
