import type { Dictionary } from "./types";

export const es: Dictionary = {
  htmlLang: "es-CO",
  localeName: "Español",
  otherLocale: "en",
  meta: {
    title: "Samuel Segura | Desarrollador de software en Fusagasugá",
    description:
      "Portafolio de Samuel David Segura Vargas, desarrollador full stack en Fusagasugá. Experiencia en Python, Django, React, APIs REST y Google Cloud. Proyectos, certificaciones y contacto.",
    keywords: [
      "desarrollador de software en Fusagasugá",
      "desarrollador full stack en Fusagasugá",
      "desarrollo de software en Cundinamarca",
      "ingeniero de sistemas en Fusagasugá",
      "programador Python Django",
      "desarrollador React Colombia",
    ],
    ogAlt:
      "Samuel David Segura Vargas, desarrollador de software en Fusagasugá",
    jobTitle: "Desarrollador de software",
  },
  nav: [
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Método", href: "#metodo" },
    { label: "Skills", href: "#skills" },
    { label: "Educación", href: "#educacion" },
    { label: "Contacto", href: "#contacto" },
  ],
  skipToContent: "Saltar al contenido",
  languageSwitchLabel: "Cambiar idioma",
  hero: {
    eyebrow: "Full stack · Fusagasugá, Colombia",
    name: "Samuel David Segura Vargas",
    role: "Desarrollador de software en Fusagasugá",
    tagline: "Construyo software que resuelve problemas reales.",
    description:
      "Ingeniero de sistemas en formación con dos años de experiencia profesional. Diseño y desarrollo aplicaciones full stack con Python, Django, React y Google Cloud, con foco en rendimiento, pruebas automatizadas y detalle visual.",
    status: "Disponible para oportunidades remotas e híbridas",
    ctaContact: "Hablemos de tu proyecto",
    ctaWork: "Ver proyectos",
    cvLabel: "Descargar CV",
    cvHint: "Versión imprimible lista para guardar como PDF.",
    photoAlt: "Retrato de Samuel David Segura Vargas",
    photoFallbackNote: "Retrato pendiente de sesión fotográfica",
    techLabel: "Tecnologías con las que trabajo",
    scrollHint: "Desliza para explorar",
  },
  evidence: {
    label: "Evidencia",
    title: "Resultados, no promesas",
    note: "Cada dato proviene de trabajo profesional o de proyectos publicados.",
    items: [
      {
        value: "50%",
        label: "menos tiempo de ejecución",
        detail:
          "Al migrar el motor de cálculo actuarial de R a Python en AFAIS.",
      },
      {
        value: "30",
        label: "endpoints REST",
        detail:
          "Desarrollados con Django REST Framework y autenticación con Identity Platform.",
      },
      {
        value: "2 años",
        label: "de experiencia profesional",
        detail:
          "Desarrollo full stack en AFAIS entre junio de 2024 y julio de 2026.",
      },
      {
        value: "+50",
        label: "usuarios activos",
        detail:
          "En Deportistas Black Chickens, plataforma de gestión deportiva.",
      },
    ],
  },
  experience: {
    label: "Experiencia",
    title: "Dos años construyendo producto y arquitectura",
    intro:
      "Trabajé como Full Stack Developer en AFAIS, una empresa de soluciones actuariales, donde pasé del mantenimiento de funcionalidades a definir la arquitectura cloud de las aplicaciones.",
    role: "Full Stack Developer",
    company: "AFAIS",
    companyNote: "Soluciones actuariales",
    period: "Junio 2024 — Julio 2026",
    location: "Colombia · Remoto",
    summary:
      "Aplicación web de cálculos actuariales con Python, Django, React, NumPy y Pandas. Responsable de la arquitectura cloud, la optimización de rendimiento y la calidad del despliegue.",
    highlights: [
      {
        title: "APIs y autenticación",
        detail:
          "Desarrollo de 30 endpoints REST con Django REST Framework y autenticación mediante Identity Platform.",
      },
      {
        title: "Rendimiento",
        detail:
          "Optimización de consultas SQL y del ORM de Django en componentes críticos, además de una migración de R a Python que redujo el tiempo de ejecución en un 50%.",
      },
      {
        title: "Arquitectura cloud",
        detail:
          "Diseño de las soluciones en Cloud Run, Firestore, Cloud Storage, Workflows, Identity Platform y Firebase.",
      },
      {
        title: "Orquestación de procesos",
        detail:
          "Uso de Google Cloud Workflows para orquestar procesamiento y gestionar workers de larga duración.",
      },
      {
        title: "Calidad y CI/CD",
        detail:
          "Pruebas unitarias con pytest, pruebas de integración, coverage en cada despliegue y adopción inicial de TDD. CI/CD con GitHub Actions y Cloud Build.",
      },
      {
        title: "Frontend e interfaz",
        detail:
          "Diseño de componentes reutilizables en React y cuidado del detalle visual de la aplicación.",
      },
    ],
    stackLabel: "Stack principal",
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
    label: "Proyectos",
    title: "Trabajo seleccionado",
    intro:
      "Una mezcla de producto en producción, aplicaciones publicadas y proyectos técnicos donde exploré arquitectura, lógica y visualización.",
    featuredLabel: "Destacados",
    secondaryLabel: "Otros proyectos",
    viewSite: "Ver sitio",
    viewCode: "Código",
    privateNote: "Repositorio privado",
    statuses: {
      published: "Publicado",
      production: "En producción",
      mvp: "MVP técnico",
      academic: "Académico",
    },
    items: [
      {
        slug: "tybacha",
        name: "Tybacha",
        status: "published",
        featured: true,
        year: "2026",
        tagline: "Cuidado de adultos mayores, incluso sin conexión.",
        description:
          "Aplicación móvil para el cuidado de adultos mayores con modo offline, notificaciones push, roles y asistencia con la API de OpenAI. Usuarios activos entre 1 y 50.",
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
        tagline: "Gestión deportiva para más de 50 usuarios activos.",
        description:
          "Plataforma para un club deportivo con generación de reportes en PDF y JPG, carnets 3D y una biblioteca de componentes reutilizables. El repositorio es privado por acuerdos con el cliente.",
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
        tagline: "Puzzles clásicos con validación en servidor.",
        description:
          "Colección de puzzles clásicos llevada a la web con Next.js, Supabase y WebAssembly. Validación de jugadas en el servidor, sistema de puntuación ELO y tabla de posiciones. MVP con funcionalidades todavía en desarrollo.",
        technologies: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "WebAssembly",
        ],
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
        tagline: "Arquitectura de microservicios para ecommerce.",
        description:
          "Proyecto académico-profesional que separa autenticación, catálogo, inventario, órdenes y notificaciones, con un frontend independiente y despliegue en Vercel.",
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
        tagline: "Rutas óptimas sobre grafos ponderados.",
        description:
          "Visualizador de rutas que implementa Dijkstra, una heurística greedy y bloqueo dinámico de nodos. Publicado como demo en GitHub Pages.",
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
        tagline: "Una máquina expendedora como autómata finito.",
        description:
          "Modelado de una máquina expendedora como autómata finito determinista, con tabla de transición, expresión regular, visualización en Graphviz y pruebas automatizadas.",
        technologies: ["JavaScript", "Python", "Graphviz"],
        repo: "https://github.com/somoel/vending_machine",
        art: "coral",
        index: "06",
      },
    ],
  },
  approach: {
    label: "Método",
    title: "Cómo trabajo",
    intro:
      "No solo escribo código: pienso en cómo se comporta el sistema cuando crece, cuando falla y cuando otra persona tiene que mantenerlo.",
    items: [
      {
        index: "01",
        title: "Arquitectura primero",
        detail:
          "Separo responsabilidades, diseño la API antes de implementar y documento las decisiones que afectan el largo plazo.",
      },
      {
        index: "02",
        title: "Rendimiento medible",
        detail:
          "Optimizo consultas SQL y ORM con datos antes y después. La migración de R a Python redujo el tiempo de ejecución un 50%.",
      },
      {
        index: "03",
        title: "Pruebas automatizadas",
        detail:
          "Pruebas unitarias con pytest, pruebas de integración y coverage dentro del pipeline de despliegue.",
      },
      {
        index: "04",
        title: "Cloud e infraestructura",
        detail:
          "Cloud Run, Firestore, Cloud Storage y Workflows para procesamiento orquestado y despliegues reproducibles.",
      },
      {
        index: "05",
        title: "Entrega continua",
        detail:
          "CI/CD con GitHub Actions y Cloud Build, con coverage en cada despliegue.",
      },
      {
        index: "06",
        title: "Detalle de interfaz",
        detail:
          "Componentes reutilizables en React y obsesión por el detalle visual y la accesibilidad.",
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "Herramientas y prácticas",
    intro:
      "Separo lo que he usado en producción de lo que conozco por proyectos y de lo que estoy explorando ahora mismo.",
    verifiedNote: "Experiencia demostrada",
    exploringNote: "Exploración activa",
    groups: [
      {
        key: "languages",
        title: "Lenguajes",
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
        title: "Nube y DevOps",
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
        title: "Datos e IA",
        emphasis: "primary",
        items: ["NumPy", "Pandas", "OpenAI API"],
      },
      {
        key: "practices",
        title: "Prácticas",
        emphasis: "secondary",
        items: [
          "Scrum",
          "POO",
          "Revisiones de código",
          "pytest",
          "Pruebas de integración",
          "TDD",
          "Arquitectura de software",
        ],
      },
      {
        key: "exploring",
        title: "Explorando y aprendiendo",
        emphasis: "exploring",
        items: [
          "FastAPI",
          "GraphQL",
          "Java",
          "AWS",
          "Supabase",
          "Claude Code",
          "MCPs",
          "Subagentes",
        ],
      },
    ],
  },
  education: {
    label: "Educación",
    title: "Formación y resultados",
    intro:
      "Ingeniería de Sistemas y Computación en la Universidad de Cundinamarca, con resultados que ubican mi desempeño por encima del promedio nacional.",
    degree: "Ingeniería de Sistemas y Computación",
    school: "Universidad de Cundinamarca",
    period: "2022 — 2026 · En curso",
    gpaLabel: "Promedio acumulado",
    gpa: "4.6 / 5.0",
    scores: [
      {
        label: "Saber Pro",
        score: "184 / 300",
        percentile: "Top 7% a nivel nacional",
      },
      {
        label: "Saber Pro · Inglés",
        score: "Mejor puntaje",
        percentile: "Puesto #1 en la universidad",
      },
      {
        label: "Saber 11",
        score: "342 / 500",
        percentile: "Top 20% a nivel nacional",
      },
    ],
    footnote:
      "Resultados reportados por Samuel Segura y pendientes de enlace al documento oficial de resultados.",
  },
  certifications: {
    label: "Certificaciones",
    title: "Credenciales verificables",
    intro:
      "Formación complementaria en cloud, redes y fundamentos de programación.",
    items: [
      {
        slug: "google-cloud-foundations",
        name: "Google Cloud Computing Foundations",
        issuer: "Google Cloud",
        year: "2025",
        description:
          "Fundamentos de computación en la nube, infraestructura, Linux y operación de servicios en Google Cloud.",
        initials: "GC",
        tone: "blue",
      },
      {
        slug: "cisco-network-technician",
        name: "Network Technician Career Path",
        issuer: "Cisco Networking Academy",
        year: "2025",
        description:
          "Fundamentos de redes, direccionamiento IP, configuración de dispositivos y resolución de problemas de conectividad.",
        initials: "CI",
        tone: "cyan",
      },
      {
        slug: "sena-programacion",
        name: "Metodología de la Programación",
        issuer: "SENA",
        year: "2024",
        description:
          "Fundamentos de programación, lógica, estructuras de control y resolución de problemas.",
        initials: "SE",
        tone: "lime",
      },
    ],
  },
  ai: {
    label: "IA aplicada",
    title: "IA y herramientas de desarrollo",
    disclaimer:
      "Exploración activa, no experiencia profesional consolidada. Lo presento con honestidad como parte de mi aprendizaje actual.",
    intro:
      "Uso herramientas de IA como parte de mi flujo de trabajo diario y estoy construyendo proyectos propios alrededor de agentes, herramientas y automatización.",
    items: [
      {
        title: "Claude Code y asistentes",
        detail:
          "Uso diario de asistentes de código para explorar, refactorizar y validar cambios con criterio propio.",
      },
      {
        title: "MCPs",
        detail:
          "Uso de servidores MCP y construcción de integraciones propias para conectar herramientas y datos.",
      },
      {
        title: "Subagentes",
        detail:
          "Orquestación de subagentes para dividir tareas de investigación, implementación y revisión.",
      },
      {
        title: "Skills",
        detail:
          "Creación de skills reutilizables para estandarizar flujos de trabajo técnicos.",
      },
      {
        title: "Automatizaciones",
        detail:
          "Automatización de tareas repetitivas y procesos de desarrollo con scripts y agentes.",
      },
      {
        title: "Prompts complejos",
        detail:
          "Diseño de prompts estructurados para tareas de análisis, código y contenido.",
      },
    ],
  },
  contact: {
    label: "Contacto",
    title: "¿Construimos algo juntos?",
    intro:
      "Estoy abierto a oportunidades de desarrollo full stack, proyectos freelance y colaboraciones. Escríbeme y te respondo lo antes posible.",
    emailLabel: "Escríbeme",
    copyEmail: "Copiar correo",
    copiedEmail: "¡Correo copiado!",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Descargar CV",
    footerNote:
      "Diseñado y desarrollado por Samuel David Segura Vargas con Next.js.",
  },
  cv: {
    title: "CV · Samuel David Segura Vargas",
    description:
      "Currículum de Samuel David Segura Vargas, desarrollador de software en Fusagasugá.",
    printLabel: "Imprimir o guardar como PDF",
    backLabel: "Volver al portafolio",
    experienceHeading: "Experiencia profesional",
    educationHeading: "Educación y resultados",
    skillsHeading: "Skills",
    certificationsHeading: "Certificaciones",
    projectsHeading: "Proyectos seleccionados",
    aiHeading: "IA aplicada y herramientas",
    contactHeading: "Contacto",
  },
};
