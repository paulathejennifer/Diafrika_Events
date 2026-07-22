"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import WhatsAppIcon from "@/app/components/ui/WhatsAppIcon";
import { useActiveSection } from "@/app/hooks/useActiveSection";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const activeId = useActiveSection(navLinks.map((link) => link.href.slice(1)));
  // .slice(1) strips the "#" off each href, since section IDs
  // themselves don't include it (id="home", not id="#home").

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      {!isScrolled && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(248, 245, 240, 0.95) 0%,
              rgba(248, 245, 240, 0) 100%
            )`,
          }}
        />
      )}

      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden lg:flex items-center gap-x-8 font-sans text-sm text-charcoal uppercase tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            // comparing against the SCROLL-TRACKED active section now,
            // instead of usePathname's route comparison.

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`pb-1 transition-colors duration-300 ${
                    isActive
                      ? "text-gold border-b-2 border-gold"
                      : "hover:text-gold border-b-2 border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        
          <a href="wa.me/message/OZO2XVDLBPYUJ1"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-x-2 bg-olive hover:bg-olive-hover text-white text-sm font-sans font-semibold uppercase tracking-wide px-5 py-2.5 rounded-full transition-colors"
        >
          <WhatsAppIcon />
          Book Now
        </a>

        <MobileMenu links={navLinks} />
      </nav>
    </header>
  );
}