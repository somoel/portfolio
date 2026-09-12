import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <span className="font-display text-[22vw] leading-none tracking-[-0.08em] text-ink-700 sm:text-[12rem]">
        404
      </span>
      <p className="max-w-md text-paper-dim">
        Esta página no existe. / This page does not exist.
      </p>
      <div className="flex gap-3">
        <Link
          href="/es"
          className="rounded-full bg-lime px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-950"
        >
          Español
        </Link>
        <Link
          href="/en"
          className="rounded-full border border-paper/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper"
        >
          English
        </Link>
      </div>
    </div>
  );
}
