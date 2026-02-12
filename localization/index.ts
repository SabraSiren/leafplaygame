import { en } from "./en";

export type LocaleKey = "en";

export const locales = { en } as const;

export function getTranslations(locale: LocaleKey) {
  return locales[locale];
}

export type Translations = ReturnType<typeof getTranslations>;

export { en };
