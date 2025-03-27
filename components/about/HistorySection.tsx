"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const history = [
    {
        year: "2020",
        title: "Kompaniya asos solindi",
        description: "Modme platformasi yaratilish jarayoni boshlandi",
        image: "/about/history-2020.jpg",
    },
    {
        year: "2021",
        title: "Birinchi mijozlar",
        description:
            "Platforma birinchi o'quv markazlariga xizmat ko'rsatishni boshladi",
        image: "/about/history-2021.jpg",
    },
    {
        year: "2022",
        title: "Platforma kengaytirildi",
        description: "Yangi xususiyatlar va funksiyalar qo'shildi",
        image: "/about/history-2022.jpg",
    },
    {
        year: "2023",
        title: "Muvaffaqiyatli yil",
        description: "300+ o'quv markazi va 500+ filial bilan hamkorlik",
        image: "/about/history-2023.jpg",
    },
];

const HistorySection = () => {
    return (
        <section className="w-full pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Kompaniya tarixi
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Modme platformasi yaratilish va rivojlanish tarixi
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {history.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd03d]/5 to-[#ff8000]/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="relative p-8">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ffd03d] to-[#ff8000] flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">
                                            {item.year}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#080a0a]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#a8a8a8]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
