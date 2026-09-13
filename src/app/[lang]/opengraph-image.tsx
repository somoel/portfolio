import { ImageResponse } from "next/og";
import { getDictionary, isLocale } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Samuel David Segura Vargas, software developer in Colombia";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "es";
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07070a",
          color: "#f6f2e9",
          padding: "64px 72px",
          backgroundImage:
            "linear-gradient(rgba(246,242,233,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(246,242,233,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 52, fontWeight: 700, letterSpacing: -3 }}>
            <span style={{ color: "#c8f63c" }}>S</span>
            <span style={{ color: "#ff5b39" }}>S</span>
            <span style={{ color: "#34e1f2" }}>.</span>
          </span>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#8d887c",
            }}
          >
            Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            {dict.hero.name}
          </div>
          <div style={{ fontSize: 32, color: "#cbc5b6" }}>{dict.hero.role}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#8d887c",
          }}
        >
          <span>samuelsegura.vercel.app</span>
          <span>Python · Django · React · Google Cloud</span>
        </div>
      </div>
    ),
    size,
  );
}
