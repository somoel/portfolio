import type { Dictionary, Locale } from "@/content/types";
import { localizedUrl, siteConfig } from "./site";

export function buildJsonLd(locale: Locale, dict: Dictionary) {
  const pageUrl = localizedUrl(locale);
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;

  const knowsAbout = Array.from(
    new Set(
      dict.skills.groups
        .filter((group) => group.emphasis === "primary")
        .flatMap((group) => group.items),
    ),
  );

  const projects = dict.projects.items
    .filter((project) => project.featured)
    .map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      description: project.tagline,
      url: project.demo ?? project.repo,
    }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        jobTitle: dict.meta.jobTitle,
        email: `mailto:${siteConfig.email}`,
        url: siteConfig.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fusagasugá",
          addressRegion: "Cundinamarca",
          addressCountry: "CO",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universidad de Cundinamarca",
        },
        knowsAbout,
        sameAs: [siteConfig.github, siteConfig.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: `${siteConfig.shortName} — ${dict.meta.jobTitle}`,
        inLanguage: dict.htmlLang,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profilepage`,
        url: pageUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        inLanguage: dict.htmlLang,
      },
      {
        "@type": "ItemList",
        name: dict.projects.title,
        itemListElement: projects,
      },
    ],
  };
}
