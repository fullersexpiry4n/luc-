import Link from "next/link";
import { KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

export function Logo({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <Link
      href={`/${locale}`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
      aria-label="Slotenmaker Luc — home"
    >
      <span className="brand-gradient flex size-9 items-center justify-center rounded-full text-white shadow-sm">
        <KeyRound className="size-4.5" aria-hidden="true" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        Slotenmaker Luc
      </span>
    </Link>
  );
}
