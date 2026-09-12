import type { Dictionary } from "@/content/types";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const tones = ["text-lime", "text-cyan", "text-coral", "text-magenta"];

export function EvidenceStrip({ dict }: { dict: Dictionary }) {
  return (
    <section
      aria-label={dict.evidence.label}
      className="relative border-y border-paper/10 bg-ink-900"
    >
      <div className="container-page py-14">
        <Reveal>
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="text-2xl tracking-tight sm:text-3xl">
              {dict.evidence.title}
            </h2>
            <p className="max-w-sm text-sm text-paper-mute">
              {dict.evidence.note}
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {dict.evidence.items.map((item, index) => (
            <StaggerItem
              key={item.label}
              className="group relative bg-ink-950 p-6 transition-colors hover:bg-ink-850"
            >
              <span className="label-mono text-paper-mute">
                0{index + 1}
              </span>
              <p
                className={`mt-6 font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl ${
                  tones[index % tones.length]
                }`}
              >
                {item.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-paper">
                {item.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-paper-mute">
                {item.detail}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
