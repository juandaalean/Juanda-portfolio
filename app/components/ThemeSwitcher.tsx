"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../lib/theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const nextLabel = isDark
    ? "Cambiar a tema claro"
    : "Cambiar a tema oscuro";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={nextLabel}
      title={nextLabel}
      className="theme-surface inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] text-[color:var(--muted)] shadow-sm transition hover:text-[color:var(--foreground)]"
    >
      {isDark ? (
        <FaSun size={15} aria-hidden="true" />
      ) : (
        <FaMoon size={15} aria-hidden="true" />
      )}
    </button>
  );
}
