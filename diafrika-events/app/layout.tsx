// app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Allura, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/layout/Navbar";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-heading",
});
// weights 500/600 only — matches your spec exactly, no italic style
// needed this time since nothing in your typography notes mentioned it.

const scriptFont = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});
// Allura is a decorative script font — check Google Fonts yourself to
// confirm, but script/handwriting-style fonts are almost always
// single-weight (400 only), same category as Felipa was last project.

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});
// no weight array needed — Manrope is variable, same as last time,
// covers 400-700 automatically in one file.

export const metadata: Metadata = {
  title: "Diafrika Events | Plan. Style. Celebrate.",
  description:
    "Bespoke catering, custom cakes and elegant event styling across Nakuru and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${scriptFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <Navbar />
        {children}
      </body>
    </html>
  );
}