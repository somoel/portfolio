import type { ArtTone } from "@/content/types";

const tones: Record<ArtTone, string> = {
  lime: "#c8f63c",
  coral: "#ff5b39",
  cyan: "#34e1f2",
  blue: "#3f6bff",
  amber: "#ffb627",
  magenta: "#ff3d9a",
};

export const toneHex = tones;

function TybachaArt({ color }: { color: string }) {
  return (
    <>
      <circle cx="200" cy="150" r="104" fill={color} opacity="0.16" />
      <circle cx="200" cy="150" r="72" fill={color} opacity="0.24" />
      <rect
        x="152"
        y="58"
        width="96"
        height="184"
        rx="20"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      <rect x="168" y="80" width="64" height="6" rx="3" fill={color} />
      <rect x="168" y="98" width="44" height="6" rx="3" fill={color} opacity="0.6" />
      <path
        d="M120 96a112 112 0 0 1 160 0M138 116a86 86 0 0 1 124 0"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
    </>
  );
}

function BlackChickensArt({ color }: { color: string }) {
  return (
    <>
      <path
        d="M200 44l104 34v70c0 62-44 94-104 108-60-14-104-46-104-108V78z"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      <path d="M200 44l104 34H96z" fill={color} opacity="0.22" />
      <rect x="150" y="112" width="100" height="12" rx="6" fill={color} opacity="0.85" />
      <rect x="150" y="140" width="100" height="12" rx="6" fill={color} opacity="0.5" />
      <path
        d="M200 172l10 22 24 3-17 17 4 24-21-11-21 11 4-24-17-17 24-3z"
        fill={color}
      />
    </>
  );
}

function PuzzlesArt({ color }: { color: string }) {
  const cells = Array.from({ length: 16 });
  return (
    <>
      {cells.map((_, index) => {
        const col = index % 4;
        const row = Math.floor(index / 4);
        const filled = index % 3 === 0 || index === 6 || index === 11;
        return (
          <rect
            key={index}
            x={92 + col * 56}
            y={52 + row * 50}
            width="44"
            height="38"
            rx="7"
            fill={filled ? color : "none"}
            opacity={filled ? (index % 2 === 0 ? 0.85 : 0.4) : 1}
            stroke={color}
            strokeWidth="2"
          />
        );
      })}
    </>
  );
}

function EcommerceArt({ color }: { color: string }) {
  return (
    <>
      <path d="M116 120l84-44 84 44-84 44z" fill={color} opacity="0.75" />
      <path d="M116 120v60l84 44v-60z" fill={color} opacity="0.4" />
      <path d="M284 120v60l-84 44v-60z" fill={color} opacity="0.22" />
      <path
        d="M200 76v88M116 120l84 44 84-44"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
      />
      <rect x="168" y="34" width="64" height="10" rx="5" fill={color} opacity="0.5" />
    </>
  );
}

function GraphArt({ color }: { color: string }) {
  const nodes = [
    { x: 96, y: 96 },
    { x: 200, y: 62 },
    { x: 304, y: 108 },
    { x: 138, y: 208 },
    { x: 262, y: 214 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [2, 4],
    [1, 4],
  ];
  return (
    <>
      {edges.map(([a, b], index) => (
        <line
          key={index}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={color}
          strokeWidth="2.5"
          opacity="0.5"
        />
      ))}
      {nodes.map((node, index) => (
        <circle
          key={index}
          cx={node.x}
          cy={node.y}
          r={index === 0 ? 16 : 11}
          fill={index === 0 ? color : "#0c0c11"}
          stroke={color}
          strokeWidth="3"
        />
      ))}
    </>
  );
}

function VendingArt({ color }: { color: string }) {
  return (
    <>
      <rect
        x="120"
        y="46"
        width="160"
        height="208"
        rx="16"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      <rect x="142" y="70" width="52" height="46" rx="6" fill={color} opacity="0.7" />
      <rect x="206" y="70" width="52" height="46" rx="6" fill={color} opacity="0.35" />
      <circle cx="168" cy="176" r="20" fill="none" stroke={color} strokeWidth="3" />
      <circle cx="232" cy="176" r="20" fill="none" stroke={color} strokeWidth="3" />
      <path d="M188 176h24" stroke={color} strokeWidth="3" />
      <path
        d="M206 130q26 20 0 46M154 222q-34-46 14-140"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="5 6"
        opacity="0.7"
      />
    </>
  );
}

export function ProjectArt({
  slug,
  tone,
}: {
  slug: string;
  tone: ArtTone;
}) {
  const color = tones[tone];
  const art = (() => {
    switch (slug) {
      case "tybacha":
        return <TybachaArt color={color} />;
      case "black-chickens":
        return <BlackChickensArt color={color} />;
      case "online-puzzles":
        return <PuzzlesArt color={color} />;
      case "ecommerce-frank":
        return <EcommerceArt color={color} />;
      case "granja-grafos":
        return <GraphArt color={color} />;
      case "vending-machine":
        return <VendingArt color={color} />;
      default:
        return <circle cx="200" cy="150" r="80" fill={color} opacity="0.4" />;
    }
  })();

  return (
    <svg
      viewBox="0 0 400 300"
      aria-hidden="true"
      className="project-art h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={`dots-${slug}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#f6f2e9" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="#0c0c11" />
      <rect width="400" height="300" fill={`url(#dots-${slug})`} />
      {art}
    </svg>
  );
}
