import type { ArtTone, Dictionary } from "@/content/types";
import { toneHex } from "./project-art";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, StaggerItem } from "./reveal";

function Emblem({
  initials,
  tone,
}: {
  initials: string;
  tone: ArtTone;
}) {
  const color = toneHex[tone];
  return (
    <div className="relative flex h-20 w-20 items-center justify-center">
      <svg viewBox="0 0 80 80" className="absolute inset-0" aria-hidden="true">
        <path
          d="M40 6l26 9v22c0 18-12 28-26 33-14-5-26-15-26-33V15z"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
        />
        <path
          d="M40 14l18 6v16c0 12-8 19-18 23-10-4-18-11-18-23V20z"
          fill={color}
          opacity="0.16"
        />
      </svg>
      <span
        className="relative font-mono text-sm font-semibold"
        style={{ color }}
      >
        {initials}
      </span>
    </div>
  );
}

export function CertificationsSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="certificaciones"
      className="scroll-mt-24 border-t border-paper/10 bg-ink-900 py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          label={dict.certifications.label}
          title={dict.certifications.title}
          intro={dict.certifications.intro}
          tone="lime"
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.certifications.items.map((cert) => (
            <StaggerItem key={cert.slug}>
              <article className="flex h-full flex-col rounded-3xl border border-paper/12 bg-ink-950 p-7 transition-colors hover:border-paper/30">
                <div className="flex items-start justify-between gap-4">
                  <Emblem initials={cert.initials} tone={cert.tone} />
                  <span className="font-mono text-xs text-paper-mute">
                    {cert.year}
                  </span>
                </div>
                <h3 className="mt-6 text-xl tracking-tight">{cert.name}</h3>
                <p className="mt-1 text-sm text-paper-mute">{cert.issuer}</p>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                  {cert.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
