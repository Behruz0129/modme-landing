"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Languages, Briefcase, CheckCircle, Send } from "lucide-react";
import Link from "next/link";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const vacancies = [
    {
        id: 1,
        title: "Sotuv menejeri",
        location: "Toshkent",
        type: "Offline",
        languages: ["O'zbek tili", "Rus tili (majburiy)"],
        department: "Sotuv bo'limi",
        description:
            "Modme jamoasiga tajribali va kommunikabel sotuv menejerini qidiryapmiz. Siz o'quv markazlari bilan ishlaysiz va ularga CRM tizimimizni taqdim etasiz.",
        responsibilities: [
            "Yangi mijozlarni izlash va ular bilan aloqa o'rnatish",
            "O'quv markazlariga Modme CRM platformasini taqdim etish",
            "Mijozlar bilan muzokaralar olib borish va shartnomalar tuzish",
            "CRM tizimida mijozlar bazasini yuritish",
            "Oylik sotuv rejalarini bajarish",
            "Mijozlar bilan uzoq muddatli munosabatlarni rivojlantirish",
        ],
        requirements: [
            "Sotuv sohasida kamida 1 yillik tajriba",
            "Rus tilini yaxshi bilish (majburiy)",
            "O'zbek tilini bilish",
            "Kommunikabellik va ishontirish qobiliyati",
            "Natijaga yo'naltirilganlik",
            "CRM tizimlari bilan ishlash tajribasi (afzallik)",
            "B2B sotuv tajribasi (afzallik)",
        ],
        benefits: [
            "Raqobatbardosh ish haqi + bonuslar",
            "Professional rivojlanish imkoniyatlari",
            "Zamonaviy ofis muhiti",
            "Do'stona jamoa",
            "Karyera o'sishi imkoniyati",
        ],
        salary: "Kelishiladi (asosiy ish haqi + sotuv bonuslari)",
        contactTelegram: "https://t.me/modme_hr",
    },
];

export default function VacanciesClient() {
    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#080a0a]">
                            Vakansiyalar
                        </h1>
                        <p className="text-lg text-[#a8a8a8] max-w-2xl mx-auto">
                            Modme jamoasiga qo'shiling va ta'lim texnologiyalarini 
                            rivojlantirishda ishtirok eting!
                        </p>
                    </motion.div>

                    {/* Vacancies List */}
                    <div className="space-y-8">
                        {vacancies.map((vacancy, index) => (
                            <ScrollAnimation
                                key={vacancy.id}
                                direction="up"
                                delay={index * 0.1}
                            >
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-[#ffd03d]/10 to-[#ff8000]/10 p-6 md:p-8 border-b border-[#f0f0f0]">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-bold text-[#080a0a] mb-3">
                                                    {vacancy.title}
                                                </h2>
                                                <div className="flex flex-wrap gap-3">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-sm text-[#080a0a]">
                                                        <MapPin className="w-4 h-4 text-[#ff8000]" />
                                                        {vacancy.location}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-sm text-[#080a0a]">
                                                        <Clock className="w-4 h-4 text-[#ff8000]" />
                                                        {vacancy.type}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-sm text-[#080a0a]">
                                                        <Briefcase className="w-4 h-4 text-[#ff8000]" />
                                                        {vacancy.department}
                                                    </span>
                                                </div>
                                            </div>
                                            <Link
                                                href={vacancy.contactTelegram}
                                                target="_blank"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-white font-bold rounded-lg hover:opacity-90 transition-all"
                                            >
                                                <Send className="w-5 h-5" />
                                                Ariza qoldirish
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8">
                                        {/* Languages */}
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Languages className="w-5 h-5 text-[#ff8000]" />
                                                <h3 className="font-semibold text-[#080a0a]">
                                                    Til talablari:
                                                </h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {vacancy.languages.map((lang, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1.5 bg-[#f8f8f8] rounded-lg text-sm text-[#080a0a]"
                                                    >
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="mb-8">
                                            <p className="text-[#4A5564] leading-relaxed">
                                                {vacancy.description}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            {/* Responsibilities */}
                                            <div>
                                                <h3 className="text-lg font-bold text-[#080a0a] mb-4">
                                                    Vazifalar:
                                                </h3>
                                                <ul className="space-y-3">
                                                    {vacancy.responsibilities.map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-[#ff8000] mt-0.5 flex-shrink-0" />
                                                            <span className="text-[#4A5564]">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Requirements */}
                                            <div>
                                                <h3 className="text-lg font-bold text-[#080a0a] mb-4">
                                                    Talablar:
                                                </h3>
                                                <ul className="space-y-3">
                                                    {vacancy.requirements.map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-[#01662F] mt-0.5 flex-shrink-0" />
                                                            <span className="text-[#4A5564]">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div className="mt-8 p-6 bg-[#f8f8f8] rounded-xl">
                                            <h3 className="text-lg font-bold text-[#080a0a] mb-4">
                                                Biz taklif qilamiz:
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                {vacancy.benefits.map((benefit, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-2 bg-white rounded-lg text-sm text-[#080a0a] shadow-sm"
                                                    >
                                                        ✨ {benefit}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Salary & CTA */}
                                        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-[#f0f0f0]">
                                            <div>
                                                <span className="text-sm text-[#a8a8a8]">
                                                    Ish haqi:
                                                </span>
                                                <p className="text-lg font-semibold text-[#080a0a]">
                                                    {vacancy.salary}
                                                </p>
                                            </div>
                                            <Link
                                                href={vacancy.contactTelegram}
                                                target="_blank"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#080a0a] text-white font-bold rounded-lg hover:bg-[#181c23] transition-all"
                                            >
                                                <Send className="w-5 h-5" />
                                                Telegram orqali bog'lanish
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>

                    {/* No More Vacancies */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-[#a8a8a8]">
                            Boshqa vakansiyalar hozircha yo'q. Lekin siz o'z rezyumeingizni{" "}
                            <Link
                                href="https://t.me/modme_hr"
                                target="_blank"
                                className="text-[#ff8000] hover:underline"
                            >
                                @modme_hr
                            </Link>{" "}
                            ga yuborishingiz mumkin.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

