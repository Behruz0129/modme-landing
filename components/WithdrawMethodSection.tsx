"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/lib/animations/scroll-animation";

type WithdrawMethod = {
    id: string;
    name: string;
    description: string;
    example: string;
    image: string;
};

const withdrawMethods: WithdrawMethod[] = [
    {
        id: "monthly",
        name: "Oylik (Kalendar)",
        description:
            "Bu rejimda talaba har oyning 1-sanasidan oxirigacha bo'lgan barcha darslar uchun oldindan to'lov qiladi. Agar talaba o'qishga oyning o'rtasida qo'shilsa, faqat qolgan darslar uchun to'lov hisoblanadi.",
        example:
            "Kurs narxi 1 000 000 so'm va 1 oyda 14 dars bo'lsa, har bir dars 71 429 so'mga teng. Talaba 15-kuni qo'shilsa va 7 ta dars qoldi, u faqat 500 000 so'm to'laydi (1 mln / 14 * 7) = 500 ming.",
        image: "/images/withdraw-method/kalendar.png",
    },
    {
        id: "daily",
        name: "Kunlik",
        description:
            "Bu rejimda talaba faqat qatnashgan darslar uchun to'lov qiladi. Har bir dars uchun to'lov kurs narxining umumiy darslar soniga bo'lingan qiymatidan hisoblanadi.",
        example:
            "Agar kurs narxi 1 000 000 so'm bo'lsa va oyda 20 ta dars rejalashtirilgan bo'lsa, har bir dars narxi 50 000 so'm bo'ladi. Talaba qatnashgan darslar soni uchun to'lovni amalga oshiradi.",
        image: "/images/withdraw-method/kalendar.png",
    },
    {
        id: "module",
        name: "Modul",
        description:
            "Bu rejimda talaba butun bir modul uchun to'lovni oldindan amalga oshiradi. Modullar kursning alohida bo'limlarini o'z ichiga oladi va odatda bir necha darslardan iborat bo'ladi.",
        example:
            "JavaScript kursining 'DOM manipulatsiyasi' moduli 8 ta darsdan iborat bo'lsa, talaba shu 8 ta dars uchun oldindan to'lov qiladi. Agar modul narxi 800 000 so'm bo'lsa, talaba barcha 8 ta dars uchun shu summani to'laydi.",
        image: "/images/withdraw-method/kalendar.png",
    },
    {
        id: "groupstart",
        name: "Guruh boshlanish sanasi",
        description:
            "Bu rejimda to'lov hisoblash guruh boshlanish sanasiga bog'liq bo'ladi. Talaba guruhga birinchi darsdan yoki keyinroq qo'shilishidan qat'i nazar, to'lov o'quv markazining ichki hisobiga muvofiq hisoblanadi.",
        example:
            "Guruh 5-fevralda boshlangan va talaba 20-fevralda qo'shilgan bo'lsa, to'lov kursning boshidan hisoblangan darslar soniga muvofiq belgilanadi, qolgan darslar uchun to'lovlar keyingi oyga o'tkaziladi.",
        image: "/images/withdraw-method/kalendar.png",
    },
    {
        id: "coursepayment",
        name: "Kurs uchun to'lov",
        description:
            "Bu rejimda talaba butun kurs davomiyligi uchun bir martalik to'lovni amalga oshiradi. Odatda bu rejimda chegirmalar taqdim etiladi va to'liq to'lov kursni o'zlashtirish kafolatlanadi.",
        example:
            "6 oylik dasturlash kursi uchun oylik to'lov 1 000 000 so'm, jami 6 000 000 so'm bo'lsa, bir yo'la to'lov qilgan talabaga 15% chegirma bilan 5 100 000 so'mga kurs taqdim etiladi.",
        image: "/images/withdraw-method/kalendar.png",
    },
    {
        id: "individual",
        name: "Individual",
        description:
            "Bu rejimda to'lovlar talabaning individual ehtiyojlari va o'quv markazining o'ziga xos shartlariga muvofiq belgilanadi. Bu o'zaro kelishuv asosida o'rnatilgan maxsus to'lov rejimi.",
        example:
            "Talaba maxsus dastur bo'yicha o'qiyotgan bo'lsa yoki alohida talablarga ega bo'lsa, to'lov rejimi individual tartibda o'rnatiladi. Masalan, 2 ta fan uchun haftasiga 3 kun, har bir dars 1.5 soatdan o'qitish uchun oyiga 1 500 000 so'm.",
        image: "/images/withdraw-method/kalendar.png",
    },
];

const WithdrawMethodSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<string>("monthly");

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const selectedWithdrawMethod =
        withdrawMethods.find((method) => method.id === selectedMethod) ||
        withdrawMethods[0];

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12 mb-14 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] max-w-md lg:max-w-lg">
                            Moslashuvchan va ishonchli hisob-kitob.
                        </h2>
                        <p className="text-base md:text-lg text-[#a8a8a8] max-w-md lg:max-w-lg">
                            6 xil to'lov rejimi orasidan o'zingizga eng qulayini
                            tanlang. Har bir tranzaksiya shaffof va minimal
                            xatolik bilan amalga oshiriladi.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Withdraw Method Selectors */}
                <ScrollAnimation direction="up" delay={0.2} threshold={0.3}>
                    <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14 justify-center">
                        {withdrawMethods.map((method) => (
                            <button
                                key={method.id}
                                onClick={() => setSelectedMethod(method.id)}
                                className={`py-3 px-6 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                                    selectedMethod === method.id
                                        ? "bg-[#080A0A] text-white border-[#080A0A]"
                                        : "bg-white text-[#080A0A] border-[#080A0A] hover:bg-gray-50"
                                } focus:outline-none focus:ring-2 focus:ring-[#080A0A] focus:ring-opacity-50`}
                            >
                                {method.name}
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Content Display */}
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
                                                    {selectedWithdrawMethod.name.charAt(
                                                        0
                                                    )}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#080A0A]">
                                                {selectedWithdrawMethod.name}
                                            </h3>
                                        </div>
                                        <div className="prose prose-lg max-w-none">
                                            <p className="text-[#080A0A] leading-relaxed">
                                                {
                                                    selectedWithdrawMethod.description
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 bg-[#fcfcfc] p-6 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#ff8000]/10 rounded-full flex items-center justify-center">
                                                <span className="text-[#ff8000] font-semibold">
                                                    !
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-semibold text-[#080A0A]">
                                                Misol:
                                            </h4>
                                        </div>
                                        <div className="prose prose-lg max-w-none">
                                            <p className="text-[#080A0A] leading-relaxed">
                                                {selectedWithdrawMethod.example}
                                            </p>
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
