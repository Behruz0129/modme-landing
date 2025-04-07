"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const history = [
    {
        year: "2018",
        title: "Tashkil etilish",
        description:
            "O'quv markazlari uchun maxsus tizim yaratish g'oyasi paydo bo'ldi. Dastlabki loyiha ishlari boshlandi.",
        image: "/images/about/history-1.jpg",
    },
    {
        year: "2019",
        title: "Birinchi versiya",
        description:
            "Birinchi versiya ishga tushirildi. 10 ta o'quv markazi tizimdan foydalana boshladi.",
        image: "/images/about/history-2.jpg",
    },
    {
        year: "2020",
        title: "Pandemiya davri",
        description:
            "Pandemiya davrida tizim tez rivojlandi. 100 dan ortiq o'quv markazi tizimga qo'shildi.",
        image: "/images/about/history-3.jpg",
    },
    {
        year: "2021",
        title: "Yangi funksiyalar",
        description:
            "Mobil ilova, onlayn to'lov, SMS-xabarnoma kabi yangi funksiyalar qo'shildi.",
        image: "/images/about/history-4.jpg",
    },
    {
        year: "2022",
        title: "Xalqaro miqyos",
        description:
            "Tizim O'zbekistondan tashqarida ham ishlatila boshladi. Birinchi xorijiy mijozlar.",
        image: "/images/about/history-5.jpg",
    },
    {
        year: "2023",
        title: "Yangi bosqich",
        description:
            "AI texnologiyalari, gamifikatsiya va boshqa innovatsion funksiyalar qo'shildi.",
        image: "/images/about/history-6.jpg",
    },
];

const HistorySection = () => {
    return (
        <section className="w-full pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Bizning tarix
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Bizning kompaniyamizning rivojlanish bosqichlari
                        </p>
                    </div>
                </ScrollAnimation>

                {/* History Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#ffd03d] to-[#ff8000] hidden md:block" />

                    {/* Timeline Items */}
                    <div className="space-y-20 md:space-y-32">
                        {history.map((item, index) => (
                            <ScrollAnimation
                                key={item.year}
                                direction={index % 2 === 0 ? "left" : "right"}
                                delay={0.1 * index}
                                threshold={0.3}
                            >
                                <div className="relative">
                                    {/* Year Circle */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#ffd03d] to-[#ff8000] flex items-center justify-center text-white font-bold text-xl z-10">
                                        {item.year}
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                                            index % 2 === 0
                                                ? "md:flex-row-reverse"
                                                : ""
                                        }`}
                                    >
                                        {/* Image */}
                                        <div className="w-full md:w-1/2">
                                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="w-full md:w-1/2">
                                            <h3 className="text-2xl font-bold text-[#080a0a] mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#4A5564] mb-6">
                                                {item.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-[#01662F]">
                                                <Check className="w-5 h-5" />
                                                <span className="font-medium">
                                                    Muvaffaqiyatli yakunlandi
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
