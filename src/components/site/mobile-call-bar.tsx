"use client";

import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Phone } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { contact } from "@/lib/contact";

/**
 * Fixed call-to-action bar for small screens. Slides in once the visitor
 * scrolls past the hero (which carries its own call button) and stays put
 * for one-thumb dialing. Hidden entirely from md upward.
 */
export function MobileCallBar({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 420);
  });

  return (
    <div className="md:hidden">
      {/* Reserves space at the end of the page so the bar never covers the footer */}
      <div aria-hidden="true" className="h-20" />
      <motion.div
        initial={false}
        animate={visible ? "shown" : "hidden"}
        variants={{ shown: { y: 0 }, hidden: { y: "130%" } }}
        transition={
          reduce
            ? { duration: 0 }
            : { type: "spring", stiffness: 320, damping: 32 }
        }
        style={{ pointerEvents: visible ? "auto" : "none" }}
        className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
      >
        <a
          href={contact.phoneHref}
          className="brand-gradient brand-glow flex h-14 w-full items-center justify-center gap-2.5 rounded-full text-base font-semibold text-white outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Phone className="size-5" aria-hidden="true" />
          {dict.hero.ctaPrimary}
          <span className="font-medium text-white/75">{contact.phone}</span>
        </a>
      </motion.div>
    </div>
  );
}
