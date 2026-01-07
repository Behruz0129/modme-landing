"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useCookie } from "@/lib/hooks/useCookie";
import Link from "next/link";

const CookieConsent = () => {
    const { value: hasConsent, setValue: setConsent, isLoaded } = useCookie("cookie_consent");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isLoaded && hasConsent !== "true") {
            // Kichik kechikish bilan ko'rsatish
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isLoaded, hasConsent]);

    const handleAccept = () => {
        setConsent("true", 365);
        setIsVisible(false);
    };

    const handleDecline = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="p-4 md:p-6">
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    {/* Icon and Text */}
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className="hidden sm:flex w-12 h-12 bg-gradient-to-r from-[#ffd03d]/20 to-[#ff8000]/20 rounded-xl items-center justify-center flex-shrink-0">
                                            <Cookie className="w-6 h-6 text-[#ff8000]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-[#080a0a] mb-1 flex items-center gap-2">
                                                <Cookie className="w-5 h-5 text-[#ff8000] sm:hidden" />
                                                Cookie-fayllar
                                            </h3>
                                            <p className="text-sm text-[#666] leading-relaxed">
                                                Saytimizdan qulay foydalanish uchun biz cookie-fayllardan foydalanamiz. 
                                                Davom etish orqali siz{" "}
                                                <Link
                                                    href="/privacy-policy"
                                                    className="text-[#ff8000] underline underline-offset-2 hover:text-[#ff9831]"
                                                >
                                                    maxfiylik siyosatimizga
                                                </Link>{" "}
                                                rozilik bildirasiz.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center gap-3 flex-shrink-0">
                                        <button
                                            onClick={handleDecline}
                                            className="px-4 py-2.5 text-sm font-medium text-[#666] hover:text-[#080a0a] hover:bg-gray-100 rounded-lg transition-all"
                                        >
                                            Rad etish
                                        </button>
                                        <button
                                            onClick={handleAccept}
                                            className="px-6 py-2.5 text-sm font-bold bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-[#080a0a] rounded-lg hover:opacity-90 transition-all shadow-lg shadow-[#ffd03d]/30"
                                        >
                                            Qabul qilish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;

