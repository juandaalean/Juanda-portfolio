type Project = {
  name: string;
  shortDescription: string;
  technologies: string[];
  problemSolved: string;
  githubUrl?: string;
  liveApiUrl?: string;
  apiStatus?: string;
};

const projects: Project[] = [
  {
    name: "Project Manager Backend",
    shortDescription:
      "API REST construida con .NET 8 para gestionar proyectos, tareas y comentarios en un entorno colaborativo, inspirada en flujos tipo Trello/Jira.",
    technologies: [
      ".NET 8",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT",
      "Swagger/OpenAPI",
      "Clean Architecture",
    ],
    problemSolved:
      "Va más allá de un CRUD básico, al implementar reglas de autorización reales por membresía y propiedad del proyecto, junto con una arquitectura escalable y mantenible para productos backend en crecimiento.",
    githubUrl: "https://github.com/juandaalean/projectmanagerbackend",
    liveApiUrl: "https://github.com/juandaalean/projectmanagerbackend#quickstart",
    apiStatus: "API en despliegue: actualmente disponible en local con Swagger (ver Quickstart).",
  },
  {
    name: "GeoRoad",
    shortDescription:
      "Aplicación de escritorio enfocada en simulación, análisis, y recomendaciones de sistemas geotérmicos enterrados en el pavimento.",
    technologies: ["PyQt5", "Python", "FastAPI", "NumPy", "Matplotlib", "Plotly"],
    problemSolved:
      "Centraliza cálculos, validaciones y sistema de recomendación segun entorno de diferentes modelos geotérmicos en una herramienta mantenible, reduciendo tiempos de análisis manual y mejorando la trazabilidad técnica del proceso mostrando graficas renderizadas de resultados en 2D y 3D.",
    apiStatus:
      "Proyecto empresarial privado: por confidencialidad no se muestran enlaces públicos de repositorio o despliegue.",
  },
  {
    name: "Ávila Digital",
    shortDescription:
      "Aplicación Android nativa orientada a centralizar información turística, ocio, noticias y servicios urbanos de la ciudad de Ávila, con geolocalización y gestión de eventos en tiempo real.",
    technologies: ["Kotlin", "Room", "Firebase", "GoogleMaps API", "Retrofit"],
    problemSolved:
      "Unifica en una sola plataforma información que antes estaba dispersa en múltiples canales, mejorando la experiencia de residentes y visitantes mediante acceso rápido a contenidos relevantes, mapas y actividades actualizadas.",
    apiStatus:
      "Proyecto privado: por confidencialidad no se muestran enlaces públicos de repositorio o despliegue.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-12 sm:px-6">
      <header className="mb-8">
        <p className="font-mono text-xs tracking-[0.22em] text-[color:var(--accent)]">PROYECTOS</p>
        <h1 className="mt-4 text-4xl font-semibold">Arquitectura backend en producción</h1>
        <p className="mt-4 max-w-3xl text-[color:var(--muted)]">
          Incluye proyectos con enlaces públicos cuando aplica y experiencias profesionales en entornos privados.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="card p-6">
            <h2 className="text-2xl font-semibold">{project.name}</h2>

            <p className="mt-4 text-[color:var(--muted)]">{project.shortDescription}</p>

            <div className="mt-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                Tecnologías usadas
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{project.technologies.join(" · ")}</p>
            </div>

            <div className="mt-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                Problema que resuelve
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{project.problemSolved}</p>
            </div>

            {project.githubUrl || project.liveApiUrl ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#c8d8d5] bg-white px-4 py-2 text-sm font-medium transition hover:border-[color:var(--accent)]"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.liveApiUrl ? (
                  <a
                    href={project.liveApiUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5"
                  >
                    API en vivo
                  </a>
                ) : null}
              </div>
            ) : null}

            {project.apiStatus ? (
              <p className="mt-3 text-xs text-[color:var(--muted)]">{project.apiStatus}</p>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
