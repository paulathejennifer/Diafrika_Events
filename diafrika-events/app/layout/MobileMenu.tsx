"use client";

import { useState } from "react";
import Link from "next/link";

type MobileMenuProps = {
  links: { label: string; href: string }[];
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.766.46 3.492 1.334 5.008L2 22l5.107-1.34A9.96 9.96 0 0 0 12.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.164a8.15 8.15 0 0 1-4.16-1.14l-.298-.177-3.03.795.81-2.955-.194-.303a8.15 8.15 0 0 1-1.248-4.384c0-4.508 3.669-8.176 8.177-8.176 4.508 0 8.176 3.668 8.176 8.176 0 4.508-3.668 8.164-8.176 8.164z" />
    </svg>
  );
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="text-charcoal"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center gap-y-6">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-charcoal"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl text-charcoal"
            >
              {link.label}
            </Link>
          ))}

          
           <a href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-x-2 bg-olive hover:bg-olive-hover text-white text-sm font-sans font-semibold uppercase tracking-wide px-5 py-2.5 rounded-full transition-colors"
          >
            <WhatsAppIcon />
            Book Now
          </a>
        </div>
      )}
    </div>
  );
}