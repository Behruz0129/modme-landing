"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const supportCards = [
    {
        id: 1,
        title: "Video Darslar",
        description: "Modme platformasi bo'yicha video darsliklar to'plami",
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
        color: "bg-[#FFF8E8] text-[#894B00] border-[#FFE4B5]",
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
        color: "bg-[#F0F6FF] text-[#193CB8] border-[#B8D1FF]",
        external: true,
    },
];

export default function SupportPage() {
    return (
        <section className="w-full min-h-screen bg-[#fcfcfc] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[#080a0a] mb-4">
                    Hali qurilmoqda
                </h1>
                <p className="text-xl text-[#666666]">
                    Tez orada bu sahifa ishga tushadi
                </p>
            </div>
        </section>
    );
}
