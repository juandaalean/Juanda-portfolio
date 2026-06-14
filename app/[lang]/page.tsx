import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import profilePhoto from "../assets/juanda_profile_photo.jpg";
import { ContactForm } from "../components/ContactForm";
import { getTechEntries } from "../lib/techIcons";
import { Dictionary, Locale, dictionaries, isValidLocale } from "../i18n";

const contactEmail = "juanalean2525@gmail.com";

const stackTechNames = [
  "C#",
  ".NET 8",
  "Entity Framework Core",
  "Docker",
  "PostgreSQL",
  "MySQL",
  "xUnit",
  "React",
  "JavaScript",
  "CSS",
  "HTML",
  "Git",
];

const techStack = getTechEntries(stackTechNames);

type HomeProps = {
  params: Promise<{ lang: string }>;
};

function getDictionary(lang: string): Dictionary {
  if (!isValidLocale(lang)) {
    notFound();
  }

  return dictionaries[lang as Locale];
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const localeCopy = getDictionary(lang);

  return (
    <div className="flex flex-1 items-center justify-center px-5 pb-12 pt-8">
      <main className="card w-full max-w-5xl p-8 sm:p-12">
        <p className="font-mono text-xs tracking-[0.25em] text-[color:var(--accent)]">
          {localeCopy.home.roleTag}
        </p>

        <section className="mt-5 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="h-36 w-36 shrink-0 rounded-full border-4 border-[color:var(--surface)] bg-gradient-to-br from-[color:var(--photo-from)] to-[color:var(--photo-to)] p-1 shadow-lg sm:h-44 sm:w-44">
            <div className="relative h-full w-full overflow-hidden rounded-full border border-[color:var(--photo-border)] bg-[color:var(--photo-inner-bg)]">
              <Image
                src={profilePhoto}
                alt={localeCopy.home.photoAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 144px, 176px"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            {localeCopy.home.greeting}
            <span className="block text-[color:var(--accent-2)]">{localeCopy.home.role}</span>
          </h1>
        </section>

        <p className="mt-6 text-lg text-[color:var(--muted)]">{localeCopy.home.summary}</p>

        <section className="theme-surface mt-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
            {localeCopy.home.stackTitle}
          </h2>
          <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-4">
            {techStack.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="theme-surface group flex flex-col items-center gap-3 rounded-2xl border border-[color:var(--chip-border)] bg-[color:var(--surface-2)] px-3 py-5 transition hover:border-[color:var(--accent)]"
              >
                <Icon
                  color={color}
                  size={32}
                  aria-hidden="true"
                  className="transition group-hover:scale-110"
                />
                <span className="text-xs font-medium text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
            {localeCopy.home.experienceTitle}
          </h2>
          <ol className="mt-5 space-y-4">
            {localeCopy.home.experiences.map((item) => (
              <li
                key={`${item.company}-${item.period}`}
                className="theme-surface rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{item.role}</h3>
                  <span className="font-mono text-xs tracking-wide text-[color:var(--muted)]">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[color:var(--accent-2)]">{item.company}</p>
                {item.place ? (
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
                    <FaMapMarkerAlt size={12} aria-hidden="true" />
                    {item.place}
                  </p>
                ) : null}
                <p className="mt-3 text-sm text-[color:var(--muted)]">{item.description}</p>
                {item.technologies.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-[color:var(--chip-border)] bg-[color:var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[color:var(--muted)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
            {localeCopy.home.studiesTitle}
          </h2>
          <ol className="mt-5 space-y-4">
            {localeCopy.home.studies.map((item) => (
              <li
                key={`${item.degree}-${item.period}`}
                className="theme-surface rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{item.degree}</h3>
                  <span className="font-mono text-xs tracking-wide text-[color:var(--muted)]">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[color:var(--accent-2)]">{item.institution}</p>
                {item.description ? (
                  <p className="mt-3 text-sm text-[color:var(--muted)]">{item.description}</p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={`/${lang}/proyectos`}
            className="rounded-full bg-[color:var(--accent)] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5"
          >
            {localeCopy.home.viewProjects}
          </Link>
          <a
            href="/assets/Juan_David_Alean_CV.pdf"
            download
            className="theme-surface inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaFileDownload size={18} aria-hidden="true" />
            {localeCopy.home.downloadCv}
          </a>
          <a
            href="https://github.com/juandaalean"
            target="_blank"
            rel="noreferrer"
            className="theme-surface inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaGithub size={18} aria-hidden="true" />
            {localeCopy.home.github}
          </a>
          <a
            href="https://www.linkedin.com/in/juanda-alean-medina"
            target="_blank"
            rel="noreferrer"
            className="theme-surface inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaLinkedin size={18} aria-hidden="true" />
            {localeCopy.home.linkedin}
          </a>
        </div>

        <section className="theme-surface mt-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
            {localeCopy.home.contactTitle}
          </h2>
          <p className="mt-3 text-[color:var(--muted)]">{localeCopy.home.contactDescription}</p>
          <ContactForm copy={localeCopy.home.contactForm} locale={lang} />
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[color:var(--border)] pt-4">
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(localeCopy.home.contactSubject)}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] transition hover:text-[color:var(--accent-2)]"
            >
              <FaEnvelope size={14} aria-hidden="true" />
              {localeCopy.home.contactButton}
            </a>
            <span className="text-xs text-[color:var(--muted)]">
              {localeCopy.home.currentEmailLabel}: <span className="font-mono">{contactEmail}</span>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}