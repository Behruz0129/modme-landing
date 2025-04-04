"use client";

import { motion } from "framer-motion";
import {
    Check,
    Sparkles,
    Trophy,
    Star,
    Zap,
    Percent,
    Gamepad2,
    Coins,
    GamepadIcon,
} from "lucide-react";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";

const PricingPage = () => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(2);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [glitchIcon, setGlitchIcon] = useState<React.ReactNode | null>(null);

    const icons = [
        <Gamepad2 className="w-6 h-6 text-[#ff8000]" />,
        <Coins className="w-6 h-6 text-[#ffd03d]" />,
        <GamepadIcon className="w-6 h-6 text-[#ff8000]" />,
    ];

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        setGlitchIcon(icons[Math.floor(Math.random() * icons.length)]);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setGlitchIcon(null);
    };

    const letters = "Gamifikatsiya".split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 0,
            useGrouping: true,
            minimumFractionDigits: 0,
        })
            .format(price)
            .replace(/,/g, " ");
    };

    const plans = [
        {
            name: "Start",
            description: "0-100 ta o'quvchi",
            prices: {
                "3": 1500000,
                "6": 2700000,
                "9": 4050000,
                "12": 5400000,
            } as const,
            originalPrices: {
                "3": 1500000,
                "6": 3000000,
                "9": 4500000,
                "12": 6000000,
            } as const,
        },
        {
            name: "Basic",
            description: "100-300 ta o'quvchi",
            prices: {
                "3": 3120000,
                "6": 5616000,
                "9": 8424000,
                "12": 11232000,
            } as const,
            originalPrices: {
                "3": 3120000,
                "6": 6240000,
                "9": 9360000,
                "12": 12480000,
            } as const,
        },
        {
            name: "Pro",
            description: "300-1000 ta o'quvchi",
            prices: {
                "3": 4680000,
                "6": 8424000,
                "9": 12636000,
                "12": 16848000,
            } as const,
            originalPrices: {
                "3": 4680000,
                "6": 9360000,
                "9": 14040000,
                "12": 18720000,
            } as const,
            isPopular: true,
        },
        {
            name: "Premium",
            description: "1000+ o'quvchi",
            prices: {
                "3": 9000000,
                "6": 16200000,
                "9": 24300000,
                "12": 32400000,
            } as const,
            originalPrices: {
                "3": 9000000,
                "6": 18000000,
                "9": 27000000,
                "12": 36000000,
            } as const,
            isPremium: true,
        },
    ];

    const calculateDiscount = (price: number, originalPrice: number) => {
        return Math.round(((originalPrice - price) / originalPrice) * 100);
    };

    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="max-w-[1200px] mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#080a0a]">
                            Narxlar
                        </h1>
                        <p className="text-lg md:text-xl text-[#a8a8a8] max-w-2xl mx-auto">
                            O'z o'quv markazingiz uchun eng muvofiq tarifni
                            tanlang. Har bir tarif o'z xususiyatlariga ega.
                        </p>
                    </motion.div>

                    {/* Pricing Table - Desktop */}
                    <motion.div
                        className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <motion.tr
                                        className="bg-[#f8f8f8]"
                                        variants={itemVariants}
                                    >
                                        <th className="py-6 px-8 text-left text-lg font-bold text-[#080a0a]">
                                            Tarif
                                        </th>
                                        {plans.map((plan) => (
                                            <th
                                                key={plan.name}
                                                className="py-6 px-8 text-center text-lg font-bold text-[#080a0a]"
                                            >
                                                <div className="flex flex-col items-center gap-1">
                                                    <span>{plan.name}</span>
                                                    <span className="text-sm font-normal text-[#a8a8a8]">
                                                        {plan.description}
                                                    </span>
                                                </div>
                                            </th>
                                        ))}
                                    </motion.tr>
                                </thead>
                                <tbody>
                                    {["3", "6", "9", "12"].map((period) => (
                                        <tr
                                            key={period}
                                            className={`border-t border-[#f0f0f0] ${
                                                period === "9"
                                                    ? "bg-gradient-to-r from-[#ffd03d]/5 to-[#ff8000]/5"
                                                    : ""
                                            }`}
                                        >
                                            <td className="py-6 px-8">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-xl font-bold text-[#080a0a]">
                                                        {period} oy
                                                    </h3>
                                                    {period === "9" && (
                                                        <Zap className="w-5 h-5 text-[#ff8000]" />
                                                    )}
                                                </div>
                                            </td>
                                            {plans.map((plan) => (
                                                <td
                                                    key={plan.name}
                                                    className={`py-6 px-8 text-center transition-all duration-300 ${
                                                        period === "9"
                                                            ? "text-[#ff8000] font-bold"
                                                            : ""
                                                    }`}
                                                >
                                                    <div className="flex flex-col items-center justify-center gap-1">
                                                        <div className="flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105">
                                                            <span
                                                                className={`text-lg font-bold ${
                                                                    period ===
                                                                    "9"
                                                                        ? "text-[#ff8000]"
                                                                        : "text-[#080a0a]"
                                                                }`}
                                                            >
                                                                {formatPrice(
                                                                    plan.prices[
                                                                        period as keyof typeof plan.prices
                                                                    ]
                                                                )}
                                                            </span>
                                                            {period === "9" && (
                                                                <Trophy className="w-4 h-4 text-[#ff8000]" />
                                                            )}
                                                            {period ===
                                                                "12" && (
                                                                <Star className="w-4 h-4 text-[#ff8000]" />
                                                            )}
                                                        </div>
                                                        {period !== "3" && (
                                                            <div className="flex items-center gap-1 text-sm text-[#a8a8a8]">
                                                                <span className="line-through">
                                                                    {formatPrice(
                                                                        plan
                                                                            .originalPrices[
                                                                            period as keyof typeof plan.originalPrices
                                                                        ]
                                                                    )}
                                                                </span>
                                                                <span className="text-[#ff8000] flex items-center gap-0.5">
                                                                    <Percent className="w-3 h-3" />
                                                                    {calculateDiscount(
                                                                        plan
                                                                            .prices[
                                                                            period as keyof typeof plan.prices
                                                                        ],
                                                                        plan
                                                                            .originalPrices[
                                                                            period as keyof typeof plan.originalPrices
                                                                        ]
                                                                    )}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Pricing Cards - Mobile */}
                    <motion.div
                        className="lg:hidden"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Switch Buttons */}
                        <motion.div
                            className="flex justify-center gap-4 mb-8"
                            variants={itemVariants}
                        >
                            {["3 oy", "6 oy", "9 oy", "12 oy"].map(
                                (period, index) => (
                                    <button
                                        key={period}
                                        onClick={() => {
                                            swiper?.slideTo(index);
                                            setActiveIndex(index);
                                        }}
                                        className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                            activeIndex === index
                                                ? "bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-white font-bold"
                                                : "bg-white text-[#a8a8a8] hover:bg-[#f8f8f8]"
                                        }`}
                                    >
                                        {period}
                                    </button>
                                )
                            )}
                        </motion.div>

                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            onSwiper={setSwiper}
                            onSlideChange={(swiper) =>
                                setActiveIndex(swiper.activeIndex)
                            }
                            initialSlide={2}
                            className="w-full"
                        >
                            {["3", "6", "9", "12"].map((period) => (
                                <SwiperSlide key={period}>
                                    <div
                                        className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl ${
                                            period === "9"
                                                ? "bg-gradient-to-r from-[#ffd03d]/5 to-[#ff8000]/5"
                                                : ""
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 mb-6">
                                            <h3 className="text-xl font-bold text-[#080a0a]">
                                                {period} oy
                                            </h3>
                                            {period === "9" && (
                                                <Zap className="w-5 h-5 text-[#ff8000]" />
                                            )}
                                        </div>
                                        <div className="space-y-4">
                                            {plans.map((plan) => (
                                                <div
                                                    key={plan.name}
                                                    className="border-b border-[#f0f0f0] last:border-0 pb-4 last:pb-0"
                                                >
                                                    <div className="flex items-center justify-between mb-2 transition-transform duration-300 hover:scale-[1.02]">
                                                        <div>
                                                            <h4 className="font-bold text-[#080a0a]">
                                                                {plan.name}
                                                            </h4>
                                                            <p className="text-sm text-[#a8a8a8]">
                                                                {
                                                                    plan.description
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="flex items-center gap-2">
                                                                <span
                                                                    className={`text-lg font-bold ${
                                                                        period ===
                                                                        "9"
                                                                            ? "text-[#ff8000]"
                                                                            : "text-[#080a0a]"
                                                                    }`}
                                                                >
                                                                    {formatPrice(
                                                                        plan
                                                                            .prices[
                                                                            period as keyof typeof plan.prices
                                                                        ]
                                                                    )}
                                                                </span>
                                                                {period ===
                                                                    "9" && (
                                                                    <Trophy className="w-4 h-4 text-[#ff8000]" />
                                                                )}
                                                                {period ===
                                                                    "12" && (
                                                                    <Star className="w-4 h-4 text-[#ff8000]" />
                                                                )}
                                                            </div>
                                                            {period !== "3" && (
                                                                <div className="flex items-center gap-1 text-sm text-[#a8a8a8]">
                                                                    <span className="line-through">
                                                                        {formatPrice(
                                                                            plan
                                                                                .originalPrices[
                                                                                period as keyof typeof plan.originalPrices
                                                                            ]
                                                                        )}
                                                                    </span>
                                                                    <span className="text-[#ff8000] flex items-center gap-0.5">
                                                                        <Percent className="w-3 h-3" />
                                                                        {calculateDiscount(
                                                                            plan
                                                                                .prices[
                                                                                period as keyof typeof plan.prices
                                                                            ],
                                                                            plan
                                                                                .originalPrices[
                                                                                period as keyof typeof plan.originalPrices
                                                                            ]
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>

                    {/* Bonus Info */}
                    <motion.div
                        className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[#a8a8a8]"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                            variants={itemVariants}
                        >
                            <Trophy className="w-5 h-5 text-[#ff8000]" />
                            <span>9 oylik tarifda +1 oy bonus</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                            variants={itemVariants}
                        >
                            <Star className="w-5 h-5 text-[#ff8000]" />
                            <span>12 oylik tarifda +2 oy bonus</span>
                        </motion.div>
                    </motion.div>

                    {/* Gamification CTA Section */}
                    <motion.div
                        className="mt-32 relative overflow-hidden"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#ffd03d]/10 to-[#ff8000]/10 rounded-3xl transition-all duration-300 hover:from-[#ffd03d]/20 hover:to-[#ff8000]/20"
                            variants={itemVariants}
                        />
                        <div className="relative p-12 rounded-3xl border border-[#ff8000]/20 transition-all duration-300 hover:border-[#ff8000]/30">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-center md:text-left">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Sparkles className="w-6 h-6 text-[#ff8000]" />
                                        <h2 className="text-2xl font-bold text-[#080a0a]">
                                            Gamifikatsiya moduli
                                        </h2>
                                    </div>
                                    <p className="text-[#a8a8a8] mb-6 max-w-xl">
                                        O'quvchilarning motivatsiyasini oshirish
                                        uchun maxsus modul. Har oy 500 000 so'm.
                                    </p>
                                    <Link
                                        href="/gamification"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-white font-bold hover:opacity-90 transition-all duration-300"
                                    >
                                        Batafsil ma'lumot
                                        <Sparkles className="w-5 h-5" />
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#ffd03d] to-[#ff8000] animate-pulse" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-white">
                                            500 000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default PricingPage;
