import type { Dictionary } from "@/dictionaries";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeader } from "@/components/site/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <Section id="faq" tone="gray">
      <SectionHeader
        tag={dict.faq.tag}
        title={dict.faq.title}
        subtitle={dict.faq.subtitle}
      />
      <Reveal className="mx-auto max-w-3xl">
        <Accordion
          type="single"
          collapsible
          className="hairline soft-shadow rounded-3xl bg-white px-6 sm:px-8"
        >
          {dict.faq.items.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="border-border/70"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold tracking-tight hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
