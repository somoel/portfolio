"use client";

import { useId, useState } from "react";
import type { SkillGroup } from "@/content/types";

const VISIBLE = 8;

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

export function SkillGroupCard({
  group,
  showAllLabel,
  showLessLabel,
}: {
  group: SkillGroup;
  showAllLabel: string;
  showLessLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const style = emphasisStyles[group.emphasis];
  const hasMore = group.items.length > VISIBLE;
  const visible =
    expanded || !hasMore ? group.items : group.items.slice(0, VISIBLE);
  const hiddenCount = group.items.length - visible.length;

  return (
    <div
      className={`flex h-full flex-col rounded-3xl border p-6 transition-colors hover:bg-ink-850 ${style.border}`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className={`text-lg tracking-tight ${style.text}`}>{group.title}</h3>
        <span
          className={`h-2 w-2 shrink-0 rounded-full ${style.dot}`}
          aria-hidden="true"
        />
      </div>

      <div id={listId} className="mt-5 flex flex-wrap gap-2">
        {visible.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-paper/12 bg-ink-950/60 px-3 py-1.5 text-sm text-paper-dim transition-colors hover:border-paper/30 hover:text-paper"
          >
            {item}
          </span>
        ))}
      </div>

      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={listId}
          className="mt-5 inline-flex min-h-9 items-center gap-1.5 self-start rounded-full border border-paper/15 px-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-paper-mute transition-colors hover:border-paper/40 hover:text-paper"
        >
          {expanded ? showLessLabel : `${showAllLabel} +${hiddenCount}`}
        </button>
      ) : null}
    </div>
  );
}
