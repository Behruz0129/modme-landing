"use client";

import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
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
    ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const GamificationPage = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Predefined particle positions
    const particlePositions = [
        { left: "45.5%", top: "43.0%" },
        { left: "21.1%", top: "1.0%" },
        { left: "40.4%", top: "15.7%" },
        { left: "87.0%", top: "40.7%" },
        { left: "80.7%", top: "5.0%" },
        { left: "86.1%", top: "66.9%" },
        { left: "26.0%", top: "68.9%" },
        { left: "42.8%", top: "63.0%" },
        { left: "93.4%", top: "90.1%" },
        { left: "54.1%", top: "93.4%" },
        { left: "27.6%", top: "19.5%" },
        { left: "39.9%", top: "0.0%" },
        { left: "36.4%", top: "38.3%" },
        { left: "0.4%", top: "72.7%" },
        { left: "41.3%", top: "52.1%" },
        { left: "2.2%", top: "3.5%" },
        { left: "82.5%", top: "32.6%" },
        { left: "39.8%", top: "16.6%" },
        { left: "80.8%", top: "98.6%" },
        { left: "15.3%", top: "11.2%" },
        { left: "47.4%", top: "66.9%" },
        { left: "97.5%", top: "11.0%" },
        { left: "15.0%", top: "57.2%" },
        { left: "2.3%", top: "20.4%" },
        { left: "99.4%", top: "17.4%" },
        { left: "55.4%", top: "68.1%" },
        { left: "56.5%", top: "87.9%" },
        { left: "71.6%", top: "77.2%" },
        { left: "46.6%", top: "7.8%" },
        { left: "4.5%", top: "63.7%" },
    ];

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
                        {/* Mesh Gradient Background */}
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background: `
                                    radial-gradient(circle at 20% 20%, rgba(255, 208, 61, 0.1) 0%, transparent 20%),
                                    radial-gradient(circle at 80% 80%, rgba(255, 128, 0, 0.1) 0%, transparent 20%),
                                    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 30%)
                                `,
                            }}
                            animate={{
                                backgroundPosition: [
                                    "0% 0%",
                                    "100% 100%",
                                    "0% 0%",
                                ],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Animated Background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />

                        {/* Rotating Blur Objects */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <motion.div
                                className="absolute top-0 left-1/2 w-32 h-32 bg-[#ffd03d]/5 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute top-1/2 right-0 w-40 h-40 bg-[#ff8000]/5 rounded-full blur-3xl"
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.5, 0.3, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute bottom-0 left-1/2 w-36 h-36 bg-[#ffd03d]/5 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.4, 0.6, 0.4],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute top-1/2 left-0 w-28 h-28 bg-[#ff8000]/5 rounded-full blur-3xl"
                                animate={{
                                    scale: [1.1, 1, 1.1],
                                    opacity: [0.6, 0.4, 0.6],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                        {/* Animated Particles */}
                        <div className="absolute inset-0 overflow-hidden">
                            {particlePositions.map((pos, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-white/10 rounded-full"
                                    style={{
                                        left: pos.left,
                                        top: pos.top,
                                    }}
                                    animate={{
                                        y: [0, -100, 0],
                                        x: [0, Math.random() * 50 - 25, 0],
                                        opacity: [0.1, 0.3, 0.1],
                                    }}
                                    transition={{
                                        duration: Math.random() * 5 + 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Floating Elements */}
                        <div className="hidden md:block">
                            <motion.div
                                className="absolute top-1/4 left-1/4"
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
                                className="absolute bottom-1/4 right-1/4"
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
                            <motion.div
                                className="absolute top-1/3 right-1/4"
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Target className="w-12 h-12 text-[#ffd03d]" />
                            </motion.div>
                            <motion.div
                                className="absolute bottom-1/3 left-1/4"
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Award className="w-12 h-12 text-[#ff8000]" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Light Beam Effect */}
                            <motion.div
                                className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px]"
                                style={{
                                    background:
                                        "radial-gradient(circle at center, rgba(255, 208, 61, 0.2) 0%, transparent 70%)",
                                }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Floating Elements Around Text */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(15)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                        }}
                                        animate={{
                                            y: [0, -20, 0],
                                            x: [0, Math.random() * 20 - 10, 0],
                                            rotate: [0, 360],
                                            scale: [0.8, 1.2, 0.8],
                                        }}
                                        transition={{
                                            duration: Math.random() * 3 + 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Sparkles className="w-4 h-4 text-[#ffd03d]/50" />
                                    </motion.div>
                                ))}
                            </div>

                            <h1 className="text-6xl md:text-7xl font-bold mb-6 relative">
                                <motion.span
                                    className="bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-transparent bg-clip-text relative"
                                    animate={{
                                        textShadow: [
                                            "0 0 10px rgba(255, 208, 61, 0.5)",
                                            "0 0 20px rgba(255, 208, 61, 0.7)",
                                            "0 0 10px rgba(255, 208, 61, 0.5)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    Gamification
                                </motion.span>
                            </h1>

                            {/* Glowing Particles */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-[#ffd03d]/30 rounded-full"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 0.8, 0.3],
                                        }}
                                        transition={{
                                            duration: Math.random() * 2 + 1,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                ))}
                            </div>

                            <motion.div
                                className="relative inline-block"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="relative text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                    O'quv jarayonini qiziqarli va samarali
                                    qiling. O'quvchilaringiz uchun motivatsiya
                                    yarating va ularning natijalarini
                                    yuqorilang!
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                        >
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gradient-to-r from-[#ff8000] to-[#ff9831] hover:opacity-90 text-white px-8 py-4 text-lg cursor-pointer"
                            >
                                <Play className="w-5 h-5" />
                                <span>Video ko'rish</span>
                            </button>
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
                                Asosiy xususiyatlar
                            </h2>
                            <p className="text-gray-400 text-lg">
                                O'quvchilarning qiziqishini oshirish uchun
                                zamonaviy tizim
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
                                    Hoziroq o'rnating
                                </h2>
                                <p className="text-lg mb-8">
                                    Yangi Gamification modulini hoziroq sinab
                                    ko'ring
                                </p>
                                <Link
                                    href="https://t.me/modme_sales"
                                    target="_blank"
                                    className="inline-block"
                                >
                                    <button className="inline-flex items-center justify-center gap-2 bg-white text-[#ff8000] hover:bg-gray-100 text-lg px-8 py-6 rounded-full">
                                        <span>Boshlash</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </Link>
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
                                    src="https://www.youtube.com/embed/0gi0t8rYL64?si=lzQ4UcuXns6KDJV1"
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
        title: "Zamonaviy gamification tizimi",
        description:
            "Ko'plab yetakchi ta'lim markazlari singari, sizning platformangiz ham coin orqali mukofotlash asosida raqobatbardosh va zamonaviy yondashuvni taklif etadi",
        icon: <Sparkles className="w-6 h-6 text-[#ffd03d]" />,
    },
    {
        title: "Sarafan marketing orqali brendni kuchaytirish",
        description:
            "O'quv markaz logotipi tushirilgan mahsulotlarni shop orqali coin evaziga tarqatish, o'quvchilarning o'zaro targ'iboti orqali reklama ta'sirini oshiradi",
        icon: <Users className="w-6 h-6 text-[#ff8000]" />,
    },
    {
        title: "O'quvchilar motivatsiyasini oshirish",
        description:
            "Davomat, baholar yoki uyga vazifa bajarilishi asosida beriladigan coinlar, o'quvchilarni faolroq bo'lishga undaydi",
        icon: <Trophy className="w-6 h-6 text-[#ffd03d]" />,
    },
    {
        title: "Do'st olib kelgan o'quvchiga mukofot tizimi",
        description:
            "O'quvchilar o'z do'stlarini markazga olib kelib coin olishlari mumkin, bu esa marketingni avtomatik tarzda kuchaytiradi",
        icon: <Award className="w-6 h-6 text-[#ff8000]" />,
    },
    {
        title: "Ichki do'kon orqali real mukofotlar",
        description:
            "O'quv markazi shop'ida turli mahsulotlar qo'shilishi va coin evaziga xarid qilinishi, ta'lim jarayoniga qiziqishni oshiradi",
        icon: <ShoppingCart className="w-6 h-6 text-[#ffd03d]" />,
    },
    {
        title: "Moslashuvchan va qo'lda boshqariladigan tizim",
        description:
            "Coinlar miqdorini qo'lda belgilash, mahsulot qabul qilish, kamaytirish yoki qayta sozlash imkoniyati platformani har qanday markazga moslashtirishga yordam beradi",
        icon: <Zap className="w-6 h-6 text-[#ff8000]" />,
    },
];

export default GamificationPage;
