"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type GalleryControlsProps = {
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  autoplayDuration: number;
  isPaused: boolean;
};

export default function GalleryControls({
  index,
  total,
  onNext,
  onPrev,
  autoplayDuration,
  isPaused,
}: GalleryControlsProps) {
  const paddedIndex = String(index + 1).padStart(2, "0");
  // padStart(2, "0"): pads single-digit numbers with a leading zero —
  // turns "1" into "01", matching your "01 / 10" counter format.
  const paddedTotal = String(total).padStart(2, "0");

  return (
    <>
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={onNext}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-6 right-6 md:right-10 z-10 flex items-center gap-x-3 font-sans text-white text-xs">
        <span>{paddedIndex}</span>

        <div className="w-24 md:w-32 h-px bg-white/30 relative overflow-hidden">
          <motion.div
            key={index}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoplayDuration / 1000, ease: "linear" }}
            className="absolute inset-y-0 left-0 bg-gold"
          />
          {/* key={index}: same trick as the crossfade — changing the
              key forces this bar to unmount/remount from scratch every
              time the slide changes, which is what makes it visually
              RESTART from 0% each time rather than continuing from
              wherever it left off. */}
        </div>

        <span>{paddedTotal}</span>
      </div>
    </>
  );
}