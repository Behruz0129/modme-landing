import Link from "next/link";
import Image from "next/image";
import {
    Instagram,
    Youtube,
    Send,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#181c23] text-white">
            <div className="max-w-[1200px] mx-auto px-4 py-12">
                {/* Asosiy qism */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                    {/* Logo */}
                    <div className="flex flex-col">
                        <Link
                            href="/"
                            className="relative w-[120px] h-[40px] mb-6 select-none cursor-pointer"
                        >
                            <Image
                                src="/images/logo-light.svg"
                                alt="ModmeCRM"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <p className="text-[#bfc8d6] text-base md:text-lg">
                            O'quv markazlari uchun professional CRM tizimi
                        </p>
                    </div>

                    {/* ModmeCRM */}
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/about"
                                className="text-lg font-bold mb-4 text-white hover:text-[#ff8000] transition-colors"
                            >
                                Biz haqimizda
                            </Link>
                            <div className="flex flex-col gap-3 mt-2">
                                <a
                                    href="https://play.google.com/store/apps/details?id=uz.modme.student"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 transition-opacity"
                                >
                                    <Image
                                        src="/images/android-download.svg"
                                        alt="Android uchun yuklab olish"
                                        width={135}
                                        height={40}
                                        className="object-contain"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/modme-student-app/id6467503409"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-90 transition-opacity"
                                >
                                    <Image
                                        src="/images/ios-download.svg"
                                        alt="iOS uchun yuklab olish"
                                        width={135}
                                        height={40}
                                        className="object-contain"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Resurslar */}
                    <div className="flex flex-col">
                        <Link
                            href="/resources"
                            className="text-lg font-bold mb-4 text-white hover:text-[#ff8000] transition-colors"
                        >
                            Resurslar
                        </Link>
                    </div>

                    {/* Kontaktlar */}
                    <div className="flex flex-col">
                        <Link
                            href="/contacts"
                            className="text-lg font-bold mb-4 text-white hover:text-[#ff8000] transition-colors"
                        >
                            Kontaktlar
                        </Link>
                    </div>

                    {/* Ijtimoiy tarmoqlar */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-4">
                            Ijtimoiy Tarmoqlar
                        </h3>
                        <div className="flex gap-4 mb-6">
                            <a
                                href="https://www.youtube.com/@modme_uz"
                                className="text-[#bfc8d6] hover:text-[#ff8000] transition-colors"
                            >
                                <Youtube className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/modme_uz/"
                                className="text-[#bfc8d6] hover:text-[#ff8000] transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://t.me/modme_uz"
                                className="text-[#bfc8d6] hover:text-[#ff8000] transition-colors"
                            >
                                <Send className="w-6 h-6" />
                            </a>
                        </div>
                        <Link href="/demo">
                            <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff8000] to-[#ff9831] hover:opacity-90 text-white font-bold text-sm transition-all">
                                Demo olish
                            </button>
                        </Link>
                        <div className="mt-3">
                            <Link href="https://t.me/modmebillingbot?start=footer">
                                <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#080909] to-[#596270] hover:opacity-90 text-white font-bold text-sm transition-all">
                                    To'lov qilish
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Pastki qism */}
                <div className="pt-8 border-t border-[#232b39]">
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-[#bfc8d6] text-sm">
                            Copyright © 2025{" "}
                            <span className="font-bold text-white">
                                ModmeCRM
                            </span>
                        </p>
                        <p className="text-[#8a919c] text-xs max-w-3xl leading-relaxed">
                            Услуги, представленные на сайте, предназначены исключительно для юридических лиц и индивидуальных предпринимателей и используются в предпринимательской деятельности. Сервис не предназначен для физических лиц в качестве потребителей. Закон Республики Узбекистан «О защите прав потребителей» к данным услугам не применяется.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
