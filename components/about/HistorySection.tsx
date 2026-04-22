"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const IMAGES = [
    "/images/about/history-1.jpg",
    "/images/about/history-1.2.jpg",
    "/images/about/history-2.jpg",
    "/images/about/history-3.jpg",
    "/images/about/history-4.jpg",
    "/images/about/history-5.jpg",
];

type HistoryItem = {
    year: string;
    title: string;
    description: string;
};

const HistorySection = () => {
    const t = useTranslations("about.history");
    const items = t.raw("items") as HistoryItem[];
    const history = items.map((it, i) => ({ ...it, image: IMAGES[i] }));

    return (
        <section className="w-full pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            {t("heading")}
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            {t("subtitle")}
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#ffd03d] to-[#ff8000] hidden md:block" />

                    <div className="space-y-20 md:space-y-32">
                        {history.map((item, index) => (
                            <ScrollAnimation
                                key={`${index}-${item.year}`}
                                direction={index % 2 === 0 ? "left" : "right"}
                                delay={0.1 * index}
                                threshold={0.3}
                            >
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#ffd03d] to-[#ff8000] flex items-center justify-center text-white font-bold text-xl z-10">
                                        {item.year}
                                    </div>

                                    <div
                                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                                            index % 2 === 0
                                                ? "md:flex-row-reverse"
                                                : ""
                                        }`}
                                    >
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

                                        <div className="w-full md:w-1/2">
                                            <h3 className="text-2xl font-bold text-[#080a0a] mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#4A5564] mb-6 whitespace-pre-line">
                                                {item.description}
                                            </p>
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
