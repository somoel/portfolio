import { AnimatedHeadline } from "./animated-headline";
import { Reveal } from "./reveal";
import { toneHex } from "./project-art";
import type { ArtTone } from "@/content/types";

export function SectionHeading({
  label,
  title,
  intro,
  tone = "lime",
  align = "left",
}: {
  label: string;
  title: string;
  intro?: string;
  tone?: ArtTone;
  align?: "left" | "center";
}) {
  const color = toneHex[tone];

  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <Reveal>
        <span className="inline-flex items-center gap-3 label-mono text-paper-dim">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: color }}
          />
          {label}
        </span>
      </Reveal>
      <AnimatedHeadline
        as="h2"
        text={title}
        className="max-w-3xl text-4xl leading-[0.98] sm:text-5xl lg:text-6xl"
      />
      {intro ? (
        <Reveal delay={0.12}>
          <p
            className={`max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
