import type { Metadata } from "next";
import { Inter, Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Vivek Debnath — Technical Delivery Manager",
  description:
    "Technical Delivery Manager and Solutions Engineer with 14+ years orchestrating 13+ digital platforms, AI-assisted delivery, and scope-to-ship execution. Specializing in solution design, commercial proposal authoring and production delivery.",
  keywords: [
    "Technical Delivery Manager",
    "Solutions Engineer",
    "IT Project Manager",
    "Solution Delivery",
    "AI Operations",
    "Project Coordination",
    "Marketplace Architecture",
    "Product Operations",
    "Vivek Debnath",
  ],
  authors: [{ name: "Vivek Debnath" }],
  openGraph: {
    title: "Vivek Debnath — Technical Delivery Manager",
    description:
      "Shipping from scope to production with AI-assisted delivery across 13+ platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Debnath — Technical Delivery Manager",
    description:
      "Shipping from scope to production with AI-assisted delivery.",
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
      className={`${inter.variable} ${archivo.variable} ${serif.variable} ${jetbrains.variable}`}
    >
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
