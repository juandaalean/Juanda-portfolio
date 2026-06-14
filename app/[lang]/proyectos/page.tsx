import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import {
  FaCheck,
  FaCode,
  FaDesktop,
  FaGithub,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";
import avilaDigitalImage from "../../assets/project_images/Ávila_Digital_Snapshots.png";
import projectManagerImage from "../../assets/project_images/projectmanager.png";
import { Dictionary, Locale, dictionaries, isValidLocale } from "../../i18n";
import { getTechEntries, type TechEntry } from "../../lib/techIcons";

type ProjectsProps = {
  params: Promise<{ lang: string }>;
};

type ProjectStatus = "live" | "development" | "completed" | "private" | "archived";

const placeholderIconByType: Record<string, IconType> = {
  "Web SaaS": FaServer,
  "Web App": FaServer,
  Mobile: FaMobileAlt,
  Android: FaMobileAlt,
  Desktop: FaDesktop,
  "Desktop + Web": FaDesktop,
};

function normalizeProjectKey(name: string): string {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const projectImages: Record<string, StaticImageData> = {
  "project manager": projectManagerImage,
  "avila digital": avilaDigitalImage,
};

function getPlaceholderIcon(type: string): IconType {
  return placeholderIconByType[type] ?? FaCode;
}

function getDictionary(lang: string): Dictionary {
  if (!isValidLocale(lang)) {
    notFound();
  }

  return dictionaries[lang as Locale];
}

type StatusStyle = {
  bg: string;
  text: string;
  dot: string;
  ping: string | null;
};

const statusStyles: Record<ProjectStatus, StatusStyle> = {
  live: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    ping: "bg-emerald-400",
  },
  development: {
    bg: "bg-amber-500/15",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
    ping: null,
  },
  completed: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    ping: "bg-emerald-400",
  },
  private: {
    bg: "bg-zinc-500/15",
    text: "text-zinc-600 dark:text-zinc-400",
    dot: "bg-zinc-500",
    ping: null,
  },
  archived: {
    bg: "bg-zinc-500/15",
    text: "text-zinc-600 dark:text-zinc-400",
    dot: "bg-zinc-500",
    ping: null,
  },
};

function StatusBadge({
  status,
  label,
}: {
  status: ProjectStatus;
  label: string;
}) {
  const style = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${style.bg} px-2.5 py-1 text-xs font-medium ${style.text} backdrop-blur-md shadow-sm`}
    >
      <span className="relative flex h-2 w-2">
        {style.ping ? (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${style.ping} opacity-75`}
          />
        ) : null}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${style.dot}`} />
      </span>
      {label}
    </span>
  );
}

function TechBadge({ entry }: { entry: TechEntry }) {
  const Icon = entry.icon;

  return (
    <li className="flex items-center gap-1.5 rounded-full border border-[color:var(--chip-border)] bg-[color:var(--surface-2)] px-2.5 py-1">
      <Icon size={12} color={entry.color} aria-hidden="true" />
      <span className="font-mono text-[11px] text-[color:var(--muted)]">{entry.name}</span>
    </li>
  );
}

export default async function ProjectsPage({ params }: ProjectsProps) {
  const { lang } = await params;
  const localeCopy = getDictionary(lang);
  const backLabel = lang === "es" ? "Volver al menu principal" : "Back to main menu";

  const statusLabels: Record<ProjectStatus, string> = {
    live: localeCopy.projectsPage.statusLive,
    development: localeCopy.projectsPage.statusDevelopment,
    completed: localeCopy.projectsPage.statusCompleted,
    private: localeCopy.projectsPage.statusPrivate,
    archived: localeCopy.projectsPage.statusArchived,
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-12 pt-8 sm:px-6">
      <Link
        href={`/${lang}`}
        aria-label={backLabel}
        className="theme-surface mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-3 py-1.5 text-sm font-medium text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
      >
        <span aria-hidden="true">&larr;</span>
        <span>{lang === "es" ? "Menú" : "Menu"}</span>
      </Link>

      <header className="mb-8">
        <p className="font-mono text-xs tracking-[0.22em] text-[color:var(--accent)]">
          {localeCopy.projectsPage.tag}
        </p>
        <h1 className="mt-4 text-4xl font-semibold">{localeCopy.projectsPage.title}</h1>
        <p className="mt-4 max-w-3xl text-[color:var(--muted)]">{localeCopy.projectsPage.intro}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {localeCopy.projectsPage.projects.map((project) => {
          const PlaceholderIcon = getPlaceholderIcon(project.type);
          const techEntries = getTechEntries(project.technologies);
          const projectImage = projectImages[normalizeProjectKey(project.name)];

          return (
            <div
              key={project.name}
              className="group/project relative rounded-2xl bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent)] p-px transition-all duration-300 hover:from-[color:var(--accent-2)] hover:via-[color:var(--accent)] hover:to-[color:var(--accent-2)] hover:shadow-2xl"
            >
              <article className="card flex h-full flex-col overflow-hidden rounded-[15px]">
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[color:var(--gradient-1)] via-[color:var(--accent)]/20 to-[color:var(--gradient-2)]">
                  {projectImage ? (
                    <Image
                      src={projectImage}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/project:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/project:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <PlaceholderIcon
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-[color:var(--accent)]/40 transition-transform duration-500 group-hover/project:scale-110"
                      aria-hidden="true"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md shadow-sm">
                      {project.type}
                    </span>
                    <StatusBadge status={project.status} label={statusLabels[project.status]} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-2xl font-semibold">{project.name}</h2>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">{project.shortDescription}</p>

                  <div className="mt-5">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                      {localeCopy.projectsPage.techUsedLabel}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {techEntries.map((entry) => (
                        <TechBadge key={entry.name} entry={entry} />
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                      {localeCopy.projectsPage.highlightsLabel}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-[color:var(--muted)]"
                        >
                          <FaCheck
                            className="mt-0.5 shrink-0 text-emerald-500"
                            size={14}
                            aria-hidden="true"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.githubUrl || project.liveApiUrl ? (
                    <div className="mt-6 flex flex-wrap gap-3 pt-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="theme-surface inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium transition hover:border-[color:var(--accent)]"
                        >
                          <FaGithub size={14} aria-hidden="true" />
                          {localeCopy.projectsPage.githubButton}
                        </a>
                      ) : null}
                      {project.liveApiUrl ? (
                        <a
                          href={project.liveApiUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5"
                        >
                          {localeCopy.projectsPage.liveApiButton}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </div>
  );
}
