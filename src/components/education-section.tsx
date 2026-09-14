import { GraduationCap } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

export function EducationSection({ dict }: { dict: Dictionary }) {
  const education = dict.education;

  return (
    <section id="educacion" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          label={education.label}
          title={education.title}
          intro={education.intro}
          tone="amber"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card-edge relative overflow-hidden rounded-3xl p-7 sm:p-9">
              <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber text-ink-950">
                  <GraduationCap size={22} />
                </span>
                <h3 className="mt-6 font-display text-3xl tracking-tight sm:text-4xl">
                  {education.degree}
                </h3>
                <p className="mt-2 text-paper-dim">{education.school}</p>
                <p className="mt-1 label-mono text-paper-mute">
                  {education.period}
                </p>

                <div className="mt-8 inline-flex flex-col rounded-2xl border border-paper/15 px-6 py-4">
                  <span className="label-mono text-paper-mute">
                    {education.gpaLabel}
                  </span>
                  <span className="mt-1 font-display text-4xl font-bold tracking-tight text-amber">
                    {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="flex flex-col gap-5">
            {education.scores.map((score) => (
              <StaggerItem key={score.label}>
                <div className="group flex items-center justify-between gap-4 rounded-3xl border border-paper/12 bg-ink-850/70 p-6 transition-colors hover:border-amber/60">
                  <div>
                    <p className="label-mono text-paper-mute">{score.label}</p>
                    <p className="mt-2 font-display text-2xl tracking-tight">
                      {score.score}
                    </p>
                  </div>
                  <p className="max-w-[9rem] text-right text-sm font-semibold text-amber">
                    {score.percentile}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
