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

type LocaleContextValue = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ja");
  const pathname = usePathname();

  useEffect(() => {
    // Library content is Japanese, without resetting the official site's choice.
    document.documentElement.lang = pathname.startsWith("/library")
      ? "ja"
      : locale;
  }, [locale, pathname]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
