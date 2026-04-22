export const locales = ["uz", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export const localeNames: Record<Locale, string> = {
    uz: "O'zbek",
    en: "English",
    ru: "Русский",
};

export const localeFlags: Record<Locale, string> = {
    uz: "🇺🇿",
    en: "🇬🇧",
    ru: "🇷🇺",
};

export const localeShortLabels: Record<Locale, string> = {
    uz: "UZ",
    en: "EN",
    ru: "RU",
};

export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_STORAGE_KEY = "modme-locale";

export function isLocale(value: unknown): value is Locale {
    return typeof value === "string" && (locales as readonly string[]).includes(value);
}
