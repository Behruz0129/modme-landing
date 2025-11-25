"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, Phone, Mail, FileText } from "lucide-react";

const legalInfo = [
    { 
        label: "Исполнитель", 
        value: "ООО «MODME»",
        icon: <Building2 className="w-5 h-5" />
    },
    {
        label: "ИНН",
        value: "307442900",
        icon: <FileText className="w-5 h-5" />
    },
    {
        label: "Юридический адрес",
        value: "Республика Узбекистан, г. Ташкент, Мирзо-Улугбекский район, махалля Навнихол, улица Тепамасжид, дом 4А.",
        icon: <MapPin className="w-5 h-5" />
    },
    { 
        label: "Телефон", 
        value: "+998 (78) 777-11-00",
        icon: <Phone className="w-5 h-5" />
    },
    { 
        label: "E-mail", 
        value: "crmmodme@gmail.com",
        icon: <Mail className="w-5 h-5" />
    },
];

const documents = [
    {
        title: "Публичная оферта",
        href: "/resources/oferta",
    },
    {
        title: "Приложение № 1 — Тарифы",
        href: "/resources/tariffs",
    },
    {
        title: "Приложение № 2 — Политика технической поддержки (SLA)",
        href: "/resources/technical-support-policy",
    },
    {
        title: "Приложение № 3 — Политика конфиденциальности и обработки персональных данных",
        href: "/resources/privacy-and-personal-data-processing-policy",
    },
    {
        title: "Приложение № 4 — Публичная часть Политики кибербезопасности",
        href: "/resources/public-part-of-cybersecurity-policy",
    },
    {
        title: "Свидетельство о регистрации базы персональных данных",
        href: "/resources/certificate-of-registration-of-personal-database",
    },
];

export default function ResourcesClient() {
    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12 mb-8"
                >
                    <p className="text-sm font-semibold text-[#ff8000] uppercase tracking-widest mb-4">
                        Resurslar
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#181c23] mb-6">
                        Huquqiy ma&apos;lumotlar
                    </h1>
                    <p className="text-lg text-[#4a5564] leading-relaxed mb-10">
                        Modme CRM platformasi faoliyati bilan bog&apos;liq barcha rasmiy va huquqiy
                        ma&apos;lumotlar bilan tanishing. Quyidagi ma&apos;lumotlar kompaniyamizning asosiy
                        rekvizitlarini taqdim etadi.
                    </p>

                    <div className="space-y-6">
                        {legalInfo.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-2xl border border-[#f0f0f0] bg-[#fcfcfc] p-5"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="text-[#ff8000] mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-[#a8a8a8] uppercase tracking-wide mb-2">
                                            {item.label}
                                        </p>
                                        <p className="text-xl font-semibold text-[#181c23]">{item.value}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#181c23] mb-6">
                        Hujjatlar
                    </h2>
                    <div className="space-y-4">
                        {documents.map((doc, index) => (
                            <motion.div
                                key={doc.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            >
                                <Link
                                    href={doc.href}
                                    className="flex items-center justify-between p-5 rounded-xl border border-[#f0f0f0] bg-[#fcfcfc] hover:bg-[#fff8e8] hover:border-[#ff8000]/30 transition-all duration-300 group"
                                >
                                    <span className="text-lg font-medium text-[#181c23] group-hover:text-[#ff8000] transition-colors">
                                        {doc.title}
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-[#a8a8a8] group-hover:text-[#ff8000] group-hover:translate-x-1 transition-all" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

