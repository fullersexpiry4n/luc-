import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, localeHtmlLang, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { MobileCallBar } from "@/components/site/mobile-call-bar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    metadataBase: new URL("https://slotenmakerluc.be"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        nl: "/nl",
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <html
      lang={localeHtmlLang[typedLocale]}
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteNav dict={dict} locale={typedLocale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter dict={dict} locale={typedLocale} />
        <MobileCallBar dict={dict} />
        <Toaster position="top-center" theme="light" richColors />
      </body>
    </html>
  );
}
