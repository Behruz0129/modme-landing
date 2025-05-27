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
    description: string;
    example: string;
    advantages: string[];
    disadvantages: string[];
};

const withdrawMethods: WithdrawMethod[] = [
    {
        id: "monthly",
        name: "Oylik (Kalendar)",
        description:
            "Guruhga qo’shilgan o’quvchini faollashtirilgan sanasidan boshlab oyni ohirigacha, nechta dars bo’lishidan qat’iy nazar, platformani o’zi kurs narxi ( yoki chegirmali narx) dan kelib chiqgan holda avtomatik hisoblab beradi. O’quvchilarning keyingi to’lovi esa har oyning 1-chi sanasida bo’ladi",
        example:
            "O’quvchi oyni qaysi sanasidan kelishidan qat’iy nazar, u oyni ohirigacha qolgan darslar uchun to’lov qiladi",
        advantages: [
            "O’quvchilarni qarzdorliklarini aniqlash va nazorat qilish ",
            "To’lovlar har oyni boshida tushgani sababli moliyani nazorat qilish va xarajatlarni oldindan hisoblash",
            "Ustozlar uchun oylik maoshni har oyni boshida kechiktirmasdan bera olish",
        ],
        disadvantages: ["Boshqa to’lov rejimlariga mos kelmasligi"],
    },
    {
        id: "daily",
        name: "Kunlik",
        description:
            "Guruhga qo’shilgan o’quvchini faollashtirilgan sanasidan boshlab, har bir dars uchun, platformani o’zi kurs narxi ( yoki chegirmali narx) dan kelib chiqgan holda avtomatik hisoblab beradi. O’quvchilar to’lovni har dars amalga oshiradi",
        example:
            "O’quvchi oyni qaysi sanasidan kelishidan qat’iy nazar, u oyni ohirigacha qolgan har bir dars uchun dars kuni to’lov qiladi",
        advantages: [
            "O'quvchilar balansidan 1 oyga emas, har dars pul yechib oladi",
            "O'quvchi guruhdan guruhga o'tish jarayonida ham hech qanday eski guruhi uchun pul qaytarish holatlari bo'lmaydi",
            "Muzlatilgan o'quvchilardan pul yechilmaydi",
        ],
        disadvantages: [
            "Barcha to’lovlar bir kunda tushmasligi, ya’ni to’lovlar har dars kuni amalga oshirilganligi sababli, barcha to’lovlar ham bir oy davomida oz-ozdan tushadi",
        ],
    },
    {
        id: "module",
        name: "Modul",
        description:
            "Ushbu rejimda har nechta darsda o'quvchilardan pul yechilishi kerakligini tanlashingiz mumkin",
        example:
            "Har 12ta darsga pul yechib olsin desangiz guruh ochilgan sanadan boshlab har 12ta dars uchun pul yechib olishni boshlaydi. O’quvchi 4-darsda faollashtiriladigan bo’lsa modulni ohirigacha qolgan 8ta dars uchun to’lovni amalga oshiradi. Platforma o’quvchi faollashtirilgan sanadan kelib chiqib modulni ohirigacha nechta dars bo’lsa avtomatik qilinishi kerak bo’lgan to’lov hisoblab beradi",
        advantages: [
            "1 oyda 12 yoki 13ta dars bo'lib qoladigan holatlar, ushbu rejimdagi guruhlarga hech qanday ta'sir qilmaydi",
            "O’zingizga mos qilib modullar ( abonementlar) yarata olasiz",
        ],
        disadvantages: [
            "Barcha to’lovlar bir kunda tushmasligi, ya’ni ba’zi-bir guruhlarni modulini oyni o’rtasiga to’g’ri kelib qolishi",
        ],
    },
    {
        id: "groupstart",
        name: "Guruh boshlanish sanasi",
        description:
            "Ushbu rejimda guruhdagi o’quvchilardan pul yechib olish sanasi guruh boshlanish sanasi deb hisoblanadi",
        example:
            "Guruh 14-sanada ochilsa, har oyning 14-sanasi o’quvchilar uchun to'lov kuni hisoblanadi. Bu rejimda ham 1 oyga o'quvchilardan kurs narxi (yoki chegirmali narx) bo'yicha to'lov olinadi",
        advantages: [
            "Agarda yangi guruhlar yetarlicha o'quvchi yig'ilishi bilan ochiladigan holatlarda, o'quvchilardan guruh boshlangan sanadan boshlab pul yechilishi natijasida, oyning qaysi qismi bo'lishidan qat'iy nazar to'liq to'lov olish",
            "O’quvchining to'lov sanasi doim bir xil (guruh boshlangan sana) va o'zgarmaydi",
        ],
        disadvantages: [
            "Barcha to’lovlar bir kunda tushmasligi, ya’ni ba’zi-bir guruhlarni boshlanish sanasi oyni har xil sanasiga to’g’ri kelib qolishi",
        ],
    },
    {
        id: "coursepayment",
        name: "Kurs uchun to'lov",
        description:
            "Bu rejimda o’quvchi butun kurs davomiyligi uchun bir martalik to'lovni amalga oshiradi",
        example:
            "6 oylik kurs uchun umumiy to'lov 6 000 000 so'm 6 oy uchun, birinchi faollashtirilgan vaqtdayoq jami 6 000 000 so'm qarzdorlikka platforma avtomatik kiritadi",
        advantages: [
            "Online kurs yurutuvchilar yoki to'lov butun kurs uchun oldindan olinadigan ta’lim biznezlari uchun",
        ],
        disadvantages: ["Boshqa to’lov rejimlariga mos kelmasligi"],
    },
    {
        id: "individual",
        name: "Individual",
        description:
            "Bu rejimda o’quvchi qachon guruhda faollashtirilsa, har oyni o'sha sanasida platforma avtomatik pul yechib oladi",
        example:
            "O’quvchi 15-sanada faollashtirilgan bo'lsa, har oyning 15-sanasi to'lov kuni hisoblanadi",
        advantages: [
            "O’quvchi kelgan sanadan boshlab har oy aynan o’sha sanada to’lov qilish imkoniyatini yaratib beradi",
        ],
        disadvantages: [
            "Barcha to’lovlar bir kunda tushmasligi, ya’ni ba’zi-bir o’quvchilar to’lovi oyni har xil sanasiga to’g’ri kelib qolishi",
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
                            Moslashuvchan va ishonchli hisob-kitob
                        </h2>
                        <p className="text-base md:text-lg text-[#a8a8a8] max-w-md lg:max-w-lg">
                            6 xil to'lov rejimi orasidan o'zingizga eng qulayini
                            tanlang. Har bir tranzaksiya shaffof va minimal
                            xatolik bilan amalga oshiriladi
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
                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                <span className="text-gray-800 font-semibold">
                                                    i
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-semibold text-gray-800">
                                                Misol:
                                            </h4>
                                        </div>
                                        <p className="text-[#080A0A] leading-relaxed">
                                            {selectedWithdrawMethod.example}
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
                                                    Afzalliklari:
                                                </h4>
                                            </div>
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

                                        <div className="space-y-4 bg-[#fcfcfc] p-6 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-[#ff8000]/10 rounded-full flex items-center justify-center">
                                                    <span className="text-[#ff8000] font-semibold">
                                                        -
                                                    </span>
                                                </div>
                                                <h4 className="text-xl font-semibold text-[#ff8000]">
                                                    Kamchiliklari:
                                                </h4>
                                            </div>
                                            <ul className="list-disc pl-6 space-y-2">
                                                {selectedWithdrawMethod.disadvantages.map(
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
