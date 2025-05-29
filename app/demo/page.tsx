"use client";

import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-[89px]">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="relative w-24 h-24 mx-auto">
                            <motion.div
                                className="absolute inset-0 rounded-full bg-[#ff8000]"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute inset-2 rounded-full bg-white dark:bg-gray-800"
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <FaTelegram className="w-8 h-8 text-[#ff8000]" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Demo olish uchun bot ishlab chiqilmoqda
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Hozircha sotuv bo'limi bilan bog'lanishingiz mumkin. Bot
                        ishlab chiqilguncha biroz sabr qiling, biz siz uchun
                        ajoyib tajriba yaratmoqdamiz!
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link
                            href="https://t.me/Toshkenboyev04"
                            target="_blank"
                            className="cursor-pointer"
                        >
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#ff8000] hover:bg-[#ff9831] text-white px-8 py-6 text-lg cursor-pointer">
                                Sotuv bo'limi bilan bog'lanish
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
