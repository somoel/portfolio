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
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const navKey = dict.nav.map((item) => item.href).join("|");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = dict.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((element): element is HTMLElement => element !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navKey]);

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
          <Logo locale={locale} label={dict.logoAria} />
          <span className="hidden h-4 w-px bg-paper/20 sm:block" />
          <span className="hidden label-mono text-paper-mute sm:block">
            {dict.hero.role}
          </span>
        </div>

        <nav
          aria-label={dict.navAria}
          className="hidden items-center gap-7 lg:flex"
        >
          {dict.nav.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative label-mono transition-colors focus-visible:transition-none after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-lime after:transition-all hover:text-paper ${
                  isActive
                    ? "text-paper after:w-full"
                    : "text-paper-dim after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
            aria-label={open ? dict.menuClose : dict.menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-lime hover:text-lime lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px overflow-hidden bg-paper/10"
      >
        <div
          className="h-full w-full origin-left bg-lime transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-paper/10 bg-ink-950/98 lg:hidden"
        >
          <nav
            aria-label={dict.mobileMenuAria}
            className="container-page flex flex-col py-6"
          >
            {dict.nav.map((item, index) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-baseline justify-between border-b border-paper/10 py-4 font-display text-3xl tracking-tight transition-colors focus-visible:transition-none hover:text-lime ${
                    isActive ? "text-lime" : "text-paper"
                  }`}
                >
                  {item.label}
                  <span className="font-mono text-xs text-paper-mute">
                    0{index + 1}
                  </span>
                </a>
              );
            })}
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
