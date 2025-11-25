"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Phone, MessageCircle, User, ShoppingCart } from "lucide-react";

export default function ContactsClient() {
    const contacts = [
        {
            icon: Phone,
            label: "Nomer",
            value: "+998(78) 777-11-00",
            href: "tel:+998787771100",
            color: "text-blue-500",
        },
        {
            icon: MessageCircle,
            label: "Qo'llab-quvvatlash",
            value: "t.me/modme_support",
            href: "https://t.me/modme_support",
            color: "text-[#ff8000]",
        },
        {
            icon: User,
            label: "Loyiha menejeri",
            value: "t.me/modme_manager",
            href: "https://t.me/modme_manager",
            color: "text-green-500",
        },
        {
            icon: ShoppingCart,
            label: "Sotuv bo'limi",
            value: "t.me/modme_sales",
            href: "https://t.me/modme_sales",
            color: "text-purple-500",
        },
    ];

    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#ff8000] hover:text-[#ff9831] transition-colors mb-6 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Bosh sahifaga qaytish
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#181c23] mb-8">
                        Kontaktlar
                    </h1>

                    <p className="text-lg text-[#4a5564] mb-10 leading-relaxed">
                        Modme CRM bilan bog'lanish uchun quyidagi kontaktlardan foydalaning.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contacts.map((contact, index) => {
                            const Icon = contact.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <a
                                        href={contact.href}
                                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="block p-6 rounded-2xl border border-[#f0f0f0] bg-[#fcfcfc] hover:bg-[#f8f8f8] hover:border-[#ff8000] transition-all group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`${contact.color} p-3 rounded-xl bg-white group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-[#a8a8a8] uppercase tracking-wide mb-2">
                                                    {contact.label}
                                                </p>
                                                <p className="text-lg font-semibold text-[#181c23] group-hover:text-[#ff8000] transition-colors">
                                                    {contact.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

