import Link from "next/link";
import { KeyRound, MapPin, Phone, Mail } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import { serviceSlugs } from "@/lib/services";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { Separator } from "@/components/ui/separator";

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-3 focus-visible:ring-white/40"
              aria-label="Slotenmaker Luc — home"
            >
              <span className="brand-gradient flex size-9 items-center justify-center rounded-full text-white">
                <KeyRound className="size-4.5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Slotenmaker Luc
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              {dict.footer.tagline}
            </p>
          </div>

          <nav aria-label={dict.footer.servicesTitle}>
            <h2 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">
              {dict.footer.servicesTitle}
            </h2>
            <ul className="flex flex-col gap-2.5">
              {serviceSlugs.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${locale}/diensten/${slug}`}
                    className="rounded text-sm text-white/70 transition-colors outline-none hover:text-white focus-visible:ring-3 focus-visible:ring-white/40"
                  >
                    {dict.services.items[slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">
              {dict.footer.contactTitle}
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {contact.street}
                  <br />
                  {contact.postalCode} {contact.city}, {contact.country}
                </span>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2.5 rounded transition-colors outline-none hover:text-white focus-visible:ring-3 focus-visible:ring-white/40"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="flex items-center gap-2.5 rounded transition-colors outline-none hover:text-white focus-visible:ring-3 focus-visible:ring-white/40"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">
              {dict.footer.hoursTitle}
            </h2>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li className="flex justify-between gap-4">
                <span>{dict.location.days[0].slice(0, 2)}–{dict.location.days[4].slice(0, 2)}</span>
                <span>09:00 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{dict.location.days[5]}</span>
                <span>10:00 – 16:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{dict.location.days[6]}</span>
                <span>{dict.location.closedLabel}</span>
              </li>
            </ul>
            <h2 className="mt-8 mb-3 text-sm font-semibold tracking-wider text-white/40 uppercase">
              {dict.footer.languageTitle}
            </h2>
            <LanguageSwitcher
              current={locale}
              ariaLabel={dict.footer.languageTitle}
              dark
            />
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {contact.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
