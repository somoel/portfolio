export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const half = [...items, ...items];
  const track = [...half, ...half];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-3 px-5 label-mono text-paper-mute"
          >
            {item}
            <span className="text-lime">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
