import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import type { Dictionary, Locale } from "@/content/types";
import { siteConfig } from "@/lib/site";
import { AnimatedHeadline } from "./animated-headline";
import { Marquee } from "./marquee";
import { Reveal } from "./reveal";

const techBadges = [
  { label: "Py", name: "Python", color: "#c8f63c" },
  { label: "Dj", name: "Django", color: "#34e1f2" },
  { label: "R", name: "React", color: "#3f6bff" },
  { label: "TS", name: "TypeScript", color: "#ff5b39" },
  { label: "GCP", name: "Google Cloud", color: "#ffb627" },
  { label: "PG", name: "PostgreSQL", color: "#ff3d9a" },
];

const marqueeItems = [
  "Python",
  "Django",
  "Django REST Framework",
  "React",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "Google Cloud",
  "Cloud Run",
  "Firestore",
  "Docker",
  "pytest",
  "GitHub Actions",
  "Linux",
];

function MonogramPortrait({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-[2rem] border border-paper/15 bg-ink-850 noise-overlay">
        <Image
          src="/profile.webp"
          alt={dict.hero.photoAlt}
          fill
          priority
          sizes="(min-width: 1024px) 30rem, 100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-ink-950/40" />
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-15" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-magenta/20 blur-3xl" />

        <div className="relative flex aspect-[4/5] flex-col justify-between p-6 sm:p-8">
          <div className="flex items-start justify-between">
            <span className="label-mono text-paper/90">SS.</span>
            <span className="label-mono text-paper/90">Fusagasugá · CO</span>
          </div>

          <div className="flex items-end justify-between">
            <span className="animate-drift mb-3 inline-block h-14 w-14 rounded-full border border-dashed border-paper/40" />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {techBadges.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center gap-2 rounded-xl border border-paper/12 bg-ink-850/70 px-3 py-2 transition-colors hover:border-paper/30"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-mono text-[0.62rem] font-semibold text-ink-950"
              style={{ backgroundColor: tech.color }}
            >
              {tech.label}
            </span>
            <span className="truncate text-xs text-paper-dim group-hover:text-paper">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-lime/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue/10 blur-[130px]" />

      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full border border-paper/20 px-4 py-1.5 label-mono text-paper-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-lime animate-blink" />
                {dict.hero.eyebrow}
              </span>
            </Reveal>

            <h1 className="mt-7">
              <span className="sr-only">
                {dict.hero.name}, {dict.hero.role}
              </span>
              <span className="block" aria-hidden="true">
                <AnimatedHeadline
                  text={dict.hero.name}
                  className="block text-[3.05rem] leading-[0.92] sm:text-[4.2rem] lg:text-[5rem]"
                  delay={0.08}
                />
              </span>
              <span
                aria-hidden="true"
                className="mt-4 block max-w-2xl font-display text-xl font-medium tracking-tight text-paper-dim sm:text-2xl"
              >
                <AnimatedHeadline
                  text={dict.hero.role}
                  delay={0.55}
                  stagger={0.035}
                />
              </span>
            </h1>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper-dim">
                {dict.hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink-950 transition-transform hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  {dict.hero.ctaContact}
                </a>
                <a
                  href="#proyectos"
                  className="group inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink-950"
                >
                  {dict.hero.ctaWork}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={`/${locale}/cv`}
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-paper-dim underline decoration-paper/30 transition-colors hover:text-lime hover:decoration-lime"
                >
                  {dict.hero.cvLabel}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 flex items-center gap-2 text-sm text-paper-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                {dict.hero.status}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25} y={40}>
            <MonogramPortrait dict={dict} />
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <div className="mt-14 flex items-center gap-4 border-y border-paper/10 py-4">
            <span className="hidden shrink-0 label-mono text-paper-mute sm:block">
              {dict.hero.techLabel}
            </span>
            <Marquee items={marqueeItems} className="flex-1" />
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <span className="inline-flex flex-col items-center gap-2 label-mono text-paper-mute">
            {dict.hero.scrollHint}
            <ArrowDown size={15} className="animate-float-slow" />
          </span>
        </div>
      </div>
    </section>
  );
}
