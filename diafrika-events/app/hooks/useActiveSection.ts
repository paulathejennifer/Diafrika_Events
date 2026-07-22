// hooks/useActiveSection.ts
"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            // when a section crosses into view, mark ITS id as active.
            // Unlike useInView, we do NOT unobserve here — we want
            // this to keep firing every time a DIFFERENT section
            // enters/exits view, for as long as the page is open.
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
      // rootMargin shrinks the "detection zone" to the MIDDLE 20% of
      // the viewport (40% cut off top and bottom) — meaning a section
      // only counts as "active" once it's genuinely centered in view,
      // not just barely peeking in at the very edge of the screen.
      // This prevents the active link from flickering between two
      // sections when you're right at the boundary between them.
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}