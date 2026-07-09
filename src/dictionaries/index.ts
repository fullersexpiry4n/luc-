import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";
import { nl } from "./nl";
import { fr } from "./fr";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { nl, fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
