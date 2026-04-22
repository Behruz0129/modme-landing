"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
    localeFlags,
    localeNames,
    localeShortLabels,
    locales,
    type Locale,
} from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function LocaleSwitcher({
    dark = false,
    variant = "desktop",
}: {
    dark?: boolean;
    variant?: "desktop" | "mobile";
}) {
    const { locale, setLocale } = useI18n();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    const select = (next: Locale) => {
        setLocale(next);
        setOpen(false);
    };

    const textClass = dark
        ? "text-white hover:text-[#ff8000]"
        : "text-[#181c23] hover:text-[#ff8000]";

    if (variant === "mobile") {
        return (
            <div className="flex flex-col gap-2">
                <p
                    className={`text-xs font-semibold uppercase tracking-wide ${
                        dark ? "text-white/60" : "text-[#a8a8a8]"
                    }`}
                >
                    {localeNames[locale]}
                </p>
                <div className="flex flex-wrap gap-2">
                    {locales.map((lng) => (
                        <button
                            key={lng}
                            onClick={() => select(lng)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                                locale === lng
                                    ? "bg-[#ff8000] text-white border-[#ff8000]"
                                    : dark
                                    ? "bg-transparent text-white border-white/20 hover:border-[#ff8000]"
                                    : "bg-white text-[#181c23] border-[#f0f0f0] hover:border-[#ff8000]"
                            }`}
                        >
                            <span className="mr-1">{localeFlags[lng]}</span>
                            {localeShortLabels[lng]}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen((v) => !v)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer ${textClass}`}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <Globe className="w-4 h-4" />
                <span>{localeShortLabels[locale]}</span>
                <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        role="listbox"
                        className={`absolute right-0 mt-2 min-w-[170px] rounded-xl shadow-xl border overflow-hidden z-50 ${
                            dark
                                ? "bg-[#101010] border-white/10"
                                : "bg-white border-[#f0f0f0]"
                        }`}
                    >
                        {locales.map((lng) => {
                            const active = lng === locale;
                            return (
                                <li key={lng}>
                                    <button
                                        onClick={() => select(lng)}
                                        className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                                            active
                                                ? "bg-[#ff8000]/10 text-[#ff8000]"
                                                : dark
                                                ? "text-white hover:bg-white/5"
                                                : "text-[#181c23] hover:bg-[#fcfcfc]"
                                        }`}
                                        role="option"
                                        aria-selected={active}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="text-lg leading-none">
                                                {localeFlags[lng]}
                                            </span>
                                            <span>{localeNames[lng]}</span>
                                        </span>
                                        {active && (
                                            <Check className="w-4 h-4" />
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
