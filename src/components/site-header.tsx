"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { Logo } from "./logo";
import { LanguageSwitch } from "./language-switch";

export function SiteHeader({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-paper/10 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <div className="flex items-center gap-3">
          <Logo locale={locale} />
          <span className="hidden h-4 w-px bg-paper/20 sm:block" />
          <span className="hidden label-mono text-paper-mute sm:block">
            {dict.hero.role}
          </span>
        </div>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative label-mono text-paper-dim transition-colors hover:text-paper after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-lime after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch
            locale={locale}
            otherLocale={dict.otherLocale}
            label={dict.languageSwitchLabel}
          />
          <a
            href="#contacto"
            className="hidden rounded-full bg-lime px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-950 transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            {dict.contact.emailLabel}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-lime hover:text-lime lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-paper/10 bg-ink-950/98 lg:hidden"
        >
          <nav
            aria-label="Menú móvil"
            className="container-page flex flex-col py-6"
          >
            {dict.nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-paper/10 py-4 font-display text-3xl tracking-tight text-paper transition-colors hover:text-lime"
              >
                {item.label}
                <span className="font-mono text-xs text-paper-mute">
                  0{index + 1}
                </span>
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex justify-center rounded-full bg-lime px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-950"
            >
              {dict.contact.emailLabel}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
