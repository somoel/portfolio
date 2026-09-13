export type Locale = "es" | "en";

export type ProjectStatus = "published" | "production" | "mvp" | "academic";

export type ArtTone = "lime" | "coral" | "cyan" | "blue" | "amber" | "magenta";

export interface ProjectItem {
  slug: string;
  name: string;
  status: ProjectStatus;
  featured: boolean;
  year?: string;
  tagline: string;
  description: string;
  technologies: string[];
  repo?: string;
  demo?: string;
  art: ArtTone;
  index: string;
}

export interface SkillGroup {
  key: string;
  title: string;
  emphasis: "primary" | "secondary" | "exploring";
  note?: string;
  items: string[];
}

export interface ExperienceHighlight {
  title: string;
  detail: string;
}

export interface CertificationItem {
  slug: string;
  name: string;
  issuer: string;
  year: string;
  description: string;
  initials: string;
  tone: ArtTone;
  image?: string;
  credlyUrl?: string;
}

export interface ApproachItem {
  index: string;
  title: string;
  detail: string;
}

export interface Dictionary {
  htmlLang: string;
  localeName: string;
  otherLocale: Locale;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
    jobTitle: string;
  };
  nav: { label: string; href: string }[];
  skipToContent: string;
  languageSwitchLabel: string;
  hero: {
    name: string;
    role: string;
    tagline: string;
    description: string;
    status: string;
    ctaContact: string;
    ctaWork: string;
    cvLabel: string;
    cvHint: string;
    photoAlt: string;
    techLabel: string;
    scrollHint: string;
  };
  evidence: {
    label: string;
    title: string;
    note: string;
    items: { value: string; label: string; detail: string }[];
  };
  experience: {
    label: string;
    title: string;
    intro: string;
    role: string;
    company: string;
    companyNote: string;
    logoAlt: string;
    period: string;
    location: string;
    summary: string;
    highlights: ExperienceHighlight[];
    stackLabel: string;
    stack: string[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    featuredLabel: string;
    secondaryLabel: string;
    viewSite: string;
    viewCode: string;
    privateNote: string;
    statuses: Record<ProjectStatus, string>;
    items: ProjectItem[];
  };
  approach: {
    label: string;
    title: string;
    intro: string;
    items: ApproachItem[];
  };
  skills: {
    label: string;
    title: string;
    intro: string;
    verifiedNote: string;
    exploringNote: string;
    groups: SkillGroup[];
  };
  education: {
    label: string;
    title: string;
    intro: string;
    degree: string;
    school: string;
    period: string;
    gpaLabel: string;
    gpa: string;
    scores: { label: string; score: string; percentile: string }[];
  };
  certifications: {
    label: string;
    title: string;
    intro: string;
    items: CertificationItem[];
  };
  ai: {
    label: string;
    title: string;
    disclaimer: string;
    intro: string;
    items: { title: string; detail: string }[];
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    emailLabel: string;
    copyEmail: string;
    copiedEmail: string;
    linkedinLabel: string;
    githubLabel: string;
    cvLabel: string;
    footerNote: string;
  };
  cv: {
    title: string;
    description: string;
    printLabel: string;
    backLabel: string;
    experienceHeading: string;
    educationHeading: string;
    skillsHeading: string;
    certificationsHeading: string;
    projectsHeading: string;
    aiHeading: string;
    contactHeading: string;
  };
}
