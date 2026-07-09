"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, localeNames, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Swaps the locale segment of the current pathname so switching language
 * keeps the visitor on the same page.
 */
export function LanguageSwitcher({
  current,
  ariaLabel,
  className,
  dark = false,
}: {
  current: Locale;
  ariaLabel: string;
  className?: string;
  dark?: boolean;
}) {
  const pathname = usePathname() ?? `/${current}`;

  const pathFor = (locale: Locale) => {
    const segments = pathname.split("/");
    // ["", "nl", ...rest] — replace the locale segment.
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "flex items-center gap-0.5 rounded-full p-1",
        dark ? "bg-white/10" : "bg-muted",
        className,
      )}
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={pathFor(locale)}
          lang={locale}
          aria-current={locale === current ? "true" : undefined}
          aria-label={localeNames[locale]}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
            locale === current
              ? dark
                ? "bg-white text-foreground shadow-sm"
                : "bg-background text-foreground shadow-sm"
              : dark
                ? "text-white/60 hover:text-white"
                : "text-muted-foreground hover:text-foreground",
          )}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </nav>
  );
}
