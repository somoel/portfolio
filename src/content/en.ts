import type { Dictionary } from "./types";

export const en: Dictionary = {
  htmlLang: "en",
  localeName: "English",
  otherLocale: "es",
  meta: {
    title: "Samuel Segura | Software Developer in Colombia",
    description:
      "Portfolio of Samuel David Segura Vargas, full stack software developer based in Colombia. Python, Django, React, REST APIs and Google Cloud. Projects, certifications and contact.",
    keywords: [
      "software developer in Colombia",
      "full stack developer Colombia",
      "software development Cundinamarca",
      "Python Django developer",
      "React developer Colombia",
      "remote software developer Colombia",
    ],
    jobTitle: "Software Developer",
  },
  nav: [
    { label: "Experience", href: "#experiencia" },
    { label: "Projects", href: "#proyectos" },
    { label: "Approach", href: "#metodo" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#educacion" },
    { label: "Contact", href: "#contacto" },
  ],
  skipToContent: "Skip to content",
  languageSwitchLabel: "Change language",
  navAria: "Primary",
  mobileMenuAria: "Mobile menu",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  footerNavAria: "Site links",
  logoAria: "Samuel Segura — home",
  hero: {
    name: "Samuel David Segura Vargas",
    role: "Software developer in Colombia",
    tagline: "I build software that solves real problems.",
    description:
      "Systems engineering student with two years of professional experience. I design and ship full stack applications with Python, Django, React and Google Cloud, with a focus on performance, automated testing and visual detail.",
    status: "Open to remote and hybrid opportunities",
    ctaContact: "Let's talk",
    ctaWork: "View projects",
    cvLabel: "View CV",
    cvHint: "Print-ready version you can save as PDF.",
    photoAlt: "Portrait of Samuel David Segura Vargas",
    techLabel: "Technologies I work with",
    scrollHint: "Scroll to explore",
  },
  evidence: {
    label: "Evidence",
    title: "Outcomes, not promises",
    note: "Every figure comes from professional work or published projects.",
    items: [
      {
        value: "50%",
        label: "faster execution time",
        detail:
          "After migrating the actuarial calculation engine from R to Python at AFAIS.",
      },
      {
        value: "30",
        label: "REST endpoints",
        detail:
          "Built with Django REST Framework and Identity Platform authentication.",
      },
      {
        value: "2 years",
        label: "of professional experience",
        detail:
          "Full stack development at AFAIS between June 2024 and July 2026.",
      },
      {
        value: "50+",
        label: "active users",
        detail:
          "On Deportistas Black Chickens, a sports management platform.",
      },
    ],
  },
  experience: {
    label: "Experience",
    title: "Two years building product and architecture",
    intro:
      "I worked as a Full Stack Developer at AFAIS, an actuarial solutions company, where I moved from feature work into defining the cloud architecture of the applications.",
    role: "Full Stack Developer",
    company: "AFAIS",
    companyNote: "Actuarial solutions",
    logoAlt: "AFAIS logo",
    period: "June 2024 — July 2026",
    location: "Colombia · Remote",
    summary:
      "A web application for actuarial calculations built with Python, Django, React, NumPy and Pandas. I owned the cloud architecture, performance optimization and delivery quality.",
    highlights: [
      {
        title: "APIs and authentication",
        detail:
          "Built 30 REST endpoints with Django REST Framework and authentication through Identity Platform.",
      },
      {
        title: "Performance",
        detail:
          "Optimized SQL queries and the Django ORM on critical components, and migrated an R engine to Python, cutting execution time by 50%.",
      },
      {
        title: "Cloud architecture",
        detail:
          "Designed the company's cloud solutions on Cloud Run, Firestore, Cloud Storage, Workflows, Identity Platform and Firebase.",
      },
      {
        title: "Process orchestration",
        detail:
          "Used Google Cloud Workflows to orchestrate processing and manage long-running workers.",
      },
      {
        title: "Quality and CI/CD",
        detail:
          "Unit tests with pytest, integration tests, coverage on every deploy and early adoption of TDD. CI/CD with GitHub Actions and Cloud Build.",
      },
      {
        title: "Frontend and interface",
        detail:
          "Designed reusable React components and cared for the visual detail of the application.",
      },
    ],
    stackLabel: "Core stack",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "NumPy",
      "Pandas",
      "PostgreSQL",
      "Google Cloud",
      "Docker",
      "pytest",
    ],
  },
  projects: {
    label: "Projects",
    title: "Selected work",
    intro:
      "A mix of production product, published apps and technical projects where I explored architecture, logic and visualization.",
    featuredLabel: "Featured",
    secondaryLabel: "More projects",
    viewSite: "View site",
    viewCode: "Code",
    privateNote: "Private repository",
    statuses: {
      published: "Published",
      production: "In production",
      mvp: "Technical MVP",
      academic: "Academic",
    },
    items: [
      {
        slug: "tybacha",
        name: "Tybacha",
        status: "published",
        featured: true,
        year: "2026",
        tagline: "Elder care that works even offline.",
        description:
          "A mobile app for elder care with offline mode, push notifications, roles and assistance powered by the OpenAI API. Between 1 and 50 active users.",
        technologies: [
          "Expo",
          "React Native",
          "TypeScript",
          "PostgreSQL",
          "OpenAI API",
        ],
        repo: "https://github.com/somoel/tybacha",
        demo: "https://tybacha.vercel.app",
        art: "cyan",
        index: "01",
      },
      {
        slug: "black-chickens",
        name: "Deportistas Black Chickens",
        status: "production",
        featured: true,
        tagline: "Sports management for 50+ active users.",
        description:
          "A platform for a sports club with PDF and JPG report generation, 3D membership cards and a reusable component library. The repository is private under client agreements.",
        technologies: [
          "Next.js 15",
          "React",
          "TypeScript",
          "Node.js",
          "Tailwind CSS v4",
          "Supabase",
        ],
        art: "magenta",
        index: "02",
      },
      {
        slug: "online-puzzles",
        name: "Online Puzzles",
        status: "mvp",
        featured: true,
        year: "2026",
        tagline: "Classic puzzles with server-side validation.",
        description:
          "A collection of classic puzzles brought to the web with Next.js, Supabase and WebAssembly. Server-side move validation, an ELO rating system and a leaderboard. An MVP with features still in development.",
        technologies: ["Next.js", "TypeScript", "Supabase", "WebAssembly"],
        repo: "https://github.com/somoel/online-puzzles",
        art: "lime",
        index: "03",
      },
      {
        slug: "ecommerce-frank",
        name: "Ecommerce Frank",
        status: "academic",
        featured: false,
        year: "2026",
        tagline: "Microservice architecture for ecommerce.",
        description:
          "An academic-professional project that separates authentication, catalog, inventory, orders and notifications, with an independent frontend deployed on Vercel.",
        technologies: ["Java", "Spring Boot", "Docker", "JavaScript"],
        repo: "https://github.com/somoel/ecommerce-frank",
        demo: "https://ecommerce-frank.vercel.app",
        art: "blue",
        index: "04",
      },
      {
        slug: "granja-grafos",
        name: "Granja Grafos",
        status: "academic",
        featured: false,
        year: "2025",
        tagline: "Optimal routes over weighted graphs.",
        description:
          "A route visualizer implementing Dijkstra, a greedy heuristic and dynamic node blocking. Published as a demo on GitHub Pages.",
        technologies: ["JavaScript", "HTML", "CSS"],
        repo: "https://github.com/somoel/granja-grafos",
        art: "amber",
        index: "05",
      },
      {
        slug: "vending-machine",
        name: "Vending Machine",
        status: "academic",
        featured: false,
        year: "2024",
        tagline: "A vending machine as a finite automaton.",
        description:
          "A vending machine modeled as a deterministic finite automaton, with a transition table, regular expression, Graphviz visualization and automated tests.",
        technologies: ["JavaScript", "Python", "Graphviz"],
        repo: "https://github.com/somoel/vending_machine",
        art: "coral",
        index: "06",
      },
    ],
  },
  approach: {
    label: "Approach",
    title: "How I work",
    intro:
      "I don't just write code: I think about how the system behaves when it grows, when it fails and when someone else has to maintain it.",
    items: [
      {
        index: "01",
        title: "Architecture first",
        detail:
          "I separate responsibilities, design the API before implementing and document the decisions that matter long term.",
      },
      {
        index: "02",
        title: "Measurable performance",
        detail:
          "I optimize SQL and ORM queries with before-and-after data. The R-to-Python migration cut execution time by 50%.",
      },
      {
        index: "03",
        title: "Automated testing",
        detail:
          "Unit tests with pytest, integration tests and coverage wired into the deployment pipeline.",
      },
      {
        index: "04",
        title: "Cloud and infrastructure",
        detail:
          "Cloud Run, Firestore, Cloud Storage and Workflows for orchestrated processing and reproducible deploys.",
      },
      {
        index: "05",
        title: "Continuous delivery",
        detail:
          "CI/CD with GitHub Actions and Cloud Build, with coverage on every deploy.",
      },
      {
        index: "06",
        title: "Interface detail",
        detail:
          "Reusable React components and a strong focus on visual detail and accessibility.",
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "Tools and practices",
    intro:
      "I separate what I have used in production from what I know through projects and what I am exploring right now.",
    verifiedNote: "Proven experience",
    projectsNote: "Used in projects",
    exploringNote: "Active exploration",
    showAll: "Show all",
    showLess: "Show less",
    groups: [
      {
        key: "languages",
        title: "Languages",
        emphasis: "primary",
        items: ["Python", "TypeScript", "JavaScript", "SQL"],
      },
      {
        key: "frontend",
        title: "Frontend",
        emphasis: "primary",
        items: ["React", "Next.js", "Tailwind CSS", "Expo", "React Native"],
      },
      {
        key: "backend",
        title: "Backend",
        emphasis: "primary",
        items: [
          "Django",
          "Django REST Framework",
          "REST APIs",
          "Node.js",
          "PostgreSQL",
        ],
      },
      {
        key: "cloud",
        title: "Cloud and DevOps",
        emphasis: "primary",
        items: [
          "Google Cloud Platform",
          "Cloud Run",
          "Firestore",
          "Cloud Storage",
          "Workflows",
          "Identity Platform",
          "Firebase",
          "Docker",
          "GitHub Actions",
          "Cloud Build",
          "CI/CD",
          "Linux",
        ],
      },
      {
        key: "data",
        title: "Data and AI",
        emphasis: "primary",
        items: ["NumPy", "Pandas", "OpenAI API"],
      },
      {
        key: "practices",
        title: "Practices",
        emphasis: "secondary",
        items: [
          "Scrum",
          "OOP",
          "Code reviews",
          "pytest",
          "Integration testing",
          "TDD",
          "Software architecture",
        ],
      },
      {
        key: "exploring",
        title: "Exploring and learning",
        emphasis: "exploring",
        items: [
          "FastAPI",
          "GraphQL",
          "Java",
          "AWS",
          "Supabase",
          "Claude Code",
          "MCPs",
          "Subagents",
        ],
      },
    ],
  },
  education: {
    label: "Education",
    title: "Education and results",
    intro:
      "Systems and Computer Engineering at Universidad de Cundinamarca, with results above the national average.",
    degree: "Systems and Computer Engineering",
    school: "Universidad de Cundinamarca",
    period: "2022 — 2026 · In progress",
    gpaLabel: "Cumulative GPA",
    gpa: "4.6 / 5.0",
    scores: [
      {
        label: "Saber Pro",
        score: "184 / 300",
        percentile: "Top 7% nationally",
      },
      {
        label: "Saber Pro · English",
        score: "Highest score",
        percentile: "#1 in the university",
      },
      {
        label: "Saber 11",
        score: "342 / 500",
        percentile: "Top 20% nationally",
      },
    ]
  },
  certifications: {
    label: "Certifications",
    title: "Verifiable credentials",
    intro:
      "Complementary training in cloud, networking and programming fundamentals.",
    items: [
      {
        slug: "google-cloud-foundations",
        name: "Google Cloud Computing Foundations",
        issuer: "Google Cloud",
        year: "2025",
        description:
          "Foundations of cloud computing, infrastructure, Linux and running services on Google Cloud.",
        initials: "GC",
        tone: "blue",
        image: "/badges/google-cloud-foundations.webp",
        credlyUrl:
          "https://www.credly.com/badges/b21a88d7-175f-446c-818d-c21f6ac1d032/public_url",
      },
      {
        slug: "cisco-network-technician",
        name: "Network Technician Career Path",
        issuer: "Cisco Networking Academy",
        year: "2025",
        description:
          "Networking fundamentals, IP addressing, device configuration and connectivity troubleshooting.",
        initials: "CI",
        tone: "cyan",
        image: "/badges/cisco-network-technician.webp",
        credlyUrl:
          "https://www.credly.com/badges/7af684f7-4d8c-4355-83a3-2796ee9e107a/public_url",
      },
      {
        slug: "sena-programacion",
        name: "Programming Methodology",
        issuer: "SENA",
        year: "2024",
        description:
          "Programming fundamentals, logic, control structures and problem solving.",
        initials: "SE",
        tone: "lime",
      },
    ],
  },
  ai: {
    label: "Applied AI",
    title: "AI and developer tooling",
    disclaimer:
      "Active exploration, not consolidated professional experience. I present it honestly as part of my current learning.",
    intro:
      "I use AI tools as part of my daily workflow and I'm building my own projects around agents, tools and automation.",
    items: [
      {
        title: "Claude Code and assistants",
        detail:
          "Daily use of coding assistants to explore, refactor and validate changes with my own judgment.",
      },
      {
        title: "MCPs",
        detail:
          "Using MCP servers and building my own integrations to connect tools and data.",
      },
      {
        title: "Subagents",
        detail:
          "Orchestrating subagents to split research, implementation and review work.",
      },
      {
        title: "Skills",
        detail:
          "Creating reusable skills to standardize technical workflows.",
      },
      {
        title: "Automations",
        detail:
          "Automating repetitive tasks and development processes with scripts and agents.",
      },
      {
        title: "Complex prompts",
        detail:
          "Designing structured prompts for analysis, code and content tasks.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Shall we build something together?",
    intro:
      "I'm open to full stack roles, freelance projects and collaborations. Reach out and I'll get back to you as soon as I can.",
    emailLabel: "Email me",
    copyEmail: "Copy email",
    copiedEmail: "Email copied!",
    copyEmailError: "Couldn't copy automatically. Select the address:",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "View CV",
    cvHint: "Print-ready page — use your browser's print option to save it as PDF.",
    footerNote: "Designed and built by Samuel David Segura Vargas with Next.js.",
  },
  cv: {
    title: "CV · Samuel David Segura Vargas",
    description:
      "Resume of Samuel David Segura Vargas, software developer in Colombia.",
    printLabel: "Print or save as PDF",
    backLabel: "Back to portfolio",
    experienceHeading: "Professional experience",
    educationHeading: "Education and results",
    skillsHeading: "Skills",
    certificationsHeading: "Certifications",
    projectsHeading: "Selected projects",
    aiHeading: "Applied AI and tooling",
    contactHeading: "Contact",
  },
};
