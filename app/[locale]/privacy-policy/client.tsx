"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

type ConsentItem = {
    text: string;
    list?: string[];
};

export default function PrivacyPolicyClient() {
    const common = useTranslations("common");
    const tPrivacy = useTranslations("privacyPolicy");
    const tConsent = useTranslations("privacyPolicy.consent");
    const items = tConsent.raw("items") as ConsentItem[];

    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12 mb-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#ff8000] hover:text-[#ff9831] transition-colors mb-6 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {common("backToHome")}
                    </Link>

                    <h1 className="text-2xl md:text-3xl font-bold text-[#181c23] mb-2 text-left">
                        {tConsent("title")}
                    </h1>
                    <p className="text-sm text-[#a8a8a8] mb-8 text-left">
                        {tConsent("edition")}
                    </p>

                    <div className="prose prose-lg max-w-none text-[#4a5564] text-left">
                        <p className="leading-relaxed mb-6">
                            {tConsent("intro")}
                        </p>

                        <div className="space-y-6">
                            {items.map((item, index) => (
                                <div key={item.text}>
                                    <p
                                        className={`leading-relaxed${
                                            item.list ? " mb-3" : ""
                                        }`}
                                    >
                                        <span className="font-semibold text-[#181c23]">
                                            {index + 1}.
                                        </span>{" "}
                                        {item.text}
                                    </p>
                                    {item.list && (
                                        <ul className="list-disc pl-6 space-y-2">
                                            {item.list.map((listItem) => (
                                                <li key={listItem}>
                                                    {listItem}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-[#181c23] mb-6">
                        {tPrivacy("fullDocument")}
                    </h2>
                    <Link
                        href="/resources/privacy-and-personal-data-processing-policy"
                        className="flex items-center justify-between p-6 rounded-2xl border border-[#f0f0f0] bg-[#fcfcfc] hover:bg-[#fff8e8] hover:border-[#ff8000]/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#ff8000]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff8000]/20 transition-colors">
                                <FileText className="w-6 h-6 text-[#ff8000]" />
                            </div>
                            <div>
                                <span className="text-lg md:text-xl font-semibold text-[#181c23] group-hover:text-[#ff8000] transition-colors block">
                                    {tConsent("fullDocTitle")}
                                </span>
                                <span className="text-sm text-[#a8a8a8] mt-1 block">
                                    {tConsent("fullDocDescription")}
                                </span>
                            </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[#a8a8a8] group-hover:text-[#ff8000] group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
