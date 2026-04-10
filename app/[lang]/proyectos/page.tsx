import Link from "next/link";
import { notFound } from "next/navigation";
import { Dictionary, Locale, dictionaries, isValidLocale } from "../../i18n";

type ProjectsProps = {
  params: Promise<{ lang: string }>;
};

function getDictionary(lang: string): Dictionary {
  if (!isValidLocale(lang)) {
    notFound();
  }

  return dictionaries[lang as Locale];
}

export default async function ProjectsPage({ params }: ProjectsProps) {
  const { lang } = await params;
  const localeCopy = getDictionary(lang);
  const backLabel = lang === "es" ? "Volver al menu principal" : "Back to main menu";

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 pb-12 pt-8 sm:px-6">
      <Link
        href={`/${lang}`}
        aria-label={backLabel}
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#c8d8d5] bg-white px-3 py-1.5 text-sm font-medium text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
      >
        <span aria-hidden="true">&larr;</span>
        <span>{lang === "es" ? "Menu" : "Menu"}</span>
      </Link>

      <header className="mb-8">
        <p className="font-mono text-xs tracking-[0.22em] text-[color:var(--accent)]">
          {localeCopy.projectsPage.tag}
        </p>
        <h1 className="mt-4 text-4xl font-semibold">{localeCopy.projectsPage.title}</h1>
        <p className="mt-4 max-w-3xl text-[color:var(--muted)]">{localeCopy.projectsPage.intro}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {localeCopy.projectsPage.projects.map((project) => (
          <article key={project.name} className="card p-6">
            <h2 className="text-2xl font-semibold">{project.name}</h2>

            <p className="mt-4 text-[color:var(--muted)]">{project.shortDescription}</p>

            <div className="mt-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                {localeCopy.projectsPage.techUsedLabel}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{project.technologies.join(" · ")}</p>
            </div>

            <div className="mt-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
                {localeCopy.projectsPage.solvedLabel}
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
                    {localeCopy.projectsPage.githubButton}
                  </a>
                ) : null}
                {project.liveApiUrl ? (
                  <a
                    href={project.liveApiUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5"
                  >
                    {localeCopy.projectsPage.liveApiButton}
                  </a>
                ) : null}
              </div>
            ) : null}

            {project.apiStatus ? <p className="mt-3 text-xs text-[color:var(--muted)]">{project.apiStatus}</p> : null}
          </article>
        ))}
      </section>
    </div>
  );
}