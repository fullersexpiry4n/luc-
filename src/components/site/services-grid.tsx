"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { serviceIcons, serviceSlugs } from "@/lib/services";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeader } from "@/components/site/section";

export function ServicesGrid({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const reduce = useReducedMotion();

  return (
    <Section id="diensten" tone="gray">
      <SectionHeader
        tag={dict.services.tag}
        title={dict.services.title}
        subtitle={dict.services.subtitle}
      />
      <Reveal className="grid gap-5 sm:grid-cols-2" stagger={0.1}>
        {serviceSlugs.map((slug) => {
          const Icon = serviceIcons[slug];
          const service = dict.services.items[slug];
          return (
            <motion.article
              key={slug}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="group relative"
            >
              <Link
                href={`/${locale}/diensten/${slug}`}
                className="hairline soft-shadow flex h-full flex-col gap-5 rounded-3xl bg-white p-7 outline-none transition-shadow hover:shadow-[0_16px_44px_-16px_rgba(102,51,238,0.25)] focus-visible:ring-3 focus-visible:ring-ring/50 sm:p-9"
              >
                <span className="brand-gradient flex size-12 items-center justify-center rounded-2xl text-white shadow-sm">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {dict.services.learnMore}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.article>
          );
        })}
      </Reveal>
    </Section>
  );
}
