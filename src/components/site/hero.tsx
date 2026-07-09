"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Clock, Phone } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import { PillLink } from "@/components/site/pill-button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(useGSAP);

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Intro timeline — the photo settles first, then the copy stacks in.
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero='media']", {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        })
          .from(
            "[data-hero='media-img']",
            { scale: 1.08, duration: 1.8, ease: "power2.out" },
            "<",
          )
          .from(
            "[data-hero='badge']",
            { y: 20, opacity: 0, duration: 0.5 },
            "-=1.5",
          )
          .from(
            "[data-hero='title']",
            { y: 44, opacity: 0, duration: 0.85 },
            "-=0.2",
          )
          .from(
            "[data-hero='subtitle']",
            { y: 26, opacity: 0, duration: 0.6 },
            "-=0.45",
          )
          .from(
            "[data-hero='cta'] > *",
            { y: 18, opacity: 0, duration: 0.5, stagger: 0.1 },
            "-=0.3",
          )
          .from(
            "[data-hero='note']",
            { opacity: 0, duration: 0.5 },
            "-=0.2",
          );
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Full-bleed photo behind the content */}
      <div data-hero="media" className="absolute inset-0 -z-10">
        <Image
          data-hero="media-img"
          src="/images/hero-locksmith.jpg"
          alt={dict.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        {/* Scrim keeps the copy readable on top of the photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-start justify-center px-5 pt-40 pb-12 text-left sm:px-8">
        <div data-hero="badge">
          <Badge
            variant="outline"
            className="mb-6 gap-1.5 rounded-full border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur"
          >
            <Clock className="size-3.5" aria-hidden="true" />
            {dict.hero.badge}
          </Badge>
        </div>

        <h1
          id="hero-title"
          data-hero="title"
          className="max-w-3xl font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] font-extrabold tracking-tighter text-balance text-white"
        >
          {dict.hero.title}{" "}
          <span className="text-gradient-bright block">
            {dict.hero.titleAccent}
          </span>
        </h1>

        <p
          data-hero="subtitle"
          className="mt-6 max-w-xl text-lg text-balance text-white/75 sm:text-xl"
        >
          {dict.hero.subtitle}
        </p>

        <div
          data-hero="cta"
          className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <PillLink
            href={contact.phoneHref}
            size="lg"
            className="w-full bg-white text-neutral-950 sm:w-auto"
          >
            <Phone className="size-4.5" aria-hidden="true" />
            {dict.hero.ctaPrimary}
          </PillLink>
          <PillLink
            href={`/${locale}#diensten`}
            size="lg"
            variant="ghost"
            className="w-full border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 sm:w-auto"
          >
            {dict.hero.ctaSecondary}
          </PillLink>
        </div>

        <p data-hero="note" className="mt-6 text-sm text-white/60">
          {dict.hero.note}
        </p>
      </div>
    </section>
  );
}
