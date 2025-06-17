"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

const balanceModes = [
    { id: 1, name: "Oylik" },
    { id: 2, name: "Kunlik" },
    { id: 3, name: "Modul" },
    { id: 4, name: "Butun kurs" },
    { id: 5, name: "Individual" },
    { id: 6, name: "Guruh boshlanish sanasi" },
];

export default function DemoClient() {
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 9);
        setPhone(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {
            first_name: formData.get("first_name"),
            name: formData.get("name"),
            phone: `998${phone}`,
            balance_mode: formData.get("balance_mode"),
            password: formData.get("password"),
        };

        try {
            const response = await fetch(
                "https://api.modme.uz/v1/company/openDemoCompany",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                window.open(
                    "https://t.me/modme_robot?start=demo_998995182901",
                    "_blank"
                );
            } else {
                alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
            }
        } catch (error) {
            console.error(error);
            alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-[89px]">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                            Demo olish
                        </h1>
                        <form
                            action="https://api.modme.uz/v1/company/openDemoCompany"
                            method="POST"
                            className="space-y-6"
                            target="_blank"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Ismingiz
                                </label>
                                <input
                                    name="first_name"
                                    type="text"
                                    required
                                    minLength={1}
                                    maxLength={255}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                    placeholder="Ismingizni kiriting"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Markaz nomi
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    minLength={1}
                                    maxLength={255}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                    placeholder="Markaz nomini kiriting"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Telefon raqami
                                </label>
                                <div className="flex items-center gap-2">
                                    <div className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                                        +998
                                    </div>
                                    <input
                                        name="phone"
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                        placeholder="901234567"
                                    />
                                    <input
                                        type="hidden"
                                        name="phone"
                                        value={`998${phone}`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#ff8000]">
                                            To'lov rejimi
                                        </span>
                                        <a
                                            href="https://modme-crm.gitbook.io/modme-crm/get-started/tolov-rejimini-tanlash"
                                            target="_blank"
                                            className="text-[#ff8000] hover:text-[#ff9831] transition-colors"
                                        >
                                            <HelpCircle className="w-4 h-4" />
                                        </a>
                                    </div>
                                </label>
                                <select
                                    name="balance_mode"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                >
                                    <option value="">
                                        To'lov rejimini tanlang
                                    </option>
                                    {balanceModes.map((mode) => (
                                        <option key={mode.id} value={mode.id}>
                                            {mode.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Parol
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    minLength={8}
                                    maxLength={255}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                    placeholder="Kamida 8 ta belgi"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#ff8000] hover:bg-[#ff9831] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                            >
                                Demo olish
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
