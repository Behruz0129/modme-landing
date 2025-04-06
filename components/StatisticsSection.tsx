"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const statistics = [
    {
        title: "O'quv markazlari",
        value: 200,
        suffix: "+",
        color: "from-[#ffd03d] to-[#ff8000]",
    },
    {
        title: "Filiallar",
        value: 500,
        suffix: "+",
        color: "from-[#ff8000] to-[#ffd03d]",
    },
    {
        title: "Guruhlar",
        value: 3250,
        suffix: "+",
        color: "from-[#ffd03d] to-[#ff8000]",
    },
    {
        title: "O'quvchilar",
        value: 8000000,
        suffix: "+",
        color: "from-[#ff8000] to-[#ffd03d]",
    },
];

const StatisticsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [counts, setCounts] = useState(statistics.map(() => 0));

    useEffect(() => {
        if (isInView) {
            statistics.forEach((stat, index) => {
                const duration = 2000; // 2 seconds
                const steps = 60;
                const increment = stat.value / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.value) {
                        current = stat.value;
                        clearInterval(timer);
                    }
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = Math.floor(current);
                        return newCounts;
                    });
                }, duration / steps);
            });
        }
    }, [isInView]);

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Modme platformasi foydalanuvchilari
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Raqamlarda
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Statistics Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                >
                    {statistics.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd03d]/5 to-[#ff8000]/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="relative p-4 sm:p-6 md:p-8 text-center">
                                <motion.div
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 whitespace-nowrap"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1 + 0.2,
                                    }}
                                >
                                    <span
                                        className={`bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}
                                    >
                                        {counts[index].toLocaleString("en-US", {
                                            notation: "compact",
                                            maximumFractionDigits: 1,
                                        })}
                                        <span className="text-[#ff8000]">
                                            {stat.suffix}
                                        </span>
                                    </span>
                                </motion.div>
                                <motion.h3
                                    className="text-base sm:text-lg md:text-xl font-semibold text-[#080a0a]"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1 + 0.4,
                                    }}
                                >
                                    {stat.title}
                                </motion.h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;
