import Link from "next/link";
import type { Locale } from "@/content/types";

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
} as const;

export function Logo({
  locale,
  size = "md",
  className = "",
}: {
  locale: Locale;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <Link
      href={`/${locale}`}
      aria-label="Samuel Segura — inicio"
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <span
        className={`font-display font-bold leading-none tracking-[-0.08em] ${sizes[size]}`}
      >
        <span className="text-lime transition-transform duration-300 group-hover:-translate-y-0.5 inline-block">
          S
        </span>
        <span className="text-coral transition-transform duration-300 group-hover:translate-y-0.5 inline-block">
          S
        </span>
        <span className="text-cyan">.</span>
      </span>
    </Link>
  );
}
