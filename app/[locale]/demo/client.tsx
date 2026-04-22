"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function DemoClient() {
    const t = useTranslations("demo");

    const balanceModes = [
        { id: 1, name: t("paymentModes.daily") },
        { id: 2, name: t("paymentModes.monthly") },
        { id: 3, name: t("paymentModes.groupstart") },
        { id: 4, name: t("paymentModes.course") },
        { id: 5, name: t("paymentModes.module") },
        { id: 6, name: t("paymentModes.individual") },
    ];

    const [formData, setFormData] = useState({
        first_name: "",
        name: "",
        phone: "",
        balance_mode: "",
        password: "",
    });
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const isFormValid =
        formData.first_name.length >= 1 &&
        formData.name.length >= 1 &&
        formData.phone.length === 9 &&
        /^[0-9]{9}$/.test(formData.phone) &&
        formData.balance_mode !== "" &&
        formData.password.length >= 8 &&
        privacyAccepted;

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const consentRaw = t("privacyConsent");
    const consentParts = consentRaw.split("{link}");

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
                            {t("heading")}
                        </h1>
                        <form
                            action="https://api.modme.uz/v1/company/openDemoCompany"
                            method="POST"
                            className="space-y-6"
                            target="_blank"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t("nameLabel")}
                                </label>
                                <input
                                    name="first_name"
                                    type="text"
                                    required
                                    minLength={1}
                                    maxLength={255}
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                    placeholder={t("namePlaceholder")}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t("centerLabel")}
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    minLength={1}
                                    maxLength={255}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                    placeholder={t("centerPlaceholder")}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t("phoneLabel")}
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
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                        placeholder="991234567"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#ff8000]">
                                            {t("paymentModeLabel")}
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
                                    value={formData.balance_mode}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                >
                                    <option value="">
                                        {t("paymentModePlaceholder")}
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
                                    {t("passwordLabel")}
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    minLength={8}
                                    maxLength={255}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ff8000] focus:border-transparent"
                                    placeholder={t("passwordPlaceholder")}
                                />
                            </div>
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    checked={privacyAccepted}
                                    onChange={(e) =>
                                        setPrivacyAccepted(e.target.checked)
                                    }
                                    className="mt-1 w-4 h-4 text-[#ff8000] bg-gray-100 border-gray-300 rounded focus:ring-[#ff8000] focus:ring-2 cursor-pointer"
                                />
                                <label
                                    htmlFor="privacy"
                                    className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
                                >
                                    {consentParts[0]}
                                    <Link
                                        href="/privacy-policy"
                                        className="text-[#ff8000] hover:text-[#ff9831] underline underline-offset-2 transition-colors"
                                    >
                                        {t("privacyLink")}
                                    </Link>
                                    {consentParts[1]}
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
                                    isFormValid
                                        ? "bg-[#ff8000] hover:bg-[#ff9831] text-white cursor-pointer"
                                        : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                }`}
                            >
                                {t("submit")}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
