"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { useCookie } from "@/lib/hooks/useCookie";

interface LeadFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type FormState = "idle" | "loading" | "success" | "error" | "already_submitted";

const LeadFormModal = ({ isOpen, onClose }: LeadFormModalProps) => {
    const { value: hasSubmitted, setValue: setSubmitted, isLoaded } = useCookie("lead_submitted");
    const [formState, setFormState] = useState<FormState>("idle");
    const [formData, setFormData] = useState({
        contact_name: "",
        phone: "",
        learning_center_name: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (isOpen && isLoaded && hasSubmitted === "true") {
            setFormState("already_submitted");
        }
    }, [isOpen, hasSubmitted, isLoaded]);

    // Body scrollni bloklash
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.contact_name.trim()) {
            newErrors.contact_name = "Ismingizni kiriting";
        } else if (formData.contact_name.trim().length < 2) {
            newErrors.contact_name = "Ism kamida 2 ta belgidan iborat bo'lishi kerak";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Telefon raqamingizni kiriting";
        } else if (!/^[0-9]{9}$/.test(formData.phone)) {
            newErrors.phone = "To'g'ri telefon raqam kiriting (9 ta raqam)";
        }

        if (!formData.learning_center_name.trim()) {
            newErrors.learning_center_name = "O'quv markaz nomini kiriting";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setFormState("loading");

        try {
            const response = await fetch("https://api.modme.dev/v1/amocrm/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contact_name: formData.contact_name.trim(),
                    phone: formData.phone,
                    learning_center_name: formData.learning_center_name.trim(),
                }),
            });

            if (!response.ok) {
                throw new Error("So'rov yuborishda xatolik");
            }

            setSubmitted("true", 365);
            setFormState("success");
        } catch {
            setFormState("error");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleClose = () => {
        if (formState !== "loading") {
            onClose();
            // Reset form after animation
            setTimeout(() => {
                if (formState !== "success" && formState !== "already_submitted") {
                    setFormState("idle");
                    setFormData({ contact_name: "", phone: "", learning_center_name: "" });
                    setErrors({});
                }
            }, 300);
        }
    };

    const renderContent = () => {
        if (formState === "already_submitted" || formState === "success") {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#ffd03d] to-[#ff8000] rounded-full flex items-center justify-center"
                    >
                        <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#080a0a] mb-3">
                        {formState === "success" ? "Arizangiz qabul qilindi!" : "Siz allaqachon ariza yuborgansiz"}
                    </h3>
                    <p className="text-[#666] mb-6 max-w-sm mx-auto">
                        {formState === "success"
                            ? "Tez orada mutaxassislarimiz siz bilan bog'lanishadi"
                            : "Bizning mutaxassislarimiz tez orada siz bilan bog'lanishadi"}
                    </p>
                    <div className="bg-gradient-to-r from-[#ffd03d]/10 to-[#ff8000]/10 rounded-xl p-6 border border-[#ff8000]/20">
                        <p className="text-sm text-[#666] mb-4">
                            Agar zudlik bilan bog'lanmoqchi bo'lsangiz:
                        </p>
                        <a
                            href="https://t.me/modme_sales"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0088cc] to-[#00a2e8] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all"
                        >
                            <FaTelegramPlane className="w-5 h-5" />
                            <span>Telegram orqali yozish</span>
                        </a>
                    </div>
                </motion.div>
            );
        }

        if (formState === "error") {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center"
                    >
                        <AlertCircle className="w-10 h-10 text-red-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#080a0a] mb-3">Xatolik yuz berdi</h3>
                    <p className="text-[#666] mb-6">
                        Iltimos, qaytadan urinib ko'ring yoki Telegram orqali bog'laning
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => setFormState("idle")}
                            className="px-6 py-3 border border-[#ff8000] text-[#ff8000] rounded-lg font-bold hover:bg-[#ff8000]/5 transition-all"
                        >
                            Qayta urinish
                        </button>
                        <a
                            href="https://t.me/modme_sales"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0088cc] to-[#00a2e8] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all"
                        >
                            <FaTelegramPlane className="w-5 h-5" />
                            <span>Telegram</span>
                        </a>
                    </div>
                </motion.div>
            );
        }

        return (
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-[#080a0a] mb-2">
                        Ismingiz <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="contact_name"
                        value={formData.contact_name}
                        onChange={handleInputChange}
                        placeholder="Ismingizni kiriting"
                        className={`w-full px-4 py-3 rounded-xl border ${
                            errors.contact_name ? "border-red-500" : "border-gray-200"
                        } bg-white text-[#080a0a] focus:ring-2 focus:ring-[#ff8000] focus:border-transparent outline-none transition-all`}
                        disabled={formState === "loading"}
                    />
                    {errors.contact_name && (
                        <p className="mt-1 text-sm text-red-500">{errors.contact_name}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#080a0a] mb-2">
                        Telefon raqam <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-4 py-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-[#666] text-sm">
                            +998
                        </span>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "").slice(0, 9);
                                handleInputChange({ target: { name: "phone", value } } as React.ChangeEvent<HTMLInputElement>);
                            }}
                            placeholder="901234567"
                            className={`w-full px-4 py-3 rounded-r-xl border ${
                                errors.phone ? "border-red-500" : "border-gray-200"
                            } bg-white text-[#080a0a] focus:ring-2 focus:ring-[#ff8000] focus:border-transparent outline-none transition-all`}
                            disabled={formState === "loading"}
                        />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#080a0a] mb-2">
                        O'quv markaz nomi <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="learning_center_name"
                        value={formData.learning_center_name}
                        onChange={handleInputChange}
                        placeholder="Markazingiz nomini kiriting"
                        className={`w-full px-4 py-3 rounded-xl border ${
                            errors.learning_center_name ? "border-red-500" : "border-gray-200"
                        } bg-white text-[#080a0a] focus:ring-2 focus:ring-[#ff8000] focus:border-transparent outline-none transition-all`}
                        disabled={formState === "loading"}
                    />
                    {errors.learning_center_name && (
                        <p className="mt-1 text-sm text-red-500">{errors.learning_center_name}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-[#080a0a] font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {formState === "loading" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Yuborilmoqda...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            <span>Ariza yuborish</span>
                        </>
                    )}
                </button>

                <p className="text-xs text-center text-[#999]">
                    Ariza yuborish orqali siz{" "}
                    <a href="/privacy-policy" className="text-[#ff8000] underline underline-offset-2">
                        maxfiylik siyosatiga
                    </a>{" "}
                    rozilik bildirasiz
                </p>
            </form>
        );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={handleClose}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-[#ffd03d] to-[#ff8000] p-6 pb-8">
                            <button
                                onClick={handleClose}
                                disabled={formState === "loading"}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all disabled:opacity-50"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                            <h2 className="text-2xl font-bold text-white pr-10">Sotuv bo'limi bilan bog'lanish</h2>
                            <p className="text-white/80 mt-1 text-sm">
                                Ma'lumotlaringizni qoldiring, biz siz bilan bog'lanamiz
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-6 -mt-4 bg-white rounded-t-2xl relative">
                            {renderContent()}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LeadFormModal;

