export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type ProjectStatus = "live" | "development" | "completed" | "private" | "archived";

type ProjectCopy = {
  name: string;
  type: string;
  status: ProjectStatus;
  shortDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveApiUrl?: string;
  image?: string;
};

type ExperienceCopy = {
  role: string;
  company: string;
  place?: string;
  period: string;
  description: string;
  technologies: string[];
};

type StudyCopy = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
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
    experienceTitle: string;
    experiences: ExperienceCopy[];
    studiesTitle: string;
    studies: StudyCopy[];
    viewProjects: string;
    downloadCv: string;
    github: string;
    linkedin: string;
    contactTitle: string;
    contactDescription: string;
    contactButton: string;
    contactSubject: string;
    currentEmailLabel: string;
    contactForm: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      sending: string;
    };
  };
  projectsPage: {
    tag: string;
    title: string;
    intro: string;
    techUsedLabel: string;
    highlightsLabel: string;
    githubButton: string;
    liveApiButton: string;
    statusLive: string;
    statusDevelopment: string;
    statusCompleted: string;
    statusPrivate: string;
    statusArchived: string;
    projects: ProjectCopy[];
  };
};

const sharedProjects = {
  projectManager: {
    name: "Project Manager",
    type: "Web SaaS",
    status: "completed" as const,
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
    liveApiUrl: "https://project-manager-frontend-virid.vercel.app/",
  },
  georoad: {
    name: "GeoRoad",
    type: "Desktop + Web",
    status: "private" as const,
    technologies: ["Python", "PyQt5", "Streamlit", "NumPy", "Matplotlib", "Plotly"],
  },
  avila: {
    name: "Avila Digital",
    type: "Mobile Android",
    status: "private" as const,
    technologies: ["Kotlin", "Room", "Retrofit", "Firebase", "Google Maps API"],
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    localeLabel: "ES",
    meta: {
      title: "Portfolio Backend | Juan David Alean",
      description:
        "Portfolio profesional de programador backend con proyectos, experiencia y stack técnico.",
    },
    home: {
      roleTag: "BACKEND DEVELOPER",
      photoAlt: "Foto de perfil de Juan David Alean",
      greeting: "Hola, soy Juan David Alean.",
      role: "Desarrollador de software.",
      summary:
        "Programador backend especializado en .NET Core y experiencia en frontend con React. Diseño e implemento productos digitales end-to-end, desde APIs REST y arquitecturas en capas hasta interfaces frontend modernas y mantenibles. Me enfoco en rendimiento, observabilidad y clean architecture, aplicando principios SOLID en cada capa. Trabajo con bases de datos relacionales como PostgreSQL y MySQL, y complemento mi stack con Python, Kotlin y desarrollo de aplicaciones de escritorio y Android. Mi objetivo es seguir creciendo como programador backend, construyendo productos completos que generen impacto real en los usuarios.",
      stackTitle: "Stack principal",
      experienceTitle: "Experiencia profesional",
      experiences: [
        {
          role: "Desarrollador de software",
          company: "Universidad de Salamanca (USAL)",
          place: "Ávila, España",
          period: "ene. 2026 - jul. 2026",
          description:
            "Técnico en grupo de investigación TIDOP de la Universidad de Salamanca, desarrollando aplicaciones web y de escritorio mediante el uso de python y frameworks para el desarrollo web y desktop de aplicaciones.",
          technologies: ["Python", "PyQt5", "Streamlit", "FastAPI"],
        },
        {
          role: "Desarrollador backend",
          company: "Wembley Studios",
          place: "Salamanca, España",
          period: "feb. 2025 - may. 2025",
          description:
            "Desarrollador backend en practicas en empresa, desarrollando APIs REST y microservicios con .NET 8 y MySQL, aplicando principios SOLID y Clean Architecture para garantizar un código mantenible y escalable.",
          technologies: ["C#", ".NET", "EF Core", "MySQL", "Dapr", "Swagger"],
        },
        {
          role: "Desarrollador Android",
          company: "SIADEN lab",
          place: "Ávila, España",
          period: "sep. 2024 - jun. 2025",
          description:
            "Desarrollador Android para grupo de investigación SIADEN lab, desarrollando aplicaciones móviles nativas con Kotlin y Firebase, integrando servicios REST y optimizando la experiencia del usuario utilizando MVVM y patrones de diseño para garantizar un código limpio y mantenible.",
          technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "Firebase", "REST APIs"],
        },
      ],
      studiesTitle: "Formación",
      studies: [
        {
          degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
          institution: "I.E.S Alonso de Madrigal (Ávila, España)",
          period: "2023 - 2025",
          description:
            "Formación centrada en desarrollo de aplicaciones multiplataforma Android Kotlin, bases de datos, programación y arquitectura de software.",
        },
      ],
      viewProjects: "Ver Proyectos",
      downloadCv: "Descargar CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      contactTitle: "Contacto",
      contactDescription:
        "Si quieres colaborar en un proyecto, hablar sobre desarrollo o tienes una oportunidad, puedes escribirme por correo.",
      contactButton: "Enviarme un correo",
      contactSubject: "Contacto desde tu portfolio",
      currentEmailLabel: "Correo",
      contactForm: {
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo",
        emailPlaceholder: "tu@correo.com",
        subjectLabel: "Asunto",
        subjectPlaceholder: "¿Sobre qué quieres hablar?",
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntame en qué puedo ayudarte...",
        submitButton: "Enviar mensaje",
        submittingButton: "Enviando...",
        sending: "Enviando mensaje",
      },
    },
    projectsPage: {
      tag: "PROYECTOS",
      title: "Proyectos destacados y realizados",
      intro:
        "Incluye proyectos con enlaces públicos cuando aplica y experiencias profesionales en entornos privados.",
      techUsedLabel: "Tecnologías usadas",
      highlightsLabel: "Trabajo realizado",
      githubButton: "GitHub",
      liveApiButton: "API en vivo",
      statusLive: "En producción",
      statusDevelopment: "En desarrollo",
      statusCompleted: "Completado",
      statusPrivate: "Privado",
      statusArchived: "Archivado",
      projects: [
        {
          name: sharedProjects.projectManager.name,
          type: sharedProjects.projectManager.type,
          status: sharedProjects.projectManager.status,
          shortDescription:
            "Aplicación web (SaaS) diseñada para la gestión optimizada de flujos de trabajo basados en metodologías Agile. El sistema destaca por una arquitectura desacoplada y la integración de Inteligencia Artificial en el cliente para la automatización de procesos utilizando modelos WebLLM.",
          technologies: sharedProjects.projectManager.technologies,
          highlights: [
            "API REST en .NET 8 con ASP.NET Core y Entity Framework Core",
            "Clean Architecture con capas Domain, Application, Infrastructure y API",
            "Frontend desacoplado en React + TypeScript con Vite y Tailwind",
            "Automatización de procesos con modelos WebLLM ejecutados en el cliente",
            "Tests unitarios con xUnit y documentación con Swagger",
          ],
          githubUrl: sharedProjects.projectManager.githubUrl,
          liveApiUrl: sharedProjects.projectManager.liveApiUrl,
        },
        {
          name: sharedProjects.georoad.name,
          type: sharedProjects.georoad.type,
          status: sharedProjects.georoad.status,
          shortDescription:
            "Realice el desarrollo integral de una herramienta técnica para la optimización de sistemas geotérmicos en pavimentos a nivel de ingeniería de software y diseño. Diseñé una arquitectura robusta basada en MVP y Strategy Pattern con PyQt5, logrando desacoplar la lógica de cálculo compleja de la interfaz de usuario. Además, expandí el alcance del proyecto al entorno web mediante un dashboard analítico en Streamlit.",
          technologies: sharedProjects.georoad.technologies,
          highlights: [
            "Arquitectura MVP + Strategy Pattern con PyQt5 para desacoplar cálculos de UI",
            "Cálculos numéricos geotérmicos con NumPy y visualizaciones 2D/3D",
            "Dashboard analítico web paralelo con Streamlit y Plotly",
            "Validaciones automáticas y sistema de recomendación por entorno",
          ],
        },
        {
          name: "Ávila Digital",
          type: sharedProjects.avila.type,
          status: sharedProjects.avila.status,
          shortDescription:
            "Aplicación Android nativa orientada a centralizar información turística, ocio, noticias y servicios urbanos de la ciudad de Ávila, con geolocalización y gestión de eventos en tiempo real.",
          technologies: sharedProjects.avila.technologies,
          highlights: [
            "App Android nativa en Kotlin con Jetpack Compose y MVVM",
            "Persistencia local con Room y consumo de APIs REST con Retrofit",
            "Integración con Firebase y Google Maps API para eventos y geolocalización",
            "Arquitectura modular y patrones de diseño para código mantenible",
          ],
        },
      ],
    },
  },
  en: {
    localeLabel: "EN",
    meta: {
      title: "Backend Portfolio | Juan David Alean",
      description:
        "Professional backend developer portfolio with projects, experience, and technical stack.",
    },
    home: {
      roleTag: "BACKEND DEVELOPER",
      photoAlt: "Profile photo of Juan David Alean",
      greeting: "Hi, I'm Juan David Alean.",
      role: "Software developer.",
      summary:
        "Backend developer specialized in .NET Core, with hands-on experience in frontend development with React. I design and implement digital products end-to-end, spanning from REST APIs and layered architectures to modern, maintainable frontend interfaces. I focus on performance, observability, and clean architecture, applying SOLID principles across every layer. I work with relational databases like PostgreSQL and MySQL, and complement my stack with Python, Kotlin, and desktop and Android application development. My goal is to keep growing as a backend developer, building complete products that create real impact for users.",
      stackTitle: "Core stack",
      experienceTitle: "Professional experience",
      experiences: [
        {
          role: "Software developer",
          company: "University of Salamanca (USAL)",
          place: "Ávila, Spain",
          period: "Jan 2026 - Jul 2026",
          description:
            "Technician in the TIDOP research group at the University of Salamanca, developing web and desktop applications using Python and frameworks for web and desktop application development.",
          technologies: ["Python", "PyQt5", "Streamlit", "FastAPI"],
        },
        {
          role: "Backend developer",
          company: "Wembley Studios",
          place: "Salamanca, Spain",
          period: "Feb 2025 - May 2025",
          description:
            "Internship backend developer, building REST APIs and microservices with .NET 8 and MySQL, applying SOLID principles and Clean Architecture to ensure maintainable and scalable code.",
          technologies: ["C#", ".NET", "EF Core", "MySQL", "Dapr", "Swagger"],
        },
        {
          role: "Android developer",
          company: "SIADEN lab",
          place: "Ávila, Spain",
          period: "Sep 2024 - Jun 2025",
          description:
            "Android developer for the SIADEN lab research group, building native mobile applications with Kotlin and Firebase, integrating REST services and optimizing user experience using MVVM and design patterns to ensure clean and maintainable code.",
          technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "Firebase", "REST APIs"],
        },
      ],
      studiesTitle: "Education",
      studies: [
        {
          degree: "Higher Technician in Multi-platform Application Development (DAM)",
          institution: "I.E.S Alonso de Madrigal (Ávila, Spain)",
          period: "2023 - 2025",
          description:
            "Training focused on multi-platform application development Android Kotlin, databases, programming, and software architecture.",
        },
      ],
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      contactTitle: "Contact",
      contactDescription:
        "If you want to collaborate on a project, talk about development, or have an opportunity, feel free to email me.",
      contactButton: "Send me an email",
      contactSubject: "Contact from your portfolio",
      currentEmailLabel: "Email",
      contactForm: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@email.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "What would you like to talk about?",
        messageLabel: "Message",
        messagePlaceholder: "Tell me how I can help...",
        submitButton: "Send message",
        submittingButton: "Sending...",
        sending: "Sending message",
      },
    },
    projectsPage: {
      tag: "PROJECTS",
      title: "Featured and past projects",
      intro:
        "Includes projects with public links when available and professional experience in private environments.",
      techUsedLabel: "Technologies used",
      highlightsLabel: "Work delivered",
      githubButton: "GitHub",
      liveApiButton: "Live API",
      statusLive: "Live",
      statusDevelopment: "In development",
      statusCompleted: "Completed",
      statusPrivate: "Private",
      statusArchived: "Archived",
      projects: [
        {
          name: sharedProjects.projectManager.name,
          type: sharedProjects.projectManager.type,
          status: sharedProjects.projectManager.status,
          shortDescription:
            "A web application (SaaS) designed for optimized workflow management based on Agile methodologies. The system stands out for its decoupled architecture and the integration of Artificial Intelligence on the client side for process automation using WebLLM models.",
          technologies: sharedProjects.projectManager.technologies,
          highlights: [
            "REST API in .NET 8 with ASP.NET Core and Entity Framework Core",
            "Clean Architecture with Domain, Application, Infrastructure and API layers",
            "Decoupled React + TypeScript frontend with Vite and Tailwind",
            "Process automation using WebLLM models running on the client",
            "Unit tests with xUnit and API documentation with Swagger",
          ],
          githubUrl: sharedProjects.projectManager.githubUrl,
          liveApiUrl: sharedProjects.projectManager.liveApiUrl,
        },
        {
          name: sharedProjects.georoad.name,
          type: sharedProjects.georoad.type,
          status: sharedProjects.georoad.status,
          shortDescription:
            "I developed the comprehensive development of a technical tool for optimizing geothermal systems in pavements, from software engineering to design. I designed a robust architecture based on MVP and Strategy Patterns using PyQt5, successfully decoupling the complex calculation logic from the user interface. Furthermore, I expanded the project's scope to the web environment through an analytical dashboard in Streamlit.",
          technologies: sharedProjects.georoad.technologies,
          highlights: [
            "MVP + Strategy Pattern architecture with PyQt5, decoupling calculation logic from UI",
            "Geothermal numeric calculations with NumPy and 2D/3D visualizations",
            "Parallel web analytical dashboard with Streamlit and Plotly",
            "Automatic validations and recommendation system based on environment",
          ],
        },
        {
          name: sharedProjects.avila.name,
          type: sharedProjects.avila.type,
          status: sharedProjects.avila.status,
          shortDescription:
            "Native Android app focused on centralizing tourism info, leisure, news, and urban services for the city of Ávila, including geolocation and real-time event management.",
          technologies: sharedProjects.avila.technologies,
          highlights: [
            "Native Android app in Kotlin with Jetpack Compose and MVVM",
            "Local persistence with Room and REST API consumption with Retrofit",
            "Firebase and Google Maps API integration for events and geolocation",
            "Modular architecture and design patterns for maintainable code",
          ],
        },
      ],
    },
  },
};