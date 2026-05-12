"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, isValidLocale, locales } from "../i18n";

function buildLocalizedPath(pathname: string, nextLocale: Locale): string {
  const cleanPathname = pathname || "/";
  const segments = cleanPathname.split("/");

  if (segments[1] && isValidLocale(segments[1])) {
    segments[1] = nextLocale;
    return segments.join("/") || "/";
  }

  return `/${nextLocale}${cleanPathname === "/" ? "" : cleanPathname}`;
}

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Language selector" className="inline-flex rounded-full border border-[#c8d8d5] bg-white p-1 shadow-sm">
      {locales.map((localeOption) => {
        const isActive = localeOption === currentLocale;

        return (
          <Link
            key={localeOption}
            href={buildLocalizedPath(pathname, localeOption)}
            className={[
              "rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition",
              isActive
                ? "bg-[color:var(--accent)] text-white"
                : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
            ].join(" ")}
            aria-current={isActive ? "page" : undefined}
          >
            {localeOption.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}