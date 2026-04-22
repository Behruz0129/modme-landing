import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["uz", "en", "ru"],
    defaultLocale: "uz",
    localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
