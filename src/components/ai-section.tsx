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
          <p className="mt-8 inline-flex max-w-md items-start gap-3 rounded-2xl border border-dashed border-coral/50 bg-coral/5 px-5 py-4 text-sm text-paper-dim">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-coral" />
            {dict.ai.disclaimer}
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-x-10 md:grid-cols-2">
          {dict.ai.items.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="group flex h-full gap-4 border-t border-paper/10 py-6">
                <span className="pt-1 font-mono text-xs text-magenta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg tracking-tight transition-colors group-hover:text-magenta">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-paper-dim">
                    {item.detail}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
