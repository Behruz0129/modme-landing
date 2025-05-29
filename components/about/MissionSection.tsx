"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const values = [
    {
        title: "Innovatsiya",
        description:
            "Biz doimo yangi texnologiyalar va yondashuvlarni qo'llab-quvvatlaymiz va ta'lim jarayonini zamonaviylashtirishga bor kuchimizni sarflaymiz",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        ),
    },
    {
        title: "Sifat",
        description:
            "Biz mijozlarimizga yuqori sifatli xizmat ko'rsatish va platformamizni doimo yaxshilashga harakat qilamiz",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
    {
        title: "Hamkorlik",
        description:
            "Biz mijozlarimiz bilan yaqin hamkorlikda ishlaymiz va ularning muvaffaqiyatiga erishishiga ko'mak beramiz",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        ),
    },
    {
        title: "O'zlashtirish",
        description:
            "Biz o'quvchilarning bilimlarini oshirish va ularning muvaffaqiyatga erishishida kerak bo'ladigan barcha imkoniyatlarni taqdim etamiz",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
            </svg>
        ),
    },
];

const MissionSection = () => {
    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Missiya va qadriyatlar
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ffd03d]/5 to-[#ff8000]/5 rounded-2xl" />
                        <div className="relative p-8">
                            <h3 className="text-2xl font-bold text-[#080a0a] mb-6">
                                Bizning missiyamiz
                            </h3>
                            <p className="text-[#a8a8a8] text-lg leading-relaxed">
                                Biz ta’lim muassasalariga kuchliroq va
                                samaraliroq bo‘lishga yordam beramiz —
                                boshqaruv, o‘qitish va o‘sish jarayonlarini
                                oddiy va raqamlashgan ekotizim orqali
                                ta’minlaymiz. Bizning maqsadimiz — barcha ta’lim
                                jarayoni ishtirokchilari uchun sifatli ta’limni
                                ommabop, oson va texnologik qilish
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-white rounded-2xl shadow-sm transform group-hover:scale-105 transition-transform duration-300" />
                                <div className="relative p-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ffd03d] to-[#ff8000] flex items-center justify-center text-white mb-4">
                                        {value.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-[#080a0a] mb-2">
                                        {value.title}
                                    </h4>
                                    <p className="text-[#a8a8a8]">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
