import Image from "next/image";
import Link from "next/link";
import {
  SiCss,
  SiDotnet,
  SiHtml5,
  SiKotlin,
  SiQt,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiJavascript,
} from "react-icons/si";
import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "./assets/juanda_profile_photo.jpg";

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

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-5 py-12">
      <main className="card w-full max-w-4xl p-8 sm:p-12">
        <p className="font-mono text-xs tracking-[0.25em] text-[color:var(--accent)]">
          BACKEND DEVELOPER
        </p>

        <section className="mt-5 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="h-36 w-36 shrink-0 rounded-full border-4 border-white bg-gradient-to-br from-[#99f6e4] to-[#fed7aa] p-1 shadow-lg sm:h-44 sm:w-44">
            <div className="relative h-full w-full overflow-hidden rounded-full border border-[#cde4df] bg-white">
              <Image
                src={profilePhoto}
                alt="Foto de perfil de Juan David Alean"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 144px, 176px"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Hola, soy Juan David Alean.
            <span className="block text-[color:var(--accent-2)]">
              Desarrollador de software.
            </span>
          </h1>
        </section>

        <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
          Me especializo en diseño y desarrollo backend para productos digitales con foco en rendimiento,
          observabilidad y mantenibilidad, manteniendo arquitecturas limpias y aplicando principios SOLID.
          Tengo experiencia trabajando con APIs REST y bases de datos relacionales en proyectos de
          producción, así como en el desarrollo de aplicaciones de escritorio y nativas de Android.
          Mi objetivo es seguir creciendo como desarrollador backend y contribuir a proyectos
          desafiantes que impacten positivamente a los usuarios.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#dce7e5] bg-white p-5">
            <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
              Stack principal
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
            <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">Intereses</h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Arquitectura de APIs, microservicios, sistemas orientados a eventos,
              seguridad en aplicaciones backend, aplicación de sistemas automatizados 
              y aplicaciones de inteligencia artificial para mejorar la eficiencia y funcionalidad de los productos digitales.
            </p>
          </article>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/proyectos"
            className="rounded-full bg-[color:var(--accent)] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5"
          >
            Ver Proyectos
          </Link>
          <a
            href="/assets/Juan_David_Alean_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-[#c8d8d5] bg-white px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaFileDownload size={18} aria-hidden="true" />
            Descargar CV
          </a>
          <a
            href="https://github.com/juandaalean"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#c8d8d5] bg-white px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaGithub size={18} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/juanda-alean-medina"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#c8d8d5] bg-white px-6 py-3 font-medium transition hover:border-[color:var(--accent)]"
          >
            <FaLinkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
        </div>

        <section className="mt-10 rounded-2xl border border-[#dce7e5] bg-white p-6">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[color:var(--accent)]">
            Contacto
          </h2>
          <p className="mt-3 text-[color:var(--muted)]">
            Si quieres colaborar en un proyecto, hablar sobre backend o tienes una oportunidad,
            puedes escribirme por correo.
          </p>
          <a
            href={`mailto:${contactEmail}?subject=Contacto%20desde%20tu%20portfolio`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 font-medium text-white transition hover:-translate-y-0.5"
          >
            <FaEnvelope size={18} aria-hidden="true" />
            Enviarme un correo
          </a>
          <p className="mt-3 text-xs text-[color:var(--muted)]">Correo actual: {contactEmail}</p>
        </section>
      </main>
    </div>
  );
}
