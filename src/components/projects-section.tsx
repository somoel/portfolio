import type { Dictionary } from "@/content/types";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function ProjectsSection({ dict }: { dict: Dictionary }) {
  const featured = dict.projects.items.filter((project) => project.featured);
  const secondary = dict.projects.items.filter((project) => !project.featured);

  return (
    <section
      id="proyectos"
      className="scroll-mt-24 border-t border-paper/10 py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          label={dict.projects.label}
          title={dict.projects.title}
          intro={dict.projects.intro}
          tone="lime"
        />

        <div className="mt-14">
          <Reveal>
            <span className="label-mono text-paper-mute">
              {dict.projects.featuredLabel}
            </span>
          </Reveal>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                dict={dict}
                wide={index === 0}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <span className="label-mono text-paper-mute">
              {dict.projects.secondaryLabel}
            </span>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {secondary.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                dict={dict}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
