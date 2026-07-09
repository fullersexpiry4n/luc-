"use client";

import Link from "next/link";
import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Menu } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/logo";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { PillLink } from "@/components/site/pill-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteNav({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCondensed(latest > 80);
  });

  const links = [
    { href: `/${locale}#diensten`, label: dict.nav.services },
    { href: `/${locale}#prijzen`, label: dict.nav.prices },
    { href: `/${locale}#faq`, label: dict.nav.faq },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={condensed ? "pill" : "top"}
        variants={
          reduce
            ? undefined
            : {
                top: {
                  marginTop: 0,
                  maxWidth: "100%",
                  borderRadius: 0,
                },
                pill: {
                  marginTop: 12,
                  maxWidth: "min(56rem, calc(100vw - 1.5rem))",
                  borderRadius: 9999,
                },
              }
        }
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={cn(
          "mx-auto flex h-16 w-full items-center justify-between gap-4 px-5 sm:px-8",
          "border-b border-border/60 bg-white/80 backdrop-blur-xl",
          condensed &&
            "border border-border/60 shadow-[0_8px_30px_-12px_rgba(10,10,11,0.18)] sm:px-6",
        )}
        style={condensed && !reduce ? { borderRadius: 9999 } : undefined}
      >
        <Logo locale={locale} />

        <nav
          aria-label={dict.nav.menuTitle}
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher
            current={locale}
            ariaLabel={dict.nav.languageLabel}
          />
          <PillLink href={`/${locale}#contact`} size="md">
            {dict.nav.cta}
          </PillLink>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="rounded-full"
                aria-label={dict.nav.openMenu}
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-display text-left text-lg">
                  {dict.nav.menuTitle}
                </SheetTitle>
              </SheetHeader>
              <nav
                aria-label={dict.nav.menuTitle}
                className="flex flex-col gap-1 px-4"
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-5 px-4 pb-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    {dict.nav.languageLabel}
                  </span>
                  <LanguageSwitcher
                    current={locale}
                    ariaLabel={dict.nav.languageLabel}
                  />
                </div>
                <PillLink
                  href={`/${locale}#contact`}
                  size="lg"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {dict.nav.cta}
                </PillLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
