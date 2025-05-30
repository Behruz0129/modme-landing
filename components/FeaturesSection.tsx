"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimation from "@/lib/animations/scroll-animation";

// 3D Card компоненти
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

        // Курсор позициясига кўра эгилиш ҳисоблаш
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
    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12 mb-14 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] max-w-md lg:max-w-lg">
                            Muammolarni unuting!{" "}
                        </h2>
                        <p className="text-base md:text-lg text-[#a8a8a8] max-w-md lg:max-w-lg">
                            Dars jadvalidan moliyagacha bo'lgan barcha
                            jarayonlarni to'liq tizimlashtiring, qo'lda
                            qilinadigan ishlarni avtomatlashtiring va nazoratni
                            o'z qo'lingizga oling
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Bento Grid Features */}
                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                    {/* Feature 1 - Tizimlashtirish - 5/12 */}
                    <ScrollAnimation
                        direction="up"
                        delay={0.2}
                        threshold={0.3}
                        className="col-span-12 md:col-span-5"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#FFF8E8] text-[#894B00] font-medium rounded-xl mb-6">
                                Tizimlashtirish
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                Barcha jarayonlarni tartibga soling
                            </h3>
                            <p className="text-[#4A5564] mb-6 text-base">
                                Jarayonlarni yagona tizimda oson boshqarishing,
                                o'lchang va tartibga soling, bu uchun esa
                                Modmeda barcha funksiyalar mavjud
                            </p>
                            <div className="mt-auto relative w-full h-[250px] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/features/guruhlar.webp"
                                    alt="O'quv jarayoni tizimi"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card3DComponent>
                    </ScrollAnimation>

                    {/* Feature 2 - Lidlar - 7/12 */}
                    <ScrollAnimation
                        direction="up"
                        delay={0.3}
                        threshold={0.3}
                        className="col-span-12 md:col-span-7"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#FFF2F2] text-[#C70036] font-medium rounded-xl mb-6">
                                Lidlar
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                O'quvchi sonini bir necha barobar oshiring
                            </h3>
                            <p className="text-[#4A5564] mb-6 text-base">
                                Qulay interfeys orqali har bir mijoz bilan
                                aloqani samarali boshqarish, ularni sinov
                                darsiga yo'naltirish, guruhlarga qo'shish va
                                birinchi to'lovga olib kelish jarayonlarini
                                to'liq nazorat qiling
                            </p>
                            <div className="mt-auto relative w-full h-[300px] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/features/lidlar.webp"
                                    alt="Lidlar boshqaruvi"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card3DComponent>
                    </ScrollAnimation>

                    {/* Feature 3 - Moliya - 7/12 */}
                    <ScrollAnimation
                        direction="up"
                        delay={0.4}
                        threshold={0.3}
                        className="col-span-12 md:col-span-7"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#F0FFF5] text-[#01662F] font-medium rounded-xl mb-6">
                                Moliya
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                Moliyani oson boshqaring{" "}
                            </h3>
                            <p className="text-[#4A5564] mb-6 text-base">
                                Barcha to’lovlar va xarajatlarni bir joyda
                                yuritish, sof foydani avtomatik aniqlash,
                                oyliklarni hisoblash, qarzdorlarni oson
                                boshqarish orqali o’quv markazingizni keyingi
                                darajaga olib chiqing!
                            </p>
                            <div className="mt-auto relative w-full h-[300px] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/features/moliya.webp"
                                    alt="Moliyaviy boshqaruv"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card3DComponent>
                    </ScrollAnimation>

                    {/* Feature 4 - Integratsiyalar - 5/12 */}
                    <ScrollAnimation
                        direction="up"
                        delay={0.5}
                        threshold={0.3}
                        className="col-span-12 md:col-span-5"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#F5F0FF] text-[#6E11B0] font-medium rounded-xl mb-6">
                                Integratsiyalar
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                Zamonaviy texnologiyalar bilan yanada qulayroq
                            </h3>
                            <p className="text-[#4A5564] mb-6 text-base">
                                Modme orqali turli foydali xizmatlar va tizimlar
                                bilan bog'lanib, ish jarayonlarini
                                avtomatlashtiring va samaradorlikni oshiring
                            </p>
                            <div className="mt-auto relative w-full h-[300px] overflow-hidden rounded-lg">
                                <Image
                                    src="/images/features/integratsiyalar.webp"
                                    alt="Texnologik integratsiyalar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card3DComponent>
                    </ScrollAnimation>

                    {/* Feature 5 - Filiallar - 5/12 */}
                    <ScrollAnimation
                        direction="up"
                        delay={0.6}
                        threshold={0.3}
                        className="col-span-12 md:col-span-5"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#F0F6FF] text-[#193CB8] font-medium rounded-xl mb-6">
                                Masofaviy boshqaruv
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                Ta’lim biznesingizni istalgan joydan boshqaring
                            </h3>
                            <p className="text-[#4A5564] text-base">
                                Platforma yordamida ta’lim biznesingizdagi
                                ko’rsatkichlarni masofadan turib boshqaring, bu
                                Sizga ko’proq vaqtingiz biznesingizni yanada
                                rivojlantirishga yo’naltirishingizga yana bir
                                imkoniyat!
                            </p>
                        </Card3DComponent>
                    </ScrollAnimation>

                    {/* Feature 6 - Mobil Ilovalar - 7/12 */}
                    <ScrollAnimation
                        direction="up"
                        delay={0.7}
                        threshold={0.3}
                        className="col-span-12 md:col-span-7"
                    >
                        <Card3DComponent>
                            <div className="inline-block w-fit px-4 py-2 bg-[#FFF2F2] text-[#C70036] font-medium rounded-xl mb-6">
                                Mobil Ilovalar
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                Talaba va ustozlar uchun zamonaviy ilovalar
                            </h3>
                            <p className="text-[#4A5564] text-base">
                                "Modme Students App" va "Modme Teachers App"
                                orqali ustoz va talabalarga dars jadvali, to'lov
                                holati, dars materiallari va boshqa muhim
                                ma'lumotlarga oson kirish imkoniyatini taqdim
                                eting. Bu bilan aloqa samaradorligini oshiring
                                va foydalanuvchi tajribasini yaxshilang
                            </p>
                        </Card3DComponent>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
