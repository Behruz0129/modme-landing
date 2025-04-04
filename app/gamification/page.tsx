"use client";

import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import {
    Trophy,
    Star,
    Target,
    Users,
    Award,
    Sparkles,
    Play,
    X,
    ArrowRight,
    Zap,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const GamificationPage = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <AnimatePresence mode="wait">
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="min-h-screen bg-[#0a0a0a] text-white"
            >
                {/* Page Transition Overlay */}
                <motion.div
                    className="fixed inset-0 z-[100] pointer-events-none"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    style={{ transformOrigin: "bottom" }}
                >
                    <div className="w-full h-full bg-[#0a0a0a]" />
                </motion.div>

                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div ref={containerRef} className="absolute inset-0">
                        {/* Animated Background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />

                        {/* Animated Circles */}
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff8000]/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffd03d]/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.5, 0.3, 0.5],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Floating Elements - Hidden on mobile */}
                        <div className="hidden md:block">
                            <motion.div
                                className="absolute top-1/3 left-1/3"
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Trophy className="w-12 h-12 text-[#ffd03d]" />
                            </motion.div>
                            <motion.div
                                className="absolute bottom-1/3 right-1/3"
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Star className="w-12 h-12 text-[#ff8000]" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="relative z-10 text-center">
                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-transparent bg-clip-text">
                                Gamifikatsiya
                            </span>
                        </h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            O'quv jarayonini qiziqarli va samarali qiling.
                            O'quvchilaringiz uchun motivatsiya yarating va
                            ularning natijalarini yuqorilang!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Button
                                onClick={() => setIsVideoOpen(true)}
                                className="bg-[#ff8000] hover:bg-[#ff9831] text-white text-lg px-8 py-6 rounded-full group relative overflow-hidden"
                                size="lg"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-[#ffd03d] to-[#ff8000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5 }}
                                />
                                <span className="relative flex items-center">
                                    <Play className="w-5 h-5 mr-2" />
                                    Videoni ko'rish
                                </span>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                        animate={{
                            y: [0, 15, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-8 h-14 border-2 border-white/30 rounded-full p-1.5">
                            <motion.div
                                className="w-2 h-2 bg-white rounded-full mx-auto"
                                animate={{
                                    y: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6">
                                Асосий хусусиятлар
                            </h2>
                            <p className="text-gray-400 text-lg">
                                О'қувчиларнинг қизиқишини ошириш учун замонавий
                                ёндашувлар
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <ScrollAnimation
                                    key={feature.title}
                                    direction="up"
                                    delay={index * 0.1}
                                >
                                    <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#242424] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#ff8000]/10 rounded-lg flex items-center justify-center mb-6">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <div className="bg-gradient-to-r from-[#ff8000] to-[#ffd03d] rounded-2xl p-12 text-center relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-white/10"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.2, 0.1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-6">
                                    Ҳозиргина бошланг
                                </h2>
                                <p className="text-lg mb-8">
                                    О'қувчиларнинг қизиқишини ошириш учун
                                    замонавий ёндашувни синаб кўринг
                                </p>
                                <Button
                                    className="bg-white text-[#ff8000] hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
                                    size="lg"
                                >
                                    Бошлаш
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Modal */}
                <AnimatePresence>
                    {isVideoOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md"
                            onClick={() => setIsVideoOpen(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="relative w-[90vw] max-w-[1440px] aspect-video bg-black rounded-lg overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/HcRYyOo3lsk?si=381awe5nN03Lznkc"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                                <button
                                    onClick={() => setIsVideoOpen(false)}
                                    className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.main>
        </AnimatePresence>
    );
};

const features = [
    {
        title: "Quvvatlash tizimi",
        description:
            "O'quvchilarning harakatlarini quvvatlash va ularning samaradorligini oshirish uchun tizim",
        icon: <Trophy className="w-6 h-6 text-[#ffd03d]" />,
    },
    {
        title: "Harakatlar",
        description:
            "O'quvchilarning harakatlarini kuzatish va ularning samaradorligini baholash",
        icon: <Target className="w-6 h-6 text-[#ff8000]" />,
    },
    {
        title: "Haftalik maqsadlar",
        description:
            "O'quvchilar uchun haftalik maqsadlar belgilash va ularga erishishni kuzatish",
        icon: <Star className="w-6 h-6 text-[#ffd03d]" />,
    },
    {
        title: "Mukofotlar",
        description:
            "O'quvchilar uchun turli xil mukofotlar va unvonlar berish imkoniyati",
        icon: <Award className="w-6 h-6 text-[#ff8000]" />,
    },
    {
        title: "Reytinglar",
        description:
            "O'quvchilar orasida reytinglar va ko'rsatkichlar tizimini yaratish",
        icon: <Zap className="w-6 h-6 text-[#ffd03d]" />,
    },
    {
        title: "Hamkorlik",
        description:
            "Guruh ishlarini tashkil qilish va hamkorlikni rag'batlantirish",
        icon: <Trophy className="w-6 h-6 text-[#ff8000]" />,
    },
];

export default GamificationPage;
