"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import GalleryControls from "./GalleryControls";

const AUTOPLAY_DURATION = 5000;

const galleryImages = [
  {
    src: "/images/image1.jpg",
    title: "Traditional Ceremony",
    subtitle: "Kikuyu Ruracio",
    description:
      "Elegant cultural celebrations that honour tradition with modern sophistication.",
  },
  {
    src: "/images/image2.jpg",
    title: "Luxury Wedding",
    subtitle: "Wedding Reception",
    description:
      "Beautiful wedding décor crafted to create unforgettable memories.",
  },
  {
    src: "/images/image3.jpg",
    title: "Corporate Events",
    subtitle: "Executive Conferences",
    description:
      "Professional event planning for brands that demand excellence.",
  },
  {
    src: "/images/image4.jpg",
    title: "Birthday Celebrations",
    subtitle: "Luxury Birthdays",
    description:
      "Stylish celebrations designed for every milestone.",
  },
  {
    src: "/images/image5.jpg",
    title: "Baby Showers",
    subtitle: "Elegant Baby Shower",
    description:
      "Beautifully curated décor for life's sweetest moments.",
  },
  {
    src: "/images/image6.jpg",
    title: "Graduation Parties",
    subtitle: "Celebrate Success",
    description:
      "Creating memorable celebrations for life's achievements.",
  },
  {
    src: "/images/image7.jpg",
    title: "Outdoor Events",
    subtitle: "Luxury Garden Setup",
    description:
      "Premium outdoor experiences with stunning floral styling.",
  },
  {
    src: "/images/image8.jpg",
    title: "Floral Décor",
    subtitle: "Fresh Floral Artistry",
    description:
      "Elegant floral arrangements that transform every venue.",
  },
  {
    src: "/images/image9.jpg",
    title: "Catering",
    subtitle: "Exceptional Dining",
    description:
      "Delicious cuisine served with elegance and professionalism.",
  },
  {
    src: "/images/image10.jpg",
    title: "Complete Event Setup",
    subtitle: "One Team. Every Detail.",
    description:
      "Décor, catering, photography, sound, tents and everything in between.",
  },
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = galleryImages.length;
  const current = galleryImages[index];

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

useEffect(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || isPaused) return;

  const timer = setTimeout(() => {
    goNext();
  }, AUTOPLAY_DURATION);

  return () => clearTimeout(timer);
}, [index, isPaused, goNext]);

  return (
    <div
      className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-charcoal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
transition={{
  duration: 0.6,
  ease: "easeInOut",
}}
          className="absolute inset-0"
        >
<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: 1.08 }}
  transition={{
    duration: AUTOPLAY_DURATION / 1000,
    ease: "linear",
  }}
  className="absolute inset-0 will-change-transform"
>
            <Image
              src={current.src}
              alt={current.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <p className="font-sans text-gold text-xs md:text-sm uppercase tracking-[0.2em] mb-2">
                {current.subtitle}
              </p>

              <h3 className="font-serif text-white text-2xl md:text-4xl mb-2">
                {current.title}
              </h3>

              <p className="font-sans text-white/80 text-sm max-w-md">
                {current.description}
              </p>
            </div>


          </motion.div>
        </motion.div>
      </AnimatePresence>

      <GalleryControls
        index={index}
        total={total}
        onNext={goNext}
        onPrev={goPrev}
        autoplayDuration={AUTOPLAY_DURATION}
        isPaused={isPaused}
      />
    </div>
  );
}