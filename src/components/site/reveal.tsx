"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Vertical offset the children animate up from. */
  y?: number;
  /** Delay between each direct child, in seconds. */
  stagger?: number;
  /** Scroll position that starts the reveal (ScrollTrigger syntax). */
  start?: string;
}

/**
 * GSAP + ScrollTrigger reveal wrapper. Animates each direct child up and in
 * with a stagger when the container scrolls into view. Uses gsap.matchMedia so
 * that when the visitor prefers reduced motion nothing is hidden — the content
 * is simply shown without animation.
 */
export function Reveal({
  children,
  className,
  y = 26,
  stagger = 0.12,
  start = "top 84%",
}: RevealProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>(el.children);
        if (items.length === 0) return;

        gsap.from(items, {
          y,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={cn(className)}>
      {children}
    </div>
  );
}
