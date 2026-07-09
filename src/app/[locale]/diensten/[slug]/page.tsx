import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, Clock, Layers, ShieldCheck } from "lucide-react";
import { locales, isLocale } from "@/lib/i18n";
import { serviceSlugs, serviceIcons, isServiceSlug } from "@/lib/services";
import { getDictionary } from "@/dictionaries";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeader } from "@/components/site/section";
import { PriceTable } from "@/components/site/price-table";
import { PillLink } from "@/components/site/pill-button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) return {};
  const detail = getDictionary(locale).serviceDetail.items[slug];
  return {
    title: detail.meta.title,
    description: detail.meta.description,
    alternates: {
      canonical: `/${locale}/diensten/${slug}`,
      languages: {
        nl: `/nl/diensten/${slug}`,
        fr: `/fr/diensten/${slug}`,
        en: `/en/diensten/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) notFound();

  const dict = getDictionary(locale);
  const detail = dict.serviceDetail.items[slug];
  const pricing = dict.pricing.services.find((s) => s.slug === slug);
  const Icon = serviceIcons[slug];

  const facts = [
    {
      icon: Clock,
      label: detail.details.turnaroundLabel,
      value: detail.details.turnaround,
    },
    {
      icon: Layers,
      label: detail.details.materialsLabel,
      value: detail.details.materials,
    },
    {
      icon: ShieldCheck,
      label: detail.details.guaranteeLabel,
      value: detail.details.guarantee,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          aria-hidden="true"
          className="brand-blob pointer-events-none absolute -top-40 right-[-10%] h-[26rem] w-[26rem] rounded-full opacity-20"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href={`/${locale}`}
                  className="rounded transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {dict.serviceDetail.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li>
                <Link
                  href={`/${locale}#diensten`}
                  className="rounded transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {dict.serviceDetail.breadcrumbServices}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-foreground">
                {detail.hero.tag}
              </li>
            </ol>
          </nav>

          <Reveal className="flex max-w-3xl flex-col items-start gap-6">
            <Badge
              variant="outline"
              className="gap-2 rounded-full border-border/80 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur"
            >
              <span className="brand-gradient flex size-5 items-center justify-center rounded-full text-white">
                <Icon className="size-3" aria-hidden="true" />
              </span>
              {detail.hero.tag}
            </Badge>
            <h1 className="font-display text-[clamp(2.25rem,8.5vw,3.75rem)] font-extrabold tracking-tighter text-balance">
              {detail.hero.title}
            </h1>
            <p className="text-lg text-balance text-muted-foreground sm:text-xl">
              {detail.hero.subtitle}
            </p>
            <PillLink href={`/${locale}#contact`} size="lg" className="mt-2">
              {detail.cta.button}
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </PillLink>
          </Reveal>
        </div>
      </section>

      {/* Intro + facts */}
      <Section tone="gray">
        <Reveal className="grid gap-10 lg:grid-cols-5" stagger={0.15}>
          <div className="flex flex-col gap-5 lg:col-span-3">
            {detail.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-lg leading-relaxed text-foreground/90"
              >
                {paragraph}
              </p>
            ))}
            <div className="hairline soft-shadow mt-2 rounded-3xl bg-white p-7">
              <h2 className="font-display mb-5 text-xl font-bold tracking-tight">
                {detail.included.title}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {detail.included.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="brand-gradient mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full text-white">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="hairline soft-shadow flex flex-col gap-6 rounded-3xl bg-white p-7">
              <h2 className="font-display text-xl font-bold tracking-tight">
                {detail.details.title}
              </h2>
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-surface">
                    <fact.icon className="size-5 text-brand" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{fact.label}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 3 steps */}
      <Section>
        <SectionHeader title={detail.steps.title} align="center" />
        <Reveal className="grid gap-5 md:grid-cols-3" stagger={0.14}>
          {detail.steps.items.map((step) => (
            <article
              key={step.step}
              className="hairline soft-shadow rounded-3xl bg-white p-7"
            >
              <span className="text-gradient font-display text-4xl font-extrabold tracking-tight">
                {step.step}
              </span>
              <h3 className="font-display mt-4 text-xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </article>
          ))}
        </Reveal>
      </Section>

      {/* Pricing */}
      {pricing ? (
        <Section tone="gray">
          <SectionHeader
            title={detail.pricingTitle}
            subtitle={detail.pricingSubtitle}
          />
          <Reveal className="mx-auto max-w-3xl">
            <PriceTable
              rows={pricing.rows}
              fromLabel={dict.pricing.fromLabel}
              caption={detail.pricingTitle}
            />
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {dict.pricing.disclaimer}
            </p>
          </Reveal>
        </Section>
      ) : null}

      {/* Mini FAQ */}
      <Section>
        <SectionHeader title={detail.faq.title} />
        <Reveal className="mx-auto max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="hairline soft-shadow rounded-3xl bg-white px-6 sm:px-8"
          >
            {detail.faq.items.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`detail-faq-${i}`}
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

      {/* CTA banner */}
      <Section tone="dark" className="py-16 sm:py-20">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            {detail.cta.title}
          </h2>
          <p className="max-w-xl text-lg text-white/60">{detail.cta.subtitle}</p>
          <PillLink
            href={`/${locale}#contact`}
            size="lg"
            className="mt-2 bg-white text-foreground hover:text-white"
          >
            {detail.cta.button}
            <ArrowRight className="size-4.5" aria-hidden="true" />
          </PillLink>
        </Reveal>
      </Section>
    </>
  );
}
