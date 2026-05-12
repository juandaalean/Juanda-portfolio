import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SiCss,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiQt,
} from "react-icons/si";
import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/juanda_profile_photo.jpg";
import { Dictionary, Locale, dictionaries, isValidLocale } from "../i18n";

const contactEmail = "juanalean2525@gmail.com";

const techStack = [
  { name: ".NET", icon: SiDotnet, color: "#512bd4" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "Qt", icon: SiQt, color: "#4169e1" },
  { name: "Kotlin", icon: SiKotlin, color: "#7f52ff" },
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
];

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
      <main className="card w-full max-w-4xl p-8 sm:p-12">
        <p className="font-mono text-xs tracking-[0.25em] text-[color:var(--accent)]">
          {localeCopy.home.roleTag}
        </p>

        <section className="mt-5 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="h-36 w-36 shrink-0 rounded-full border-4 border-white bg-gradient-to-br from-[#99f6e4] to-[#fed7aa] p-1 shadow-lg sm:h-44 sm:w-44">
            <div className="relative h-full w-full overflow-hidden rounded-full border border-[#cde4df] bg-white">
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

        <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)]">{localeCopy.home.summary}</p>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#dce7e5] bg-white p-5">
            <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
              {localeCopy.home.stackTitle}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {techStack.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-full border border-[#d7e6e3] bg-[#f9fbfb] px-3 py-2 text-sm text-[color:var(--foreground)]"
                >
                  <Icon color={color} size={17} aria-hidden="true" />
                  <span className="font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#dce7e5] bg-white p-5">
            <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
              {localeCopy.home.interestsTitle}
            </h2>
            <p className="mt-3 text-[color:var(--muted)]">{localeCopy.home.interestsDescription}</p>
          </article>
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
            className="inline-flex items-center gap-2 rounded-full border border-[#c8d8d5] bg-white px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaFileDownload size={18} aria-hidden="true" />
            {localeCopy.home.downloadCv}
          </a>
          <a
            href="https://github.com/juandaalean"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#c8d8d5] bg-white px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaGithub size={18} aria-hidden="true" />
            {localeCopy.home.github}
          </a>
          <a
            href="https://www.linkedin.com/in/juanda-alean-medina"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#c8d8d5] bg-white px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaLinkedin size={18} aria-hidden="true" />
            {localeCopy.home.linkedin}
          </a>
        </div>

        <section className="mt-10 rounded-2xl border border-[#dce7e5] bg-white p-6">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
            {localeCopy.home.contactTitle}
          </h2>
          <p className="mt-3 text-[color:var(--muted)]">{localeCopy.home.contactDescription}</p>
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(localeCopy.home.contactSubject)}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5"
          >
            <FaEnvelope size={18} aria-hidden="true" />
            {localeCopy.home.contactButton}
          </a>
          <p className="mt-3 text-xs text-[color:var(--muted)]">
            {localeCopy.home.currentEmailLabel}: {contactEmail}
          </p>
        </section>
      </main>
    </div>
  );
}