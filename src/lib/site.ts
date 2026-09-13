import type { Locale } from "@/content/types";

export const siteConfig = {
  url: "https://samuelsegura.vercel.app",
  name: "Samuel David Segura Vargas",
  shortName: "Samuel Segura",
  email: "jhamirsami05@gmail.com",
  location: "Colombia",
  linkedin: "https://linkedin.com/in/samuelseguravargas",
  github: "https://github.com/somoel",
} as const;

export const locales = ["es", "en"] as const;
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizedUrl(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return clean
    ? `${siteConfig.url}/${locale}/${clean}`
    : `${siteConfig.url}/${locale}`;
}

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const localeShort: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};
