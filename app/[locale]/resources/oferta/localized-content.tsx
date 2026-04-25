"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";

type OfertaSection = {
    title: string;
    paragraphs: string[];
};

function formatDate(locale: string) {
    return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "uz-UZ", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date());
}

export default function LocalizedOfertaContent() {
    const common = useTranslations("common");
    const t = useTranslations("resources.oferta");
    const locale = useLocale();
    const [openSections, setOpenSections] = useState<number[]>([]);
    const intro = t.raw("intro") as string[];
    const sections = t.raw("sections") as OfertaSection[];

    const toggleSection = (index: number) => {
        setOpenSections((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12"
                >
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-[#ff8000] hover:text-[#ff9831] transition-colors mb-6 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {common("backToResources")}
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#181c23] mb-8">
                        {t("title")}
                    </h1>

                    <div className="prose prose-lg max-w-none text-[#4a5564] leading-relaxed text-left">
                        <div className="space-y-6">
                            <div className="text-left mb-8">
                                <p className="text-xl font-semibold text-[#181c23] mb-2">
                                    {t("subtitle")}
                                </p>
                                <p className="text-sm text-[#a8a8a8]">
                                    ({t("updatedLabel")}: {formatDate(locale)})
                                </p>
                            </div>

                            {intro.map((paragraph) => (
                                <p className="text-left" key={paragraph}>
                                    {paragraph}
                                </p>
                            ))}

                            <div className="bg-[#fff8e8] border-l-4 border-[#ff8000] p-4 rounded-r-lg my-6 text-left">
                                <p className="font-semibold text-[#181c23]">
                                    {t("notice")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        {sections.map((section, index) => (
                            <div
                                key={section.title}
                                className="border border-[#f0f0f0] rounded-xl overflow-hidden bg-white"
                            >
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#fcfcfc] transition-colors"
                                >
                                    <span className="text-lg font-semibold text-[#181c23]">
                                        {section.title}
                                    </span>
                                    <motion.div
                                        animate={{
                                            rotate: openSections.includes(index)
                                                ? 180
                                                : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-[#ff8000]" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openSections.includes(index) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 py-4 border-t border-[#f0f0f0] space-y-3 text-left text-[#4a5564]">
                                                {section.paragraphs.map(
                                                    (paragraph) => (
                                                        <p key={paragraph}>
                                                            {paragraph}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
