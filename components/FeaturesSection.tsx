"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const Card3DComponent = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [scale, setScale] = useState(1);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * 5;
        const rotateXValue = ((centerY - e.clientY) / (rect.height / 2)) * 5;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
        setScale(1.02);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setScale(1);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`bg-white rounded-2xl shadow-lg shadow-black/10 p-6 md:p-8 flex flex-col h-full ${className} hover:shadow-xl transition-all duration-300 cursor-drag`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                transition: "transform 0.2s ease-out",
            }}
        >
            {children}
        </motion.div>
    );
};

const FeaturesSection = () => {
    const t = useTranslations("features");

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12 mb-14 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] max-w-md lg:max-w-lg">
                            {t("heading")}
                        </h2>
                        <p className="text-base md:text-lg text-[#a8a8a8] max-w-md lg:max-w-lg">
                            {t("description")}
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                    <ScrollAnimation
                        direction="up"
                        delay={0.2}
                        threshold={0.3}
                        className="col-span-12 md:col-span-5"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#FFF8E8] text-[#894B00] font-medium rounded-xl mb-6">
                                {t("items.systematize.tag")}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {t("items.systematize.title")}
                            </h3>
                            <p className="text-[#4A5564] mb-6 text-base">
                                {t("items.systematize.description")}
                            </p>
                            <div className="mt-auto relative w-full h-[250px] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/features/guruhlar.webp"
                                    alt={t("items.systematize.alt")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card3DComponent>
                    </ScrollAnimation>

                    <ScrollAnimation
                        direction="up"
                        delay={0.3}
                        threshold={0.3}
                        className="col-span-12 md:col-span-7"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#FFF2F2] text-[#C70036] font-medium rounded-xl mb-6">
                                {t("items.leads.tag")}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {t("items.leads.title")}
                            </h3>
                            <p className="text-[#4A5564] mb-6 text-base">
                                {t("items.leads.description")}
                            </p>
                            <div className="mt-auto relative w-full h-[300px] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/features/lidlar.webp"
                                    alt={t("items.leads.alt")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card3DComponent>
                    </ScrollAnimation>

                    <ScrollAnimation
                        direction="up"
                        delay={0.4}
                        threshold={0.3}
                        className="col-span-12 md:col-span-7"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#FFF5E6] text-[#B35A00] font-medium rounded-xl mb-6">
                                {t("items.grading.tag")}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {t("items.grading.title")}
                            </h3>
                            <p className="text-[#4A5564] text-base">
                                {t("items.grading.description")}
                            </p>
                        </Card3DComponent>
                    </ScrollAnimation>

                    <ScrollAnimation
                        direction="up"
                        delay={0.5}
                        threshold={0.3}
                        className="col-span-12 md:col-span-5"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#E8F5FF] text-[#0066CC] font-medium rounded-xl mb-6">
                                {t("items.reminders.tag")}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {t("items.reminders.title")}
                            </h3>
                            <p className="text-[#4A5564] text-base">
                                {t("items.reminders.description")}
                            </p>
                        </Card3DComponent>
                    </ScrollAnimation>

                    <ScrollAnimation
                        direction="up"
                        delay={0.6}
                        threshold={0.3}
                        className="col-span-12 md:col-span-5"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#F5F0FF] text-[#6E11B0] font-medium rounded-xl mb-6">
                                {t("items.integrations.tag")}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {t("items.integrations.title")}
                            </h3>
                            <p className="text-[#4A5564] mb-6 text-base">
                                {t("items.integrations.description")}
                            </p>
                            <div className="mt-auto relative w-full h-[300px] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/features/integratsiyalar.webp"
                                    alt={t("items.integrations.alt")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card3DComponent>
                    </ScrollAnimation>

                    <ScrollAnimation
                        direction="up"
                        delay={0.7}
                        threshold={0.3}
                        className="col-span-12 md:col-span-7"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#F0FFF5] text-[#01662F] font-medium rounded-xl mb-6">
                                {t("items.finance.tag")}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {t("items.finance.title")}
                            </h3>
                            <p className="text-[#4A5564] mb-6 text-base">
                                {t("items.finance.description")}
                            </p>
                            <div className="mt-auto relative w-full h-[300px] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/features/moliya.webp"
                                    alt={t("items.finance.alt")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card3DComponent>
                    </ScrollAnimation>

                    <ScrollAnimation
                        direction="up"
                        delay={0.8}
                        threshold={0.3}
                        className="col-span-12 md:col-span-7"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#F0F6FF] text-[#193CB8] font-medium rounded-xl mb-6">
                                {t("items.remote.tag")}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {t("items.remote.title")}
                            </h3>
                            <p className="text-[#4A5564] text-base">
                                {t("items.remote.description")}
                            </p>
                        </Card3DComponent>
                    </ScrollAnimation>

                    <ScrollAnimation
                        direction="up"
                        delay={0.9}
                        threshold={0.3}
                        className="col-span-12 md:col-span-5"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#FFF2F2] text-[#C70036] font-medium rounded-xl mb-6">
                                {t("items.mobile.tag")}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {t("items.mobile.title")}
                            </h3>
                            <p className="text-[#4A5564] text-base">
                                {t("items.mobile.description")}
                            </p>
                        </Card3DComponent>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
