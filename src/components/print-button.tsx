"use client";

import { Printer } from "lucide-react";

export function PrintButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`no-print inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-950 transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <Printer size={14} />
      {label}
    </button>
  );
}
