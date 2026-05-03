"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

type PrivacySection = {
    title: string;
    paragraphs: string[];
};

function formatCurrentDate(locale: string) {
    return new Intl.DateTimeFormat(
        locale === "ru" ? "ru-RU" : locale === "en" ? "en-US" : "uz-UZ",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    ).format(new Date());
}

export default function PrivacyPolicyClient() {
    const common = useTranslations("common");
    const t = useTranslations("resources.privacyProcessingPage");
    const locale = useLocale();
    const [openSections, setOpenSections] = useState<number[]>([]);
    const intro = t.raw("intro") as string[];
    const sections = t.raw("sections") as PrivacySection[];

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
                                <p className="text-2xl font-bold text-[#181c23] mb-2">
                                    {t("documentTitle")}
                                </p>
                                <p className="text-xl font-semibold text-[#181c23] mb-2">
                                    {t("documentSubtitle")}
                                </p>
                                <p className="text-lg font-semibold text-[#181c23] mb-2">
                                    {t("company")}
                                </p>
                                <p className="text-sm text-[#a8a8a8]">
                                    ({t("updatedLabel")}{" "}
                                    {formatCurrentDate(locale)})
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-[#181c23] mb-4">
                                        {t("introTitle")}
                                    </h2>
                                    <div className="space-y-4">
                                        {intro.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
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
                                            <div className="px-6 py-4 border-t border-[#f0f0f0] space-y-4 text-left text-[#4a5564]">
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
