import { Sparkles } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

export function AiSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="ia"
      className="relative scroll-mt-24 overflow-hidden border-t border-paper/10 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-magenta/10 blur-[120px]" />
      <div className="container-page relative">
        <SectionHeading
          label={dict.ai.label}
          title={dict.ai.title}
          intro={dict.ai.intro}
          tone="magenta"
        />

        <Reveal delay={0.1}>
          <p className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-dashed border-coral/50 bg-coral/5 px-5 py-4 text-sm text-paper-dim">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-coral" />
            {dict.ai.disclaimer}
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.ai.items.map((item, index) => (
            <StaggerItem key={item.title}>
              <article className="group h-full rounded-3xl border border-paper/12 bg-ink-850/60 p-7 transition-colors hover:border-magenta/50">
                <span className="font-mono text-xs text-magenta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl tracking-tight transition-colors group-hover:text-magenta">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {item.detail}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
