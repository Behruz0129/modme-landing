"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import FlagIcon from "./FlagIcon";

type LocaleItem = {
    code: "uz" | "en" | "ru";
    shortName: string;
};

const LOCALES: LocaleItem[] = [
    { code: "uz", shortName: "UZ" },
    { code: "en", shortName: "EN" },
    { code: "ru", shortName: "RU" },
];

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations("languages");
    const tCommon = useTranslations("common");
    const [isPending, startTransition] = useTransition();

    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

    const onChange = (code: LocaleItem["code"]) => {
        if (code === locale) {
            setIsOpen(false);
            return;
        }
        setIsOpen(false);
        startTransition(() => {
            router.replace(
                // @ts-expect-error params are dynamic
                { pathname, params },
                { locale: code }
            );
        });
    };

    const textColor = dark
        ? "text-white hover:text-[#ff8000]"
        : "text-[#181c23] hover:text-[#ff8000]";

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={tCommon("selectLanguage")}
                aria-expanded={isOpen}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${textColor} disabled:opacity-70`}
                disabled={isPending}
            >
                <FlagIcon code={current.code} />
                <span>{current.shortName}</span>
                <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 min-w-[160px] rounded-md border border-gray-200 bg-white shadow-lg overflow-hidden z-50">
                    {LOCALES.map((item) => {
                        const isActive = item.code === locale;
                        return (
                            <button
                                key={item.code}
                                onClick={() => onChange(item.code)}
                                className={`flex items-center gap-2 w-full px-3 py-2 text-sm transition-colors text-left ${
                                    isActive
                                        ? "bg-[#fff3e6] text-[#ff8000] font-semibold"
                                        : "text-[#181c23] hover:bg-gray-50"
                                }`}
                            >
                                <FlagIcon code={item.code} />
                                <span>{t(item.code)}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
