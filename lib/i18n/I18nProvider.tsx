"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
    LOCALE_COOKIE,
    LOCALE_STORAGE_KEY,
    defaultLocale,
    isLocale,
    locales,
    type Locale,
} from "./config";
import messages, { type Messages } from "./messages";

type I18nContextValue = {
    locale: Locale;
    setLocale: (next: Locale) => void;
    t: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string) {
    if (typeof document === "undefined") return;
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${oneYear}; samesite=lax`;
}

function detectInitialLocale(initialLocale?: Locale): Locale {
    if (typeof window === "undefined") {
        return initialLocale ?? defaultLocale;
    }

    const fromStorage = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(fromStorage)) return fromStorage;

    const fromCookie = readCookie(LOCALE_COOKIE);
    if (isLocale(fromCookie)) return fromCookie;

    if (initialLocale) return initialLocale;

    const nav = window.navigator?.language?.slice(0, 2).toLowerCase();
    if (isLocale(nav)) return nav;

    return defaultLocale;
}

export function I18nProvider({
    children,
    initialLocale,
}: {
    children: React.ReactNode;
    initialLocale?: Locale;
}) {
    const [locale, setLocaleState] = useState<Locale>(
        () => initialLocale ?? defaultLocale
    );
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const detected = detectInitialLocale(initialLocale);
        setLocaleState(detected);
        setIsHydrated(true);
    }, [initialLocale]);

    useEffect(() => {
        if (!isHydrated) return;
        if (typeof document !== "undefined") {
            document.documentElement.lang = locale;
        }
    }, [locale, isHydrated]);

    const setLocale = useCallback((next: Locale) => {
        if (!locales.includes(next)) return;
        setLocaleState(next);
        try {
            window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
        } catch {}
        writeCookie(LOCALE_COOKIE, next);
    }, []);

    const value = useMemo<I18nContextValue>(
        () => ({
            locale,
            setLocale,
            t: messages[locale],
        }),
        [locale, setLocale]
    );

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error("useI18n must be used within I18nProvider");
    }
    return ctx;
}

export function useTranslations(): Messages {
    return useI18n().t;
}

export function useLocale(): Locale {
    return useI18n().locale;
}
