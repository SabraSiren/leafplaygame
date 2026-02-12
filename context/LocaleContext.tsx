"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getTranslations,
  type LocaleKey,
  type Translations,
} from "@/localization";

const STORAGE_KEY = "locale";

type LocaleContextValue = {
  locale: LocaleKey;
  setLocale: (locale: LocaleKey) => void;
  t: Translations;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleKey>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as LocaleKey | null;
    if (stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: LocaleKey) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const t = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return value;
}
