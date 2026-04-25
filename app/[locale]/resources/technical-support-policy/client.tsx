"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";

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

export default function TechnicalSupportPolicyClient() {
    const common = useTranslations("common");
    const t = useTranslations("resources.technicalSupportPage");
    const locale = useLocale();
    const paragraphs = t.raw("paragraphs") as string[];
    const channels = t.raw("channels") as string[];

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
                                <p className="text-lg font-semibold text-[#181c23] mb-2">
                                    {t("company")}
                                </p>
                                <p className="text-sm text-[#a8a8a8]">
                                    ({t("updatedLabel")}{" "}
                                    {formatCurrentDate(locale)})
                                </p>
                            </div>

                            <div className="space-y-4">
                                {paragraphs.map((paragraph, index) => (
                                    <p key={paragraph}>
                                        <strong>{index + 1}.</strong>{" "}
                                        {paragraph}
                                    </p>
                                ))}
                                <ul className="ml-6 space-y-2 list-disc">
                                    <li>
                                        {channels[0]}{" "}
                                        <a
                                            href="https://t.me/modme_support"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#ff8000] hover:underline"
                                        >
                                            t.me/modme_support
                                        </a>
                                    </li>
                                    <li>
                                        {channels[1]}{" "}
                                        <a
                                            href="tel:+998787771100"
                                            className="text-[#ff8000] hover:underline"
                                        >
                                            +998 787771100
                                        </a>
                                    </li>
                                    <li>
                                        {channels[2]}{" "}
                                        <a
                                            href="mailto:crmmodme@gmail.com"
                                            className="text-[#ff8000] hover:underline"
                                        >
                                            crmmodme@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
