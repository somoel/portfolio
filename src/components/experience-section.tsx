import Image from "next/image";
import { Building2, MapPin } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ExperienceSection({ dict }: { dict: Dictionary }) {
  const experience = dict.experience;

  return (
    <section id="experiencia" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          label={experience.label}
          title={experience.title}
          intro={experience.intro}
          tone="coral"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <div className="card-edge sticky top-28 rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <Image
                  src="/afais.webp"
                  alt={experience.logoAlt}
                  width={909}
                  height={910}
                  sizes="56px"
                  className="h-14 w-14 shrink-0 object-contain"
                />
                <div>
                  <p className="font-display text-xl tracking-tight">
                    {experience.company}
                  </p>
                  <p className="text-xs text-paper-mute">
                    {experience.companyNote}
                  </p>
                </div>
              </div>

              <p className="mt-6 font-display text-2xl tracking-tight text-coral">
                {experience.role}
              </p>

              <div className="mt-4 flex flex-col gap-2 text-sm text-paper-dim">
                <span className="inline-flex items-center gap-2">
                  <Building2 size={15} className="text-paper-mute" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-paper-mute" />
                  {experience.location}
                </span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-paper-dim">
                {experience.summary}
              </p>

              <div className="mt-7">
                <span className="label-mono text-paper-mute">
                  {experience.stackLabel}
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-paper/15 px-3 py-1 text-xs text-paper-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="flex flex-col">
            {experience.highlights.map((highlight, index) => (
              <StaggerItem key={highlight.title}>
                <article className="group grid gap-3 border-t border-paper/10 py-7 sm:grid-cols-[auto_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-paper-mute">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl tracking-tight transition-colors group-hover:text-coral">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-paper-dim">
                      {highlight.detail}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
            <div className="border-t border-paper/10" />
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
