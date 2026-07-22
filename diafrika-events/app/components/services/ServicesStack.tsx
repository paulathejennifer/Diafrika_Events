"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_DURATION = 4500;

const services = [
  { image: "/images/service-1.jpg", title: "Wedding & Traditional Ceremonies", description: "Elegant weddings, ruracio, dowry ceremonies and cultural celebrations planned with timeless style and attention to every detail." },
  { image: "/images/service-2.jpg", title: "Event Décor & Styling", description: "Luxury décor, floral arrangements, table styling and customized themes that transform every venue into an unforgettable experience." },
  { image: "/images/service-3.jpg", title: "Corporate & Social Events", description: "Professional planning and execution for conferences, launches, birthdays, graduations, baby showers and private celebrations." },
  { image: "/images/service-4.jpg", title: "Catering Services", description: "Delicious menus prepared and served with exceptional hospitality for events of every size." },
  { image: "/images/service-5.jpg", title: "Tent, Chair & Equipment Hire", description: "Premium tents, elegant seating, tables, PA systems and event essentials available for seamless event setup." },
  { image: "/images/service-6.jpg", title: "Photography & Videography", description: "Capture every smile, tradition and celebration with professional photography and cinematic event coverage." },
];

// Each visible slot has its own depth treatment — slot 0 is the front,
// fully visible card; slots 1 and 2 sit progressively further back,
// smaller, dimmer, and shifted upward so only a sliver peeks above
// the front card's top edge (matching the reference screenshot).
const slotStyles = [
  { y: 0, scale: 1, opacity: 1, zIndex: 30 },
  { y: -22, scale: 0.96, opacity: 0.85, zIndex: 20 },
  { y: -40, scale: 0.92, opacity: 0.6, zIndex: 10 },
];

export default function ServicesStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = services.length;

  // The visible "window" — always exactly 3 services, starting at
  // currentIndex and wrapping around circularly using modulo, so the
  // stack loops seamlessly from the last service back to the first.
  const visible = [0, 1, 2].map((offset) => ({
    ...services[(currentIndex + offset) % total],
    slot: offset,
  }));

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || isPaused) return;

    const timer = setInterval(goNext, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full max-w-2xl h-[420px] md:h-[460px] mt-10">
        {/* mt-10: reserves room ABOVE the stack for the peeking cards'
            negative y-offset, so slot 2's -40px shift doesn't get
            visually clipped by a parent with no headroom. */}

        <AnimatePresence mode="popLayout">
          {/* mode="popLayout": tells Framer Motion that when an item
              is removed, the REMAINING items should immediately
              reflow/animate into their new positions rather than
              waiting for the removed item's exit animation to fully
              finish first (which is what plain AnimatePresence does).
              This is what makes the "front card flies away WHILE the
              others simultaneously slide forward" look happen
              together, instead of sequentially. */}

          {visible.map((service) => (
            <motion.div
              key={service.title}
              // key={service.title}: THIS is what makes the whole
              // effect work. Since each service's title is unique and
              // stays attached to that specific service's data no
              // matter which slot it's currently rendered in, Framer
              // Motion can track "this exact card" across renders —
              // recognizing when a card's slot changes (animate its
              // position) versus when a card disappears from the
              // visible array entirely (play its exit animation).
              initial={{ y: -60, scale: 0.88, opacity: 0 }}
              animate={slotStyles[service.slot]}
              exit={{ y: 80, opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ zIndex: slotStyles[service.slot].zIndex }}
              onClick={() => service.slot === 0 && goNext()}
              // only the FRONT card (slot 0) is clickable to advance —
              // the peeking cards behind it are non-interactive, since
              // they're mostly hidden anyway.
              className={`absolute inset-x-0 top-0 h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] ${
                service.slot === 0 ? "cursor-pointer" : "pointer-events-none"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority={service.slot === 0}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-white text-2xl md:text-3xl mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-white/85 text-sm max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-x-6 mt-8">
        <button
          onClick={goPrev}
          aria-label="Previous service"
          className="w-10 h-10 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="font-sans text-warmgray text-sm">
          {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>

        <button
          onClick={goNext}
          aria-label="Next service"
          className="w-10 h-10 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}