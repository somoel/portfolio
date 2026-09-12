"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "@/content/types";
import { localeShort } from "@/lib/site";

export function LanguageSwitch({
  locale,
  otherLocale,
  label,
}: {
  locale: Locale;
  otherLocale: Locale;
  label: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  const target =
    pathname.replace(/^\/(es|en)(?=\/|$)/, `/${otherLocale}`) ||
    `/${otherLocale}`;

  return (
    <Link
      href={target}
      aria-label={label}
      className="group inline-flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1.5 label-mono text-paper-dim transition-colors hover:border-lime hover:text-lime"
    >
      <span className="text-paper-mute">{localeShort[locale]}</span>
      <span className="text-paper/30">/</span>
      <span className="group-hover:text-lime">{localeShort[otherLocale]}</span>
    </Link>
  );
}
