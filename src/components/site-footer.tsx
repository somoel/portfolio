import { Mail } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { siteConfig } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { Logo } from "./logo";

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-paper/10 bg-ink-900">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo locale={locale} size="lg" />
          <p className="mt-4 max-w-xs text-sm text-paper-dim">
            {dict.hero.tagline}
          </p>
          <p className="mt-4 label-mono text-paper-mute">
            {siteConfig.location}
          </p>
        </div>

        <nav aria-label="Enlaces del sitio" className="flex flex-col gap-3">
          <span className="label-mono text-paper-mute">
            {dict.projects.label}
          </span>
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-paper-dim transition-colors hover:text-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="label-mono text-paper-mute">
            {dict.contact.label}
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-lime"
          >
            <Mail size={15} /> {siteConfig.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-lime"
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-lime"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-paper-mute sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. {dict.contact.footerNote}
          </p>
          <p className="label-mono">Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
