"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const faqs = [
    {
        question: "Modme platformasi qanday ishlaydi?",
        answer: "Modme - bu o'quv markazlari uchun yaratilgan zamonaviy LMS (Learning Management System) platformasi. Platforma orqali siz o'quv jarayonini to'liq boshqarishingiz, darslarni tashkil qilishingiz, o'quvchilarni nazorat qilishingiz va barcha ma'lumotlarni bir joyda saqlashingiz mumkin.",
    },
    {
        question: "Platformani qanday boshlash mumkin?",
        answer: "Platformani boshlash uchun bizning veb-saytimizga kirib, ro'yxatdan o'tishingiz kerak. Keyin siz o'z o'quv markazingiz uchun yangi akkaunt yaratishingiz mumkin. Biz sizga platformani ishlatish bo'yicha to'liq qo'llanma va texnik yordam taqdim etamiz.",
    },
    {
        question: "Qaysi to'lov usullari qo'llab-quvvatlanadi?",
        answer: "Biz to'lovlarni bank orqali, naqd pul va boshqa zamonaviy to'lov usullari orqali qabul qilamiz. Har bir mijoz uchun eng qulay to'lov usulini tanlash imkoniyati mavjud.",
    },
    {
        question: "Platforma qanday xususiyatlarga ega?",
        answer: "Modme platformasi quyidagi asosiy xususiyatlarga ega: darslar jadvalini tashkil qilish, o'quvchilarni nazorat qilish, uy vazifalarini berish va baholash, to'lovlarni qabul qilish, hisobotlar tayyorlash, ota-onalar uchun alohida portal va boshqa ko'plab imkoniyatlar.",
    },
    {
        question: "Texnik yordam qanday taqdim etiladi?",
        answer: "Biz 24/7 texnik yordam xizmatini taqdim etamiz. Mijozlarimiz har qanday savol yoki muammolarni qo'llab-quvvatlash xizmatimiz orqali hal qilishlari mumkin. Shuningdek, platforma bo'yicha muntazam o'quv seminarlari ham o'tkaziladi.",
    },
    {
        question: "Platforma qanday narxda?",
        answer: "Platforma narxlari o'quv markazingiz o'lchamiga va tanlangan funksionallik paketiga qarab belgilanadi. Batafsil ma'lumot uchun narxlar bo'limiga o'ting yoki biz bilan bog'laning.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Ko'p beriladigan savollar
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Modme platformasi haqida
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? -1 : index
                                    )
                                }
                                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-lg md:text-xl font-semibold text-[#080a0a]">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{
                                        rotate: openIndex === index ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[#ff8000]"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-[#a8a8a8] text-lg leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
