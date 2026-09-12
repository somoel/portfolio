"use client";

import type { CSSProperties, MouseEvent } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Dictionary, ProjectItem } from "@/content/types";
import { ProjectArt, toneHex } from "./project-art";
import { motion } from "motion/react";

export function ProjectCard({
  project,
  dict,
  wide = false,
  delay = 0,
}: {
  project: ProjectItem;
  dict: Dictionary;
  wide?: boolean;
  delay?: number;
}) {
  const color = toneHex[project.art];

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--spot-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--spot-y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <motion.article
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ "--spot-color": color } as CSSProperties}
      className={`spotlight-card project-card group flex flex-col overflow-hidden rounded-3xl border border-paper/12 bg-ink-850/80 ${
        wide ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-paper/10 ${
          wide ? "lg:w-[52%] lg:border-r" : "border-b"
        }`}
      >
        <div className="aspect-[16/11] lg:h-full lg:aspect-auto lg:min-h-[19rem]">
          <ProjectArt slug={project.slug} tone={project.art} />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 label-mono text-paper-dim backdrop-blur">
          {project.index}
        </span>
        <span
          className="absolute right-4 top-4 rounded-full px-3 py-1 label-mono text-ink-950"
          style={{ backgroundColor: color }}
        >
          {dict.projects.statuses[project.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          {project.year ? (
            <span className="font-mono text-xs text-paper-mute">
              {project.year}
            </span>
          ) : null}
        </div>

        <p className="mt-2 text-sm font-medium" style={{ color }}>
          {project.tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-paper-dim">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-paper/15 px-3 py-1 text-xs text-paper-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              {dict.projects.viewSite}
              <ArrowUpRight size={14} />
            </a>
          ) : null}

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:border-lime hover:text-lime"
            >
              {dict.projects.viewCode}
              <ArrowUpRight size={14} />
            </a>
          ) : null}

          {!project.repo && !project.demo ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-paper-mute">
              <Lock size={13} />
              {dict.projects.privateNote}
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
