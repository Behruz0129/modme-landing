"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Send, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname() || "";
    
    console.log("Footer - Current pathname:", pathname);
    
    // Pathname oxirida slash bo'lsa uni olib tashlash
    const normalizedPathname = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    console.log("Footer - Normalized pathname:", normalizedPathname);
    
    const isGamificationPage = normalizedPathname === "/gamification";
    
    console.log("Footer - isGamificationPage:", isGamificationPage);

    return (
        <footer className={`w-full py-12 md:py-16 ${isGamificationPage ? "bg-[#0a0a0a] text-white" : "bg-[#f8f8f8] text-gray-900"}`}>
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo va tavsif */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="relative w-[120px] h-[40px] mb-4">
                            <Image
                                src={isGamificationPage ? "/images/logo-light.webp" : "/images/logo.webp"}
                                alt="Modme"
                                fill
                                className="object-contain"
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
                            />
                        </div>
                        <p className={`text-sm mb-6 ${isGamificationPage ? "text-gray-300" : "text-gray-600"}`}>
                            O'quv markazlari uchun avtomatlashtirilgan boshqaruv va ta'lim tizimi. 
                            Zamonaviy yechim orqali biznesingizni yangi bosqichga olib chiqing.
                        </p>
                        <p className={`text-sm ${isGamificationPage ? "text-gray-400" : "text-gray-500"}`}>
                            © 2024 Modme. Barcha huquqlar himoyalangan.
                        </p>
                    </div>

                    {/* Tezkor havolalar */}
                    <div>
                        <h3 className={`text-lg font-semibold mb-4 ${isGamificationPage ? "text-white" : "text-gray-900"}`}>
                            Tezkor havolalar
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className={`text-sm transition-colors ${isGamificationPage ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                                    Asosiy sahifa
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={`text-sm transition-colors ${isGamificationPage ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                                    Biz haqimizda
                                </Link>
                            </li>
                            <li>
                                <Link href="/prices" className={`text-sm transition-colors ${isGamificationPage ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                                    Narxlar
                                </Link>
                            </li>
                            <li>
                                <Link href="/gamification" className={`text-sm transition-colors ${isGamificationPage ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                                    Gamifikatsiya
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Aloqa ma'lumotlari */}
                    <div>
                        <h3 className={`text-lg font-semibold mb-4 ${isGamificationPage ? "text-white" : "text-gray-900"}`}>
                            Aloqa
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <Phone size={16} className={`mr-2 ${isGamificationPage ? "text-gray-300" : "text-gray-600"}`} />
                                <a href="tel:+998712005400" className={`text-sm transition-colors ${isGamificationPage ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                                    +998 71 200-54-00
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Send size={16} className={`mr-2 ${isGamificationPage ? "text-gray-300" : "text-gray-600"}`} />
                                <a href="https://t.me/modme_uz" target="_blank" rel="noopener noreferrer" className={`text-sm transition-colors ${isGamificationPage ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                                    @modme_uz
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Ijtimoiy tarmoqlar */}
                    <div>
                        <h3 className={`text-lg font-semibold mb-4 ${isGamificationPage ? "text-white" : "text-gray-900"}`}>
                            Ijtimoiy tarmoqlar
                        </h3>
                        <div className="flex space-x-4">
                            <a 
                                href="https://instagram.com/modme.uz" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                                    isGamificationPage 
                                    ? "bg-white/10 text-white hover:bg-white/20" 
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                <Instagram size={20} />
                            </a>
                            <a 
                                href="https://t.me/modme_uz" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                                    isGamificationPage 
                                    ? "bg-white/10 text-white hover:bg-white/20" 
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                <Send size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 