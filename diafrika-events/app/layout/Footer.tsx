import Link from "next/link";
import { MapPin } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa6";

import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-border px-6 md:px-16 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Logo />
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-sans font-semibold text-charcoal text-sm uppercase tracking-wide mb-4">
            Quick Links
          </h3>

          <ul className="flex flex-wrap justify-center md:flex-col md:justify-start gap-x-4 gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-warmgray text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="text-center md:text-left">
          <h3 className="font-sans font-semibold text-charcoal text-sm uppercase tracking-wide mb-4">
            Follow Us
          </h3>

          <div className="flex justify-center md:justify-start items-center gap-5">
            <a
              href="https://www.instagram.com/diafrika_eventsco/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-warmgray hover:text-gold transition-colors"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@diafrika.events"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-warmgray hover:text-gold transition-colors"
            >
              <FaTiktok size={20} />
            </a>

            <a
              href="https://web.facebook.com/DiafrikaEvents/?ref=NONE_xav_ig_profile_page_web#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-warmgray hover:text-gold transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="text-center md:text-left">
          <h3 className="font-sans font-semibold text-charcoal text-sm uppercase tracking-wide mb-4">
            Location
          </h3>

          <p className="flex items-center justify-center md:justify-start gap-x-2 font-sans text-warmgray text-sm">
            <MapPin size={16} className="text-gold shrink-0" />
            Western Kenya
          </p>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="font-sans text-warmgray text-xs">
          © {new Date().getFullYear()} Diafrika Events. All Rights Reserved.
        </p>
      </div>
      
    </footer>
  );
}