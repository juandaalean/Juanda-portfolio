import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiCss,
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiNumpy,
  SiPostgresql,
  SiPython,
  SiQt,
  SiReact,
  SiSharp,
  SiStreamlit,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  FaCalculator,
  FaChartLine,
  FaCheck,
  FaCode,
  FaCog,
  FaCubes,
  FaDatabase,
  FaDesktop,
  FaKey,
  FaLeaf,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaPuzzlePiece,
  FaServer,
  FaShieldAlt,
  FaVial,
} from "react-icons/fa";

export type TechEntry = {
  name: string;
  icon: IconType;
  color: string;
};

const techIconMap: Record<string, TechEntry> = {
  "c#": { name: "C#", icon: SiSharp, color: "#68217a" },
  ".net": { name: ".NET", icon: SiDotnet, color: "#512bd4" },
  ".net 8": { name: ".NET 8", icon: SiDotnet, color: "#512bd4" },
  ".net core": { name: ".NET Core", icon: SiDotnet, color: "#512bd4" },
  "asp.net core": { name: "ASP.NET Core", icon: SiDotnet, color: "#512bd4" },
  "entity framework core": { name: "EF Core", icon: FaDatabase, color: "#512bd4" },
  "ef core": { name: "EF Core", icon: FaDatabase, color: "#512bd4" },
  docker: { name: "Docker", icon: SiDocker, color: "#2496ed" },
  postgresql: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  mysql: { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  xunit: { name: "xUnit", icon: FaVial, color: "#e0234e" },
  swagger: { name: "Swagger", icon: SiSwagger, color: "#85ea2d" },
  jwt: { name: "JWT", icon: FaKey, color: "#d63aff" },
  react: { name: "React", icon: SiReact, color: "#61dafb" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  vite: { name: "Vite", icon: SiVite, color: "#646cff" },
  "tailwind css": { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  daisyui: { name: "DaisyUI", icon: FaLeaf, color: "#5b21b6" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  html: { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  css: { name: "CSS", icon: SiCss, color: "#1572b6" },
  git: { name: "Git", icon: SiGit, color: "#cc6825" },
  python: { name: "Python", icon: SiPython, color: "#3776ab" },
  pyqt5: { name: "PyQt5", icon: SiQt, color: "#41cd52" },
  streamlit: { name: "Streamlit", icon: SiStreamlit, color: "#ff4b4b" },
  numpy: { name: "NumPy", icon: SiNumpy, color: "#013243" },
  matplotlib: { name: "Matplotlib", icon: FaChartLine, color: "#11557c" },
  plotly: { name: "Plotly", icon: FaChartLine, color: "#3f4f75" },
  fastapi: { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  kotlin: { name: "Kotlin", icon: SiKotlin, color: "#7f52ff" },
  "android sdk": { name: "Android SDK", icon: SiAndroid, color: "#3ddc84" },
  "jetpack compose": { name: "Jetpack Compose", icon: FaCubes, color: "#4285f4" },
  room: { name: "Room", icon: FaDatabase, color: "#7f52ff" },
  retrofit: { name: "Retrofit", icon: FaServer, color: "#7f52ff" },
  firebase: { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  "google maps api": { name: "Google Maps API", icon: SiGooglemaps, color: "#4285f4" },
  "rest apis": { name: "REST APIs", icon: FaServer, color: "#5d6f6d" },
  dapr: { name: "Dapr", icon: FaCubes, color: "#0d2192" },
  "clean architecture": { name: "Clean Architecture", icon: FaPuzzlePiece, color: "#5d6f6d" },
  solid: { name: "SOLID", icon: FaShieldAlt, color: "#5d6f6d" },
  mvvm: { name: "MVVM", icon: FaCog, color: "#5d6f6d" },
  "design patterns": { name: "Design Patterns", icon: FaCog, color: "#5d6f6d" },
};

const sortedKeys = Object.keys(techIconMap).sort((a, b) => b.length - a.length);

export function getTechIcon(tech: string): TechEntry | undefined {
  const normalized = tech.toLowerCase().trim();
  if (techIconMap[normalized]) {
    return techIconMap[normalized];
  }
  for (const key of sortedKeys) {
    if (normalized.includes(key)) {
      return techIconMap[key];
    }
  }
  return undefined;
}

export function getTechEntries(techs: string[]): TechEntry[] {
  return techs.map((tech) => {
    const entry = getTechIcon(tech);
    if (entry) return entry;
    return { name: tech, icon: FaCode, color: "#5d6f6d" };
  });
}

export { FaCheck, FaMapMarkedAlt, FaMobileAlt, FaDesktop, FaServer, FaCalculator };
