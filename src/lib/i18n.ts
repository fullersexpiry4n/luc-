export const locales = ["nl", "fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  fr: "Français",
  en: "English",
};

export const localeLabels: Record<Locale, string> = {
  nl: "NL",
  fr: "FR",
  en: "EN",
};

export const localeHtmlLang: Record<Locale, string> = {
  nl: "nl-BE",
  fr: "fr-BE",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
