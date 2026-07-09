"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Section, SectionHeader } from "@/components/site/section";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function formatValue(value: number, decimals: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : `${locale}-BE`, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Revolut-style big-number strip. GSAP tweens each number from 0 to its target
 * when the section scrolls into view; with reduced motion the final values are
 * rendered immediately (they are in the markup from the start for no-JS too).
 */
export function Stats({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils
          .toArray<HTMLElement>(el.querySelectorAll("[data-count]"))
          .forEach((numEl) => {
            const target = Number(numEl.dataset.count);
            const decimals = Number(numEl.dataset.decimals ?? 0);
            const state = { value: 0 };

            gsap.to(state, {
              value: target,
              duration: 1.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: numEl,
                start: "top 85%",
                once: true,
              },
              onUpdate: () => {
                numEl.textContent = formatValue(state.value, decimals, locale);
              },
              onComplete: () => {
                numEl.textContent = formatValue(target, decimals, locale);
              },
            });
          });
      });

      return () => mm.revert();
    },
    { scope, dependencies: [locale] },
  );

  return (
    <Section tone="dark">
      <div ref={scope}>
        <SectionHeader
          tag={dict.stats.tag}
          title={dict.stats.title}
          subtitle={dict.stats.subtitle}
          dark
        />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {dict.stats.items.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <dt className="order-2 text-sm text-white/60">{stat.label}</dt>
              <dd className="font-display order-1 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">
                  {stat.prefix}
                  <span
                    data-count={stat.value}
                    data-decimals={stat.decimals ?? 0}
                  >
                    {formatValue(stat.value, stat.decimals ?? 0, locale)}
                  </span>
                  {stat.suffix}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
