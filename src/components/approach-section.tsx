import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, StaggerItem } from "./reveal";

const toneColors = [
  "#c8f63c",
  "#ff5b39",
  "#34e1f2",
  "#3f6bff",
  "#ffb627",
  "#ff3d9a",
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

        <StaggerGroup className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {dict.approach.items.map((item, index) => {
            const color = toneColors[index % toneColors.length];
            return (
              <StaggerItem key={item.index} className="h-full">
                <article className="group flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 font-mono text-sm font-semibold transition-colors"
                      style={{ borderColor: color, color }}
                    >
                      {item.index}
                    </span>
                    <span
                      className="h-px flex-1"
                      style={{
                        backgroundImage: `repeating-linear-gradient(to right, ${color} 0 6px, transparent 6px 12px)`,
                        opacity: 0.45,
                      }}
                      aria-hidden="true"
                    />
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-paper/25 transition-colors group-hover:text-paper/60"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-xl tracking-tight">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-paper-dim">
                    {item.detail}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
