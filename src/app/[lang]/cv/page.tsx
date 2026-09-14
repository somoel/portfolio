import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { getDictionary, isLocale } from "@/content";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { PrintButton } from "@/components/print-button";
import { localizedUrl, siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/cv">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  const url = `${localizedUrl(lang)}/cv`;

  return {
    title: dict.cv.title,
    description: dict.cv.description,
    alternates: {
      canonical: url,
      languages: {
        "es-CO": `${localizedUrl("es")}/cv`,
        en: `${localizedUrl("en")}/cv`,
        "x-default": `${localizedUrl("es")}/cv`,
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function CvPage({ params }: PageProps<"/[lang]/cv">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const featured = dict.projects.items.filter((project) => project.featured);
  const primarySkills = dict.skills.groups.filter(
    (group) => group.emphasis === "primary",
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href={`/${lang}`}
          className="inline-flex min-h-11 items-center gap-2 label-mono text-paper-dim transition-colors hover:text-lime"
        >
          <ArrowLeft size={14} />
          {dict.cv.backLabel}
        </Link>
        <PrintButton label={dict.cv.printLabel} />
      </div>

      <header className="print-break border-b border-paper/15 pb-8">
        <h1 className="font-display text-4xl leading-[0.98] tracking-tight sm:text-5xl">
          {dict.hero.name}
        </h1>
        <p className="mt-2 text-lg text-paper-dim">{dict.hero.role}</p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper-dim">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2"
          >
            <Mail size={14} /> {siteConfig.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} /> {siteConfig.location}
          </span>
          <a
            href={siteConfig.github}
            className="inline-flex items-center gap-2"
          >
            <GithubIcon size={14} /> github.com/somoel
          </a>
          <a
            href={siteConfig.linkedin}
            className="inline-flex items-center gap-2"
          >
            <LinkedinIcon size={14} /> linkedin.com/in/samuelseguravargas
          </a>
        </div>
      </header>

      <Section title={dict.cv.experienceHeading}>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-display text-xl tracking-tight">
            {dict.experience.role} · {dict.experience.company}
          </p>
          <p className="label-mono text-paper-mute">{dict.experience.period}</p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-paper-dim">
          {dict.experience.summary}
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {dict.experience.highlights.map((highlight) => (
            <li
              key={highlight.title}
              className="text-sm leading-relaxed text-paper-dim"
            >
              <span className="font-semibold text-paper">
                {highlight.title}:
              </span>{" "}
              {highlight.detail}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={dict.cv.projectsHeading}>
        <div className="flex flex-col gap-5">
          {featured.map((project) => (
            <div key={project.slug} className="print-break">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-paper">{project.name}</p>
                {project.year ? (
                  <span className="label-mono text-paper-mute">
                    {project.year}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-paper-dim">
                {project.description}
              </p>
              <p className="mt-1 text-xs text-paper-mute">
                {project.technologies.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={dict.cv.skillsHeading}>
        <div className="flex flex-col gap-3">
          {primarySkills.map((group) => (
            <div key={group.key} className="text-sm text-paper-dim">
              <span className="font-semibold text-paper">{group.title}: </span>
              {group.items.join(", ")}
            </div>
          ))}
        </div>
      </Section>

      <Section title={dict.cv.educationHeading}>
        <p className="font-semibold text-paper">
          {dict.education.degree} · {dict.education.school}
        </p>
        <p className="mt-1 text-sm text-paper-dim">
          {dict.education.period} · {dict.education.gpaLabel}:{" "}
          {dict.education.gpa}
        </p>
        <ul className="mt-3 flex flex-col gap-1">
          {dict.education.scores.map((score) => (
            <li key={score.label} className="text-sm text-paper-dim">
              <span className="font-semibold text-paper">{score.label}:</span>{" "}
              {score.score} — {score.percentile}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={dict.cv.certificationsHeading}>
        <ul className="flex flex-col gap-2">
          {dict.certifications.items.map((cert) => (
            <li key={cert.slug} className="text-sm text-paper-dim">
              <span className="font-semibold text-paper">{cert.name}</span> ·{" "}
              {cert.issuer} · {cert.year}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={dict.cv.aiHeading}>
        <p className="text-sm leading-relaxed text-paper-dim">
          {dict.ai.disclaimer}
        </p>
        <p className="mt-2 text-sm text-paper-dim">
          {dict.ai.items.map((item) => item.title).join(" · ")}
        </p>
      </Section>

      <footer className="no-print mt-12 flex items-center justify-between border-t border-paper/15 pt-6">
        <Link
          href={`/${lang}`}
          className="label-mono inline-flex min-h-11 items-center text-paper-dim transition-colors hover:text-lime"
        >
          {dict.cv.backLabel}
        </Link>
        <PrintButton label={dict.cv.printLabel} />
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="print-break border-b border-paper/12 py-8 last:border-b-0">
      <h2 className="label-mono text-paper-mute">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
