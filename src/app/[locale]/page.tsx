import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Hero } from "@/components/site/hero";
import { ServicesGrid } from "@/components/site/services-grid";
import { Stats } from "@/components/site/stats";
import { PricingTabs } from "@/components/site/pricing-tabs";
import { Faq } from "@/components/site/faq";
import { Location } from "@/components/site/location";
import { ContactForm } from "@/components/site/contact-form";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <ServicesGrid dict={dict} locale={locale} />
      <Stats dict={dict} locale={locale} />
      <PricingTabs dict={dict} />
      <Faq dict={dict} />
      <Location dict={dict} />
      <ContactForm dict={dict} />
    </>
  );
}
