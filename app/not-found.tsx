"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#ff8000] to-[#ff9831]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        top: "20%",
                        left: "10%",
                    }}
                />
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#080909] to-[#596270]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        bottom: "20%",
                        right: "10%",
                    }}
                />
            </div>

            <div className="text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                >
                    <h1 className="text-9xl font-bold text-[#ff8000] mb-4">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                    }}
                >
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        Sahifa topilmadi
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki
                        o'chirilgan bo'lishi mumkin.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                    }}
                >
                    <Link href="/">
                        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#080909] to-[#596270] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Bosh sahifaga qaytish
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
