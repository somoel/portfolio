import { en } from "./en";
import { es } from "./es";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en";
}
