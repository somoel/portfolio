import type { Dictionary, SkillGroup } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const emphasisStyles: Record<
  SkillGroup["emphasis"],
  { border: string; dot: string; text: string }
> = {
  primary: {
    border: "border-paper/15",
    dot: "bg-lime",
    text: "text-paper",
  },
  secondary: {
    border: "border-paper/12",
    dot: "bg-cyan",
    text: "text-paper-dim",
  },
  exploring: {
    border: "border-paper/10 border-dashed",
    dot: "bg-coral",
    text: "text-paper-dim",
  },
};

export function SkillsSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-paper/10 bg-ink-900 py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          label={dict.skills.label}
          title={dict.skills.title}
          intro={dict.skills.intro}
          tone="blue"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.skills.groups.map((group, index) => {
            const style = emphasisStyles[group.emphasis];
            const isWide = group.items.length > 8;
            return (
              <Reveal
                key={group.key}
                delay={index * 0.05}
                className={isWide ? "lg:col-span-2" : ""}
              >
                <div
                  className={`h-full rounded-3xl border p-6 transition-colors hover:bg-ink-850 ${style.border}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className={`text-lg tracking-tight ${style.text}`}>
                      {group.title}
                    </h3>
                    <span className="inline-flex items-center gap-2">
                      {group.emphasis === "exploring" ? (
                        <span className="label-mono text-coral">
                          {dict.skills.exploringNote}
                        </span>
                      ) : null}
                      <span
                        className={`h-2 w-2 rounded-full ${style.dot}`}
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-paper/12 bg-ink-950/60 px-3 py-1.5 text-sm text-paper-dim transition-colors hover:border-paper/30 hover:text-paper"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
