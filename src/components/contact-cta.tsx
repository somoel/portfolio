"use client";

import { useState } from "react";
import { Check, Copy, Download, Mail } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { siteConfig } from "@/lib/site";
import { AnimatedHeadline } from "./animated-headline";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { Reveal } from "./reveal";

export function ContactCta({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden border-t border-paper/10 bg-ink-900 py-20 lg:py-28"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-lime/10 blur-[130px]" />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 label-mono text-paper-dim">
                <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                {dict.contact.label}
              </span>
            </Reveal>
            <AnimatedHeadline
              as="h2"
              text={dict.contact.title}
              className="mt-6 block max-w-3xl text-4xl leading-[0.98] sm:text-5xl lg:text-7xl"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim">
                {dict.contact.intro}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center justify-between gap-4 rounded-2xl bg-lime px-6 py-5 text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3">
                <Mail size={20} />
                <span className="text-left">
                  <span className="block label-mono opacity-70">
                    {dict.contact.emailLabel}
                  </span>
                  <span className="block text-sm font-semibold">
                    {siteConfig.email}
                  </span>
                </span>
              </span>
              <span className="label-mono opacity-60 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:border-lime hover:text-lime"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? dict.contact.copiedEmail : dict.contact.copyEmail}
              </button>
              <a
                href={`/${locale}/cv`}
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:border-lime hover:text-lime"
              >
                <Download size={14} />
                {dict.contact.cvLabel}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-paper/15 px-5 py-4 text-sm text-paper-dim transition-colors hover:border-paper/40 hover:text-paper"
              >
                <GithubIcon size={18} /> {dict.contact.githubLabel}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-paper/15 px-5 py-4 text-sm text-paper-dim transition-colors hover:border-paper/40 hover:text-paper"
              >
                <LinkedinIcon size={18} /> {dict.contact.linkedinLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
