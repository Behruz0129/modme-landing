"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { PhoneCall, X, Menu } from "lucide-react";
import { fadeInUp, fadeInScale, getTransition } from "@/lib/animations";
import { heroButtonStyles, sectionStyles } from "@/lib/styles";

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const screen2Ref = useRef(null);
    const screen3Ref = useRef(null);
    const isScreen2InView = useInView(screen2Ref, { once: false, amount: 0.3 });
    const isScreen3InView = useInView(screen3Ref, { once: false, amount: 0.3 });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className={sectionStyles.hero}>
            <div className="max-w-[1200px] mx-auto px-4">
                <div className={sectionStyles.content}>
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate={isLoaded ? "animate" : "initial"}
                        transition={getTransition(0.2)}
                        className="mb-6 md:mb-8"
                    >
                        <h1 className={sectionStyles.heading}>
                            O'quv markazingizni yangi <br /> bosqichga olib
                            chiqing!
                        </h1>
                        <p className={sectionStyles.description}>
                            Modme - bu tizimli boshqaruv, avtomatlashtirish va
                            raqamli yechim. Qo'lda bajaradigan ishlarni
                            qisqartiring, vaqtni tejang va boshqaruvni
                            soddalashtiring
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate={isLoaded ? "animate" : "initial"}
                        transition={getTransition(0.4)}
                        className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-xl mt-8 md:mt-10 mb-10 md:mb-14"
                    >
                        <a href="/demo" className="flex-1 sm:flex-none">
                            <Button className={heroButtonStyles.primary}>
                                Hoziroq sinab ko'ring – 7 kun bepul!
                            </Button>
                        </a>

                        <a
                            href="https://t.me/Toshkenboyev04"
                            target="_blank"
                            className="flex-none"
                        >
                            <Button
                                variant="outline"
                                className={heroButtonStyles.secondary}
                            >
                                <PhoneCall size={20} />
                                <span>Sotuv bo'limi</span>
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 relative mt-10 md:mt-0">
                <div className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[800px] overflow-visible flex items-center justify-center">
                    <motion.div
                        variants={fadeInScale}
                        initial="initial"
                        animate={isLoaded ? "animate" : "initial"}
                        transition={getTransition(0.5)}
                        className="absolute left-1/2 transform -translate-x-1/2 w-[165%] xs:w-[155%] sm:w-[150%] md:w-[140%] lg:w-[130%] z-10"
                    >
                        <Image
                            src="/images/hero/screen-1.webp"
                            width={2280}
                            height={1312}
                            alt="ModMe Platform Main Screen"
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        ref={screen2Ref}
                        variants={fadeInScale}
                        initial="initial"
                        animate={isScreen2InView ? "animate" : "initial"}
                        transition={getTransition(0.2)}
                        className="absolute left-[5%] xs:left-[7%] sm:left-[8%] md:left-[11%] lg:left-[13%] top-[24%] xs:top-[22%] sm:top-[24%] md:top-[28%] lg:top-[32%] w-[75%] xs:w-[72%] sm:w-[68%] md:w-[60%] lg:w-[56%] z-20 block"
                    >
                        <Image
                            src="/images/hero/screen-2.webp"
                            width={786}
                            height={602}
                            alt="ModMe Platform Features"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <motion.div
                        ref={screen3Ref}
                        variants={fadeInScale}
                        initial="initial"
                        animate={isScreen3InView ? "animate" : "initial"}
                        transition={getTransition(0.4)}
                        className="absolute left-[45%] xs:left-[48%] sm:left-[52%] md:left-[58%] lg:left-[65%] top-[36%] xs:top-[35%] sm:top-[37%] md:top-[40%] lg:top-[45%] w-[70%] xs:w-[65%] sm:w-[60%] md:w-[55%] lg:w-[50%] z-30 block"
                    >
                        <Image
                            src="/images/hero/screen-3.webp"
                            width={900}
                            height={740}
                            alt="ModMe Analytics Dashboard"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
