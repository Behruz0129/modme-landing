"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type WithdrawMethod = {
    id: string;
    name: string;
    description: string[];
    advantages: string[];
};

const withdrawMethods: WithdrawMethod[] = [
    {
        id: "monthly",
        name: "Oylik (Kalendar)",
        description: [
            "Ushbu rejimda guruhga qo'shilgan aktiv o'quvchilardan har oyning 1-sanasida guruhdagi kurs narxi (yoki chegirmali narxi) bo'yicha oldindan pul yechib olinadi.",
            "1 oyda davomida nechta dars bo'lishidan qat'iy nazar, platforma 1-sanadan oyning oxirigi sanasigacha kurs narxi bo'yicha to'liq pul yechib oladi.",
        ],
        advantages: [
            "Qarzdorliklar bilan shug'ullanish va qarzdorlik foizini tushirish uchun ancha qulay.",
            "Guruhdagi o'quvchi qancha vaqtdan buyon qarzdorlikda ekanligini aniqlash.",
            "O'qituvchilarga ham bir xil vaqtda maosh hisoblab berish uchun qulay.",
            "O'quvchilarda ham oyda to'lov qilish odatini shakllantirish va to'lov sanasini eslab qolish osonligi.",
        ],
    },
    {
        id: "daily",
        name: "Kunlik",
        description: [
            "Ushbu rejim Kalendar to'lov rejimiga o'xshash va o'quvchilardan har darsda 1ta dars narxi bo'yicha avtomatik pul yechib boradi.",
            "Kurs narxi 1-sanadan boshlab, oy oxirigacha bo'lgan dars soniga bo'linadi va har darsda o'quvchilardan pul yechiladi. Misol uchun: Kurs narxi: 299 000 so'm 1 oyda 13ta dars bor 299 000 / 13 = 23 000 so'mdan kunlik yechib boradi.",
        ],
        advantages: [
            "O'quvchilar balansidan 1 oyga emas, har dars pul yechib oladi.",
            "O'quvchi guruhdan guruhga o'tish jarayonida ham hech qanday eski guruhi uchun pul qaytarish holatlari bo'lmaydi.",
            "Muzlatilgan o'quvchilardan pul yechilmaydi.",
        ],
    },
    {
        id: "module",
        name: "Modul",
        description: [
            "Ushbu rejimda har nechta darsda o'quvchilardan pul yechilishi kerakligini tanlashingiz mumkin.",
            "Kurs yaratish jarayonida 1ta moduldagi darslar sonini 4, 8, 12, 20, 24, 28 darsga pul yechib oladigan qilib belgilab qo'yishingiz mumkin.",
            "Agarda guruh 12ta darslik modul asosida yaratilgan va 13-sanada ochilgan bo'lsa, Shu sanadan boshlab 12ta darsni hisoblab, aktiv talabalardan narxi narxni yechib oladi. Va keyingi to'lov sanasi doimiy o'zgarib turadi.",
        ],
        advantages: [
            "O'quv markazingizda haftada 2 martta bo'ladigan guruhlar uchun, 8ta dars uchun, 3 martta bo'ladigan guruhlar uchun 12ta dars, 4 martta bo'ladigan guruhlar uchun 20ta dars, haftada 6 kun bo'ladigan guruhlar uchun esa, 24ta darsni belgilash orqali har bir guruhdan darslar soniga qarab pul yechib olish imkoniyati.",
            "1 oyda 12 yoki 13ta dars bo'lib qoladigan holatlar, ushbu rejimdagi guruhlarga hech qanday negativ ta'sir qilmaydi.",
        ],
    },
    {
        id: "groupstart",
        name: "Guruh boshlanish sanasi",
        description: [
            "Ushbu rejimda Guruh boshlanish sanasi Guruhdagi O'quvchilardan pul yechib olish sanasi hisoblanadi. Ya'ni Guruh 14-sanada ochilsa, har oyning 14-sanasi talabalar uchun to'lov kuni hisoblanadi. Bu rejimda ham 1 oyga o'quvchilardan kurs narxi bo'yicha to'lov olinadi.",
        ],
        advantages: [
            "Agarda yangi guruhlar yetarlicha o'quvchi yig'ilishi bilan ochiladigan holatlarda, o'quvchilardan guruh boshlangan sanadan boshlab pul yechilishi natijasida, oyning qaysi qismi bo'lishidan qat'iy nazar to'liq to'lov olish.",
            "Talabaning to'lov sanasi doim bir xil (guruh boshlangan sana) va o'zgarmaydi.",
        ],
    },
    {
        id: "coursepayment",
        name: "Kurs uchun to'lov",
        description: [
            "Bu rejimda talaba butun kurs davomiyligi uchun bir martalik to'lovni amalga oshiradi.",
        ],
        advantages: [
            "Misol 6 oylik dasturlash kursi uchun oylik to'lov 1 000 000 so'm, jami 6 000 000 so'm bittada qarzdorlikka kiritadi. Birinchi faollashtirilgan vaqtdayoq",
            "Asosan online kurs yurutuvchilar, to'lov butun kurs uchun oldindan olinadigan bootcamplar uchun qulay rejim",
        ],
    },
    {
        id: "individual",
        name: "Individual",
        description: [
            "Bu rejimda talaba qachon faollashtirilsa, har oyni o'sha sanasida pul yechib olinadi. Ya'ni talaba 15-sanada faollashtirilgan bo'lsa, har oyning 15-sanasi to'lov kuni hisoblanadi.",
            "Har bir talabaga alohida yondashuv talab qiladi.",
        ],
        advantages: [
            "Talaba qachon qo'shilgan bo'lsa, shu sanadan boshlab har oyning o'sha kunida to'lov olinadi. Bu to'lovni hammadan to'liq olishni, to'lov bo'lib olinmasligini ta'minlaydi.",
        ],
    },
];

const WithdrawMethodSection = () => {
    const [selectedMethod, setSelectedMethod] = useState<string>("monthly");

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
                                            <ul className="list-disc pl-6 space-y-2">
                                                {selectedWithdrawMethod.description.map(
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

                                    <div className="space-y-4 bg-[#fcfcfc] p-6 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#01662F]/10 rounded-full flex items-center justify-center">
                                                <span className="text-[#01662F] font-semibold">
                                                    !
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-semibold text-[#01662F]">
                                                Avzalliklari:
                                            </h4>
                                        </div>
                                        <div className="prose prose-lg max-w-none">
                                            <ul className="list-disc pl-6 space-y-2">
                                                {selectedWithdrawMethod.advantages.map(
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
