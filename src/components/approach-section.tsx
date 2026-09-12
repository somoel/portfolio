import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, StaggerItem } from "./reveal";

const tones = [
  "text-lime",
  "text-coral",
  "text-cyan",
  "text-blue",
  "text-amber",
  "text-magenta",
];

export function ApproachSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="metodo"
      className="relative scroll-mt-24 overflow-hidden border-t border-paper/10 py-20 lg:py-28"
    >
      <div className="halftone pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-page relative">
        <SectionHeading
          label={dict.approach.label}
          title={dict.approach.title}
          intro={dict.approach.intro}
          tone="cyan"
        />

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/10 md:grid-cols-2 lg:grid-cols-3">
          {dict.approach.items.map((item, index) => (
            <StaggerItem
              key={item.index}
              className="group relative bg-ink-950 p-7 transition-colors hover:bg-ink-850"
            >
              <div className="flex items-baseline justify-between">
                <span
                  className={`font-display text-5xl font-bold tracking-tight ${tones[index % tones.length]} opacity-80`}
                >
                  {item.index}
                </span>
                <span className="label-mono text-paper-mute">
                  {dict.approach.label}
                </span>
              </div>
              <h3 className="mt-8 text-xl tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {item.detail}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
