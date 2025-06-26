"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const balanceModes = [
    { id: 1, name: "Kunlik" },
    { id: 2, name: "Oylik" },
    { id: 3, name: "Guruh boshlanish sanasi" },
    { id: 4, name: "Butun kurs" },
    { id: 5, name: "Modul" },
    { id: 6, name: "Individual" },
];

export default function DemoClient() {
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
                                        minLength={9}
                                        maxLength={9}
                                        pattern="[0-9]{9}"
                                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                        placeholder="991234567"
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
