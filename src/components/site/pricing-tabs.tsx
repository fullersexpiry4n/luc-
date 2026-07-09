"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Info } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { serviceIcons } from "@/lib/services";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeader } from "@/components/site/section";
import { PriceTable } from "@/components/site/price-table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function PricingTabs({ dict }: { dict: Dictionary }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(dict.pricing.services[0].slug as string);

  return (
    <Section id="prijzen">
      <SectionHeader
        tag={dict.pricing.tag}
        title={dict.pricing.title}
        subtitle={dict.pricing.subtitle}
      />
      <Reveal>
        <Tabs value={active} onValueChange={setActive} className="gap-8">
          <TabsList className="mx-auto h-auto flex-wrap justify-center gap-1 rounded-full bg-muted p-1.5">
            {dict.pricing.services.map((service) => {
              const Icon = serviceIcons[service.slug];
              return (
                <TabsTrigger
                  key={service.slug}
                  value={service.slug}
                  className="gap-2 rounded-full px-4 py-2 text-sm data-[state=active]:shadow-sm"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {service.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {dict.pricing.services.map((service) => (
            <TabsContent key={service.slug} value={service.slug}>
              <AnimatePresence mode="wait" initial={false}>
                {active === service.slug ? (
                  <motion.div
                    key={service.slug}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mx-auto w-full max-w-3xl"
                  >
                    <PriceTable
                      rows={service.rows}
                      fromLabel={dict.pricing.fromLabel}
                      caption={service.label}
                    />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mx-auto mt-8 flex max-w-2xl items-start gap-2.5 text-center text-sm text-muted-foreground sm:text-left">
          <Info
            className="mt-0.5 hidden size-4 shrink-0 sm:block"
            aria-hidden="true"
          />
          {dict.pricing.disclaimer}
        </p>
      </Reveal>
    </Section>
  );
}
