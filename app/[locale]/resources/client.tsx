"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    MapPin,
    Phone,
    Mail,
    FileText,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

const ICONS: ReactNode[] = [
    <Building2 key="1" className="w-5 h-5" />,
    <FileText key="2" className="w-5 h-5" />,
    <MapPin key="3" className="w-5 h-5" />,
    <Phone key="4" className="w-5 h-5" />,
    <Mail key="5" className="w-5 h-5" />,
];

const documents = [
    { key: "oferta", href: "/resources/oferta" },
    { key: "tariffs", href: "/resources/tariffs" },
    {
        key: "technicalSupport",
        href: "/resources/technical-support-policy",
    },
    {
        key: "privacy",
        href: "/resources/privacy-and-personal-data-processing-policy",
    },
    {
        key: "cybersecurity",
        href: "/resources/public-part-of-cybersecurity-policy",
    },
    {
        key: "certificate",
        href: "/resources/certificate-of-registration-of-personal-database",
    },
];

export default function ResourcesClient() {
    const t = useTranslations("resources");

    const legalInfo = [
        { label: t("fields.executor"), value: "ООО «MODME»", icon: ICONS[0] },
        { label: t("fields.tin"), value: "307442900", icon: ICONS[1] },
        {
            label: t("fields.address"),
            value: "Республика Узбекистан, г. Ташкент, Мирзо-Улугбекский район, махалля Навнихол, улица Тепамасжид, дом 4А.",
            icon: ICONS[2],
        },
        {
            label: t("fields.phone"),
            value: "+998 (78) 777-11-00",
            icon: ICONS[3],
        },
        {
            label: t("fields.email"),
            value: "crmmodme@gmail.com",
            icon: ICONS[4],
        },
    ];

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
                        {t("label")}
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#181c23] mb-6">
                        {t("heading")}
                    </h1>
                    <p className="text-lg text-[#4a5564] leading-relaxed mb-10">
                        {t("description")}
                    </p>

                    <div className="space-y-6">
                        {legalInfo.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
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
                                        <p className="text-xl font-semibold text-[#181c23]">
                                            {item.value}
                                        </p>
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
                        {t("documentsHeading")}
                    </h2>
                    <div className="space-y-4">
                        {documents.map((doc, index) => (
                            <motion.div
                                key={doc.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4 + index * 0.1,
                                }}
                            >
                                <Link
                                    href={doc.href}
                                    className="flex items-center justify-between p-5 rounded-xl border border-[#f0f0f0] bg-[#fcfcfc] hover:bg-[#fff8e8] hover:border-[#ff8000]/30 transition-all duration-300 group"
                                >
                                    <span className="text-lg font-medium text-[#181c23] group-hover:text-[#ff8000] transition-colors">
                                        {t(`documents.${doc.key}`)}
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
