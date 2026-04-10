import { notFound } from "next/navigation";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { isValidLocale, locales } from "../i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

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