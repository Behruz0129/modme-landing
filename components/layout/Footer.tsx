import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Send, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#181c23] text-white pt-10 pb-4 border-t border-[#232b39]">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-8 md:gap-x-auto pb-8 border-b border-[#232b39]">
                    {/* 1. Logo */}
                    <div className="flex flex-col items-center md:items-start min-w-[120px] mb-2 md:mb-0">
                        <Link href="/" className="relative w-[120px] h-[40px]">
                            <Image
                                src="/images/logo-light.svg"
                                alt="ModmeCRM"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* 2. ModmeCRM title va linklar + download iconlar */}
                    <div className="flex flex-col min-w-[220px] gap-2">
                        <span className="text-xl font-bold mb-2">ModmeCRM</span>
                        <div className="flex justify-between items-start gap-8">
                            <div className="flex flex-col gap-2 text-sm">
                                <Link
                                    href="/about"
                                    className="hover:underline flex items-center gap-1"
                                >
                                    Biz haqimizda <span>↗</span>
                                </Link>
                                <Link
                                    href="/support"
                                    className="hover:underline flex items-center gap-1"
                                >
                                    Qo'llab-quvvatlash <span>↗</span>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="#"
                                    className="flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/images/android-download.svg"
                                        alt="Android uchun yuklab olish"
                                        width={150}
                                        height={150}
                                        className="object-contain"
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/images/ios-download.svg"
                                        alt="iOS uchun yuklab olish"
                                        width={150}
                                        height={150}
                                        className="object-contain"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3. Bog'lanish */}
                    <div className="flex flex-col min-w-[180px] gap-2">
                        <div className="text-lg font-bold mb-2">Bog'lanish</div>
                        <a
                            href="tel:+998787777774"
                            className="flex items-center gap-2 text-sm text-[#bfc8d6] hover:text-white"
                        >
                            <Phone className="w-5 h-5" /> +998 78 777 77 74
                        </a>
                    </div>

                    {/* 4. Ijtimoiy tarmoqlar va demo button */}
                    <div className="flex flex-col min-w-[180px] gap-4 items-center md:items-end">
                        <div className="text-lg font-bold mb-2">
                            Ijtimoiy Tarmoqlar
                        </div>
                        <div className="flex items-center gap-4 text-2xl mb-2">
                            <a
                                href="#"
                                className="hover:text-[#ff8000]"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="hover:text-[#ff8000]"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="hover:text-[#ff8000]"
                                aria-label="Telegram"
                            >
                                <Send className="w-6 h-6" />
                            </a>
                        </div>
                        <Link href="/demo">
                            <button className="cursor-pointer px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff8000] to-[#ff9831] hover:opacity-90 text-white font-bold text-base transition-all">
                                Demo olish
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Pastki qism */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-[#bfc8d6] gap-2">
                    <div>
                        Copyright © 2025{" "}
                        <span className="font-bold text-white">ModmeCRM</span> .
                        All Rights Reserved
                    </div>
                    <Link href="/oferta" className="hover:underline">
                        Oferta ↗
                    </Link>
                </div>
            </div>
        </footer>
    );
}
