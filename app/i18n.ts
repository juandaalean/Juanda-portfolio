export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type ProjectCopy = {
  name: string;
  shortDescription: string;
  technologies: string[];
  problemSolved: string;
  githubUrl?: string;
  liveApiUrl?: string;
  apiStatus?: string;
};

export type Dictionary = {
  localeLabel: string;
  meta: {
    title: string;
    description: string;
  };
  home: {
    roleTag: string;
    photoAlt: string;
    greeting: string;
    role: string;
    summary: string;
    stackTitle: string;
    interestsTitle: string;
    interestsDescription: string;
    viewProjects: string;
    downloadCv: string;
    github: string;
    linkedin: string;
    contactTitle: string;
    contactDescription: string;
    contactButton: string;
    contactSubject: string;
    currentEmailLabel: string;
  };
  projectsPage: {
    tag: string;
    title: string;
    intro: string;
    techUsedLabel: string;
    solvedLabel: string;
    githubButton: string;
    liveApiButton: string;
    projects: ProjectCopy[];
  };
};

const sharedProjects = {
  projectManager: {
    name: "Project Manager",
    technologies: [
      ".NET 8",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "Typescript",
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "JWT",
      "Swagger",
      "xUnit",
    ],
    githubUrl: "https://github.com/juandaalean/projectmanagerbackend",
    liveApiUrl: "https://github.com/juandaalean/projectmanagerbackend#quickstart",
  },
  georoad: {
    name: "GeoRoad",
    technologies: ["Python", "PyQt5", "Streamlit", "NumPy", "Matplotlib", "Plotly"],
  },
  avila: {
    name: "Avila Digital",
    technologies: ["Kotlin", "Room", "Retrofit", "Firebase", "Google Maps API"],
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    localeLabel: "ES",
    meta: {
      title: "Portfolio Backend | Juan David Alean",
      description:
        "Portfolio profesional de desarrollador backend con proyectos, APIs en vivo y stack técnico.",
    },
    home: {
      roleTag: "BACKEND DEVELOPER",
      photoAlt: "Foto de perfil de Juan David Alean",
      greeting: "Hola, soy Juan David Alean.",
      role: "Desarrollador de software.",
      summary:
        "Me especializo en diseño y desarrollo backend para productos digitales con foco en rendimiento, observabilidad y mantenibilidad, manteniendo arquitecturas limpias y aplicando principios SOLID. Tengo experiencia trabajando con APIs REST y bases de datos relacionales en proyectos de producción, así como en el desarrollo de aplicaciones de escritorio y nativas de Android. Mi objetivo es seguir creciendo como desarrollador backend y contribuir a proyectos desafiantes que impacten positivamente a los usuarios.",
      stackTitle: "Stack principal",
      interestsTitle: "Intereses",
      interestsDescription:
        "Arquitectura de APIs, microservicios, sistemas orientados a eventos, seguridad en aplicaciones backend, aplicación de sistemas automatizados y aplicaciones de inteligencia artificial para mejorar la eficiencia y funcionalidad de los productos digitales.",
      viewProjects: "Ver Proyectos",
      downloadCv: "Descargar CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      contactTitle: "Contacto",
      contactDescription:
        "Si quieres colaborar en un proyecto, hablar sobre backend o tienes una oportunidad, puedes escribirme por correo.",
      contactButton: "Enviarme un correo",
      contactSubject: "Contacto desde tu portfolio",
      currentEmailLabel: "Correo actual",
    },
    projectsPage: {
      tag: "PROYECTOS",
      title: "Proyectos destacados y realizados",
      intro:
        "Incluye proyectos con enlaces públicos cuando aplica y experiencias profesionales en entornos privados.",
      techUsedLabel: "Tecnologías usadas",
      solvedLabel: "Problema que resuelve",
      githubButton: "GitHub",
      liveApiButton: "API en vivo",
      projects: [
        {
          name: sharedProjects.projectManager.name,
          shortDescription:
            "Aplicación web integral (SaaS) diseñada para la gestión optimizada de flujos de trabajo basados en metodologías Agile. El sistema destaca por una arquitectura desacoplada y una innovadora integración de Inteligencia Artificial en el cliente para la automatización de procesos.",
          technologies: sharedProjects.projectManager.technologies,
          problemSolved:
            "Va más allá de un CRUD básico, al implementar reglas de autorización reales por membresía y propiedad del proyecto, junto con una arquitectura escalable y mantenible para productos backend en crecimiento.",
          githubUrl: sharedProjects.projectManager.githubUrl,
          liveApiUrl: sharedProjects.projectManager.liveApiUrl,
          apiStatus:
            "API en despliegue: actualmente disponible en local con Swagger (ver Quickstart).",
        },
        {
          name: sharedProjects.georoad.name,
          shortDescription:
            "Realice el desarrollo integral de una herramienta técnica para la optimización de sistemas geotérmicos en pavimentos a nivel de ingeniería de software y diseño. Diseñé una arquitectura robusta basada en MVP y Strategy Pattern con PyQt5, logrando desacoplar la lógica de cálculo compleja de la interfaz de usuario. Además, expandí el alcance del proyecto al entorno web mediante un dashboard analítico en Streamlit.",
          technologies: sharedProjects.georoad.technologies,
          problemSolved:
            "Centraliza cálculos, validaciones y sistema de recomendación según entorno de diferentes modelos geotérmicos en una herramienta mantenible, reduciendo tiempos de análisis manual y mejorando la trazabilidad técnica del proceso mostrando gráficas renderizadas de resultados en 2D y 3D.",
          apiStatus:
            "Proyecto empresarial privado: por confidencialidad no se muestran enlaces públicos de repositorio o despliegue.",
        },
        {
          name: "Ávila Digital",
          shortDescription:
            "Aplicación Android nativa orientada a centralizar información turística, ocio, noticias y servicios urbanos de la ciudad de Ávila, con geolocalización y gestión de eventos en tiempo real.",
          technologies: sharedProjects.avila.technologies,
          problemSolved:
            "Unifica en una sola plataforma información que antes estaba dispersa en múltiples canales, mejorando la experiencia de residentes y visitantes mediante acceso rápido a contenidos relevantes, mapas y actividades actualizadas.",
          apiStatus:
            "Proyecto privado: por confidencialidad no se muestran enlaces públicos de repositorio o despliegue.",
        },
      ],
    },
  },
  en: {
    localeLabel: "EN",
    meta: {
      title: "Backend Portfolio | Juan David Alean",
      description:
        "Professional backend developer portfolio with projects, live APIs, and technical stack.",
    },
    home: {
      roleTag: "BACKEND DEVELOPER",
      photoAlt: "Profile photo of Juan David Alean",
      greeting: "Hi, I'm Juan David Alean.",
      role: "Software developer.",
      summary:
        "I specialize in backend design and development for digital products focused on performance, observability, and maintainability, keeping clean architectures and applying SOLID principles. I have experience working with REST APIs and relational databases in production projects, as well as desktop and native Android application development. My goal is to keep growing as a backend developer and contribute to challenging projects that create positive impact for users.",
      stackTitle: "Core stack",
      interestsTitle: "Interests",
      interestsDescription:
        "API architecture, microservices, event-driven systems, backend application security, automated systems, and AI-powered applications to improve the efficiency and functionality of digital products.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      contactTitle: "Contact",
      contactDescription:
        "If you want to collaborate on a project, talk about backend, or have an opportunity, feel free to email me.",
      contactButton: "Send me an email",
      contactSubject: "Contact from your portfolio",
      currentEmailLabel: "Current email",
    },
    projectsPage: {
      tag: "PROJECTS",
      title: "Featured and past projects",
      intro:
        "Includes projects with public links when available and professional experience in private environments.",
      techUsedLabel: "Technologies used",
      solvedLabel: "Problem solved",
      githubButton: "GitHub",
      liveApiButton: "Live API",
      projects: [
        {
          name: sharedProjects.projectManager.name,
          shortDescription:
            "A comprehensive web application (SaaS) designed for optimized workflow management based on Agile methodologies. The system stands out for its decoupled architecture and innovative client-side AI integration for process automation.",
          technologies: sharedProjects.projectManager.technologies,
          problemSolved:
            "It goes beyond basic CRUD by implementing real authorization rules based on membership and project ownership, with a scalable and maintainable architecture for growing backend products.",
          githubUrl: sharedProjects.projectManager.githubUrl,
          liveApiUrl: sharedProjects.projectManager.liveApiUrl,
          apiStatus: "API in deployment: currently available locally with Swagger (see Quickstart).",
        },
        {
          name: sharedProjects.georoad.name,
          shortDescription:
            "I developed the comprehensive development of a technical tool for optimizing geothermal systems in pavements, from software engineering to design. I designed a robust architecture based on MVP and Strategy Patterns using PyQt5, successfully decoupling the complex calculation logic from the user interface. Furthermore, I expanded the project's scope to the web environment through an analytical dashboard in Streamlit.",
          technologies: sharedProjects.georoad.technologies,
          problemSolved:
            "It centralizes calculations, validations, and recommendation logic for different geothermal models in a maintainable tool, reducing manual analysis time and improving technical traceability with rendered 2D and 3D result charts.",
          apiStatus:
            "Private enterprise project: public repository or deployment links are not available due to confidentiality.",
        },
        {
          name: sharedProjects.avila.name,
          shortDescription:
            "Native Android app focused on centralizing tourism info, leisure, news, and urban services for the city of Ávila, including geolocation and real-time event management.",
          technologies: sharedProjects.avila.technologies,
          problemSolved:
            "It unifies information that was previously spread across multiple channels, improving the experience for residents and visitors with fast access to relevant content, maps, and up-to-date activities.",
          apiStatus:
            "Private project: public repository or deployment links are not available due to confidentiality.",
        },
      ],
    },
  },
};