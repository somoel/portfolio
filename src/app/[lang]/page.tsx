import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/content";
import { Hero } from "@/components/hero";
import { EvidenceStrip } from "@/components/evidence-strip";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ApproachSection } from "@/components/approach-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { CertificationsSection } from "@/components/certifications-section";
import { AiSection } from "@/components/ai-section";
import { ContactCta } from "@/components/contact-cta";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict} locale={lang} />
      <EvidenceStrip dict={dict} />
      <ExperienceSection dict={dict} />
      <ProjectsSection dict={dict} />
      <ApproachSection dict={dict} />
      <SkillsSection dict={dict} />
      <EducationSection dict={dict} />
      <CertificationsSection dict={dict} />
      <AiSection dict={dict} />
      <ContactCta dict={dict} locale={lang} />
    </>
  );
}
