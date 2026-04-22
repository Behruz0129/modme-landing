"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollAnimation from "@/lib/animations/scroll-animation";

type FaqItem = {
    question: string;
    answer: string;
    linkText?: string;
};

const FAQSection = () => {
    const t = useTranslations("faq");
    const faqs = t.raw("items") as FaqItem[];
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            {t("heading")}
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setActiveIndex(
                                        activeIndex === index ? null : index
                                    )
                                }
                                className="w-full p-6 text-left flex items-center justify-between"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-[#080a0a]">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-6 h-6 text-[#ff8000] transition-transform duration-300 ${
                                        activeIndex === index
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: activeIndex === index ? "auto" : 0,
                                    opacity: activeIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-[#666666] whitespace-pre-line">
                                    {faq.answer}
                                    {faq.linkText && (
                                        <a
                                            href="https://t.me/modmebillingbot?start=faq"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#ff8000] underline underline-offset-4"
                                        >
                                            {faq.linkText}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
