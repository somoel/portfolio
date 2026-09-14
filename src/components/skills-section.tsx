import type { Dictionary } from "@/content/types";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { SkillGroupCard } from "./skill-group";

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

        <Reveal delay={0.1}>
          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-paper-mute">
            <li className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
              {dict.skills.verifiedNote}
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
              {dict.skills.projectsNote}
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              {dict.skills.exploringNote}
            </li>
          </ul>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.skills.groups.map((group, index) => (
            <Reveal key={group.key} delay={index * 0.05} className="h-full">
              <SkillGroupCard
                group={group}
                showAllLabel={dict.skills.showAll}
                showLessLabel={dict.skills.showLess}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
