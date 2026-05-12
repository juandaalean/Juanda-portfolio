import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { dictionaries, isValidLocale, locales } from "../i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const localeCopy = dictionaries[lang];
  const url = `https://juanda-portfolio.vercel.app/${lang}`;

  return {
    title: localeCopy.meta.title,
    description: localeCopy.meta.description,
    alternates: {
      canonical: url,
      languages: {
        es: "https://juanda-portfolio.vercel.app/es",
        en: "https://juanda-portfolio.vercel.app/en",
      },
    },
    openGraph: {
      title: localeCopy.meta.title,
      description: localeCopy.meta.description,
      url,
      siteName: "Juan David Alean Portfolio",
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: localeCopy.meta.title,
      description: localeCopy.meta.description,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <>
      <header className="mx-auto w-full max-w-5xl px-5 pt-5 sm:px-6">
        <div className="flex justify-end">
          <LanguageSwitcher currentLocale={lang} />
        </div>
      </header>
      {children}
    </>
  );
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}