"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const supportCards = [
    {
        id: 1,
        title: "Video Darslar",
        description: "Modme platformasi bo'yicha video darsliklar",
        icon: (
            <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M23 7L16 12L23 17V7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        href: "/support/video-courses",
        color: "bg-white text-[#080a0a] border-[#f0f0f0]",
    },
    {
        id: 2,
        title: "Dokumentatsiya",
        description: "Modme platformasi bo'yicha to'liq qo'llanma",
        icon: (
            <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14 2V8H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 13H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 17H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 9H9H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        href: "https://modme-crm.gitbook.io/modme-crm",
        color: "bg-white text-[#080a0a] border-[#f0f0f0]",
        external: true,
        cta: "O'qish",
    },
    {
        id: 3,
        title: "Modme Support",
        description: "Maxsus texnik yordam bo'limi bilan bog'lanish",
        icon: (
            <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        href: "https://t.me/modme_support",
        color: "bg-white text-[#080a0a] border-[#f0f0f0]",
        external: true,
        cta: "Yozish",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-[#080a0a] mb-6">
                        Yordam Markazi
                    </h1>
                    <p className="text-xl text-[#666666] max-w-2xl mx-auto">
                        Modme platformasi bo'yicha barcha yordam materiallari va
                        qo'llanmalar
                    </p>
                </motion.div>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {supportCards.slice(0, 2).map((card, index) => (
                            <motion.div
                                key={card.id}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {card.external ? (
                                    <a
                                        href={card.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-full p-8 rounded-xl border-2 bg-white text-[#080a0a] border-[#f0f0f0] transition-all duration-300 hover:shadow-lg"
                                    >
                                        <div className="mb-6 p-4 bg-orange-100 rounded-lg inline-block">
                                            <div className="text-orange-500">
                                                {card.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-4 text-[#080a0a]">
                                            {card.title}
                                        </h3>
                                        <p className="text-base text-[#666666] mb-8">
                                            {card.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-base font-medium text-orange-500">
                                                {card.cta}
                                            </span>
                                            <svg
                                                className="w-6 h-6 text-orange-500"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5 12H19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 5L19 12L12 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                ) : (
                                    <Link
                                        href={card.href}
                                        className="block h-full p-8 rounded-xl border-2 bg-white text-[#080a0a] border-[#f0f0f0] transition-all duration-300 hover:shadow-lg"
                                    >
                                        <div className="mb-6 p-4 bg-orange-100 rounded-lg inline-block">
                                            <div className="text-orange-500">
                                                {card.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-4 text-[#080a0a]">
                                            {card.title}
                                        </h3>
                                        <p className="text-base text-[#666666] mb-8">
                                            {card.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-base font-medium text-orange-500">
                                                Ko'rish
                                            </span>
                                            <svg
                                                className="w-6 h-6 text-orange-500"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5 12H19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 5L19 12L12 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {supportCards[2].external ? (
                            <a
                                href={supportCards[2].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full p-8 rounded-xl border-2 bg-white text-[#080a0a] border-[#f0f0f0] transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="mb-6 p-4 bg-orange-100 rounded-lg inline-block">
                                    <div className="text-orange-500">
                                        {supportCards[2].icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-[#080a0a]">
                                    {supportCards[2].title}
                                </h3>
                                <p className="text-base text-[#666666] mb-8">
                                    {supportCards[2].description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-base font-medium text-orange-500">
                                        {supportCards[2].cta}
                                    </span>
                                    <svg
                                        className="w-6 h-6 text-orange-500"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 12H19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 5L19 12L12 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </a>
                        ) : (
                            <Link
                                href={supportCards[2].href}
                                className="block h-full p-8 rounded-xl border-2 bg-white text-[#080a0a] border-[#f0f0f0] transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="mb-6 p-4 bg-orange-100 rounded-lg inline-block">
                                    <div className="text-orange-500">
                                        {supportCards[2].icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-[#080a0a]">
                                    {supportCards[2].title}
                                </h3>
                                <p className="text-base text-[#666666] mb-8">
                                    {supportCards[2].description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-base font-medium text-orange-500">
                                        Ko'rish
                                    </span>
                                    <svg
                                        className="w-6 h-6 text-orange-500"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 12H19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 5L19 12L12 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
