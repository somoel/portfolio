import type { MetadataRoute } from "next";
import { locales, siteConfig } from "@/lib/site";

const paths = ["", "/cv"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("monthly" as const) : ("yearly" as const),
      priority: path === "" ? 1 : 0.6,
      alternates: {
        languages: {
          "es-CO": `${siteConfig.url}/es${path}`,
          en: `${siteConfig.url}/en${path}`,
        },
      },
    })),
  );
}
