"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, getTransition } from "@/lib/animations";
import { sectionStyles } from "@/lib/styles";
import { clientLogos } from "@/lib/data/clients";

const LogoRow = ({
    logos,
    direction = "left",
}: {
    logos: (typeof clientLogos)[0];
    direction?: "left" | "right";
}) => {
    const initialX = direction === "left" ? "0%" : "100%";
    const animateX = direction === "left" ? "-100%" : "0%";
    const duplicateInitialX = direction === "left" ? "100%" : "0%";
    const duplicateAnimateX = direction === "left" ? "0%" : "-100%";

    return (
        <div className="relative w-full overflow-hidden h-[100px] mb-6">
            <div className="flex w-full relative">
                <motion.div
                    className="flex items-center gap-16 md:gap-20 lg:gap-24 absolute"
                    animate={{ x: [initialX, animateX] }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        },
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={`logo-${index}`}
                            className="flex items-center justify-center"
                            style={{
                                height: "75px",
                                width: `${logo.width}px`,
                                ...(index === 0 ? { marginLeft: "64px" } : {}),
                            }}
                        >
                            <Image
                                src={logo.path}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className="max-h-[75px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex items-center gap-16 md:gap-20 lg:gap-24 absolute"
                    animate={{ x: [duplicateInitialX, duplicateAnimateX] }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        },
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={`logo-dup-${index}`}
                            className="flex items-center justify-center"
                            style={{
                                height: "75px",
                                width: `${logo.width}px`,
                                ...(index === 0 ? { marginLeft: "64px" } : {}),
                            }}
                        >
                            <Image
                                src={logo.path}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className="max-h-[75px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const ClientsSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden relative bg-[#fcfcfc]">
            <div
                className={`${sectionStyles.container} mb-12 md:mb-16 text-center`}
            >
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate={isLoaded ? "animate" : "initial"}
                    transition={getTransition(0.1)}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
                        O’quv markazlarining ishonchli hamkori
                    </h2>
                    <p className="text-base md:text-lg text-[#a8a8a8]">
                        Ta’lim markazlari bilan yillar davomida birga
                        o’smoqdamiz
                    </p>
                </motion.div>
            </div>

            <div className={`${sectionStyles.container} relative`}>
                <div className="absolute left-0 top-0 w-[15%] h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-[15%] h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                <LogoRow logos={clientLogos[0]} direction="left" />
                <LogoRow logos={clientLogos[1]} direction="right" />
            </div>
        </section>
    );
};

export default ClientsSection;
