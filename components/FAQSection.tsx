"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const faqs = [
    {
        id: 1,
        question: "Modme nima va kimlar uchun mo‘ljallangan?",
        answer:
            "Modme — bu ta’lim markazlari uchun mo‘ljallangan CRM tizimi bo‘lib, o‘quvchilarni ro‘yxatga olish, moliya boshqaruvi, dars jadvali, hisobotlar va boshqalarni avtomatlashtirishga yordam beradi\n\n" +
            "Modme xususiy o‘quv markazlari, kurslar, repetitorlik markazlari va boshqa har qanday ta’lim muassasalari uchun mos keladi",
    },
    {
        id: 2,
        question: "Moliyaviy hisobotlar qanchalik to‘liq?",
        answer: "To‘liq avtomatik: har bir to‘lov, chegirma, qarzdorlik, oylik hisobotlar va tranzaksiyalar tizimda aks etadi",
    },
    {
        id: 3,
        question: "Dastur bulutli xizmatmi yoki kompyuterga o‘rnatish kerakmi?",
        answer: "Modme to‘liq bulutda ishlaydi — istalgan qurilmadan, istalgan joydan kirish mumkin",
    },
    {
        id: 4,
        question: " Sinov muddati bormi?",
        answer: "Ha, bizda bepul demo versiyasi mavjud — 7 kungacha sinab, ishlatib ko‘rishingiz mumkin",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Ko'p beriladigan savollar
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
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
