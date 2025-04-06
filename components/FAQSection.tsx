"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const faqs = [
    {
        id: 1,
        question: "Modme nima?",
        answer: "Modme - bu o'quv markazlari uchun maxsus ishlab chiqilgan LMS (Learning Management System) va CRM (Customer Relationship Management) tizimlarini birlashtirgan platforma. U o'quv jarayonini avtomatlashtirish, o'quvchilar bilan aloqani yaxshilash va biznesni boshqarish imkonini beradi.",
    },
    {
        id: 2,
        question: "Modme qanday imkoniyatlarga ega?",
        answer:
            "Modme quyidagi asosiy imkoniyatlarni taqdim etadi:\n\n" +
            "• LMS va CRM tizimlari - o'quv jarayonini boshqarish va mijozlar bilan aloqani yaxshilash\n" +
            "• O'quvchilar boshqaruvi - ro'yxatni yaratish, guruhlarga ajratish va o'qish jarayonini kuzatish\n" +
            "• Dars jadvali - guruhlar va o'qituvchilar uchun dars jadvalini tuzish va boshqarish\n" +
            "• Moliyaviy hisobotlar - to'lovlar, xarajatlar va moliyaviy holat haqida to'liq hisobotlar\n" +
            "• SMS va e-mail xabarnomalar - o'quvchilar va ota-onalarga avtomatik xabarnomalar\n" +
            "• Veb-sayt integratsiyasi - o'quv markazingiz veb-sayti bilan integratsiya\n" +
            "• Mobil ilova - o'qituvchilar va o'quvchilar uchun qulay mobil ilova\n" +
            "• O'qituvchilar boshqaruvi - o'qituvchilarning ishini nazorat qilish va baholash",
    },
    {
        id: 3,
        question: "Modme qanday ishlaydi?",
        answer: "Modme oddiy va qulay interfeysga ega. Platformaga kirib, o'quvchilar ro'yxatini yaratasiz, guruhlar tuzasiz, dars jadvalini belgilaysiz. O'qituvchilar o'z guruhlarini boshqarishi, darslarni belgilashi va o'quvchilar bilan aloqada bo'lishi mumkin. Barcha ma'lumotlar avtomatik saqlanadi va hisobotlar tuziladi.",
    },
    {
        id: 4,
        question: "Modme qancha turadi?",
        answer: "Modme narxlari o'quv markazingiz o'lchamiga va tanlagan tarif rejangizga bog'liq. Biz turli xil tarif rejalarni taklif qilamiz - kichik o'quv markazlaridan tortib, yirik tarmoqlargacha. Batafsil ma'lumot uchun biz bilan bog'laning.",
    },
    {
        id: 5,
        question: "Modme qanday texnik yordam ko'rsatadi?",
        answer:
            "Biz mijozlarimizga quyidagi yordam xizmatlarini taqdim etamiz:\n\n" +
            "• Onlayn qo'llanma va video darsliklar\n" +
            "• Telegram orqali texnik yordam\n" +
            "• Onlayn treninglar va seminarlar\n" +
            "• Shaxsiy menejer yordami",
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
                            Ko'p so'raladigan savollar
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Modme haqida
                        </p>
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
