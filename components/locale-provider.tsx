"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/content";
import { localizedContent } from "@/lib/content";
import type { SiteCopy } from "@/lib/sanity/copy.ts";
import { defaultLinks, type SiteLinks } from "@/lib/sanity/links.ts";

type LocaleContextValue = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  copy: SiteCopy;
  links: SiteLinks;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  copy = localizedContent,
  links = defaultLinks
}: {
  children: ReactNode;
  copy?: SiteCopy;
  links?: SiteLinks;
}) {
  const [locale, setLocale] = useState<Locale>("ja");
  const pathname = usePathname();

  useEffect(() => {
    // Library content is Japanese, without resetting the official site's choice.
    document.documentElement.lang = pathname.startsWith("/library")
      ? "ja"
      : locale;
  }, [locale, pathname]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, copy, links }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}

export function useSiteContent(locale: Locale) {
  return useLocale().copy[locale];
}
