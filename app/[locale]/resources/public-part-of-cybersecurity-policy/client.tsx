"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";

type CybersecurityBlock =
    | {
          kind: "p";
          text: string;
      }
    | {
          kind: "list";
          items: string[];
      };

type CybersecuritySection = {
    title: string;
    blocks: CybersecurityBlock[];
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

export default function CybersecurityPolicyClient() {
    const common = useTranslations("common");
    const t = useTranslations("resources.cybersecurityPage");
    const locale = useLocale();
    const sections = t.raw("sections") as CybersecuritySection[];

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

                            <div className="space-y-6">
                                {sections.map((section) => (
                                    <div key={section.title}>
                                        <h2 className="text-xl font-bold text-[#181c23] mb-4">
                                            {section.title}
                                        </h2>
                                        <div className="space-y-4">
                                            {section.blocks.map(
                                                (block, index) =>
                                                    block.kind === "p" ? (
                                                        <p key={block.text}>
                                                            {block.text}
                                                        </p>
                                                    ) : (
                                                        <ul
                                                            key={`${section.title}-${index}`}
                                                            className="ml-6 space-y-1 list-disc"
                                                        >
                                                            {block.items.map(
                                                                (item) => (
                                                                    <li
                                                                        key={
                                                                            item
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
