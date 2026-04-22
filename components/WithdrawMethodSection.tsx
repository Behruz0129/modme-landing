"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const METHOD_IDS = [
    "monthly",
    "daily",
    "module",
    "groupstart",
    "coursepayment",
    "individual",
] as const;

type MethodId = (typeof METHOD_IDS)[number];

const WithdrawMethodSection = () => {
    const t = useTranslations("withdrawMethod");
    const [selectedMethod, setSelectedMethod] = useState<MethodId>("monthly");

    const getList = (key: string): string[] => {
        try {
            const raw = t.raw(key);
            return Array.isArray(raw) ? (raw as string[]) : [];
        } catch {
            return [];
        }
    };

    const name = t(`methods.${selectedMethod}.name`);
    const description = t(`methods.${selectedMethod}.description`);
    const example = t(`methods.${selectedMethod}.example`);
    const advantages = getList(`methods.${selectedMethod}.advantages`);
    const disadvantages = getList(`methods.${selectedMethod}.disadvantages`);

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12 mb-14 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] max-w-md lg:max-w-lg">
                            {t("heading")}
                        </h2>
                        <p className="text-base md:text-lg text-[#a8a8a8] max-w-md lg:max-w-lg">
                            {t("description")}
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={0.2} threshold={0.3}>
                    <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14 justify-center">
                        {METHOD_IDS.map((id) => (
                            <button
                                key={id}
                                onClick={() => setSelectedMethod(id)}
                                className={`py-3 px-6 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                                    selectedMethod === id
                                        ? "bg-[#080A0A] text-white border-[#080A0A]"
                                        : "bg-white text-[#080A0A] border-[#080A0A] hover:bg-gray-50"
                                } focus:outline-none focus:ring-2 focus:ring-[#080A0A] focus:ring-opacity-50`}
                            >
                                {t(`methods.${id}.name`)}
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={0.3} threshold={0.3}>
                    <div className="max-w-3xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedMethod}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl shadow-xl p-8 md:p-12"
                            >
                                <div className="space-y-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#ff8000]/10 rounded-lg flex items-center justify-center">
                                                <span className="text-2xl font-bold text-[#ff8000]">
                                                    {name.charAt(0)}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#080A0A]">
                                                {name}
                                            </h3>
                                        </div>
                                        <div className="prose prose-lg max-w-none">
                                            <p className="text-[#080A0A] leading-relaxed">
                                                {description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 bg-[#fcfcfc] p-6 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                <span className="text-gray-800 font-semibold">
                                                    i
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-semibold text-gray-800">
                                                {t("example")}
                                            </h4>
                                        </div>
                                        <p className="text-[#080A0A] leading-relaxed">
                                            {example}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4 bg-[#fcfcfc] p-6 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-[#01662F]/10 rounded-full flex items-center justify-center">
                                                    <span className="text-[#01662F] font-semibold">
                                                        +
                                                    </span>
                                                </div>
                                                <h4 className="text-xl font-semibold text-[#01662F]">
                                                    {t("advantages")}
                                                </h4>
                                            </div>
                                            <ul className="list-disc pl-6 space-y-2">
                                                {advantages.map(
                                                    (item, index) => (
                                                        <li
                                                            key={index}
                                                            className="text-[#080A0A] leading-relaxed"
                                                        >
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <div className="space-y-4 bg-[#fcfcfc] p-6 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-[#ff8000]/10 rounded-full flex items-center justify-center">
                                                    <span className="text-[#ff8000] font-semibold">
                                                        -
                                                    </span>
                                                </div>
                                                <h4 className="text-xl font-semibold text-[#ff8000]">
                                                    {t("disadvantages")}
                                                </h4>
                                            </div>
                                            <ul className="list-disc pl-6 space-y-2">
                                                {disadvantages.map(
                                                    (item, index) => (
                                                        <li
                                                            key={index}
                                                            className="text-[#080A0A] leading-relaxed"
                                                        >
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default WithdrawMethodSection;
