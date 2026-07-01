"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useConsultation } from "@/components/consultation/ConsultationProvider";

const MenuButton = ({
    isOpen,
    toggle,
    isGamificationPage,
    closeLabel,
    openLabel,
}: {
    isOpen: boolean;
    toggle: () => void;
    isGamificationPage: boolean;
    closeLabel: string;
    openLabel: string;
}) => {
    return (
        <button
            onClick={toggle}
            className="flex flex-col justify-center items-center h-10 w-10 relative z-50 focus:outline-none lg:hidden"
            aria-label={isOpen ? closeLabel : openLabel}
        >
            <div className="relative w-6 h-5">
                <motion.span
                    className={`absolute top-0 left-0 h-0.5 w-6 rounded-sm ${
                        isGamificationPage ? "bg-white" : "bg-gray-600"
                    }`}
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 9 : 0,
                    }}
                    style={{ transformOrigin: "center center" }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    className={`absolute top-[9px] left-0 h-0.5 w-6 ${
                        isGamificationPage ? "bg-white" : "bg-gray-600"
                    }`}
                    animate={{
                        opacity: isOpen ? 0 : 1,
                        x: isOpen ? 20 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-sm ${
                        isGamificationPage ? "bg-white" : "bg-gray-600"
                    }`}
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? -9 : 0,
                    }}
                    style={{ transformOrigin: "center center" }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </button>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const t = useTranslations("navbar");
    const tCommon = useTranslations("common");
    const { open: openConsultation } = useConsultation();
    const isGamificationPage = pathname?.startsWith("/gamification");

    const navLinks = [
        { name: t("prices"), href: "/prices" },
        { name: t("gamification"), href: "/gamification" },
        { name: t("support"), href: "/support" },
        { name: t("vacancies"), href: "/vacancies" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isGamificationPage
                    ? "bg-[#0a0a0a]/95 backdrop-blur-sm"
                    : isScrolled
                    ? "bg-white dark:bg-[#0a0a0a]"
                    : "bg-transparent"
            }`}
        >
            <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="relative w-[120px] h-[40px] select-none cursor-pointer"
                    >
                        <Image
                            src={
                                isGamificationPage
                                    ? "/images/logo-light.svg"
                                    : "/images/logo.svg"
                            }
                            alt="ModMe"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg font-medium transition-all relative group ${
                                    pathname === link.href
                                        ? "text-[#ff8000]"
                                        : isGamificationPage
                                        ? "text-white hover:text-[#ff8000]"
                                        : "text-[#181c23] hover:text-[#181c23]"
                                }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                        pathname === link.href
                                            ? "bg-[#ff8000] w-full"
                                            : isGamificationPage
                                            ? "bg-[#ff8000]"
                                            : "bg-[#181c23]"
                                    }`}
                                />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:+998787771100"
                            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                                isGamificationPage
                                    ? "text-white hover:text-[#ff8000]"
                                    : "text-[#181c23] hover:text-[#ff8000]"
                            }`}
                        >
                            <Phone className="w-4 h-4" />
                            <span>{t("phone")}</span>
                        </a>

                        <LanguageSwitcher dark={!!isGamificationPage} />

                        <button
                            onClick={openConsultation}
                            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 has-[>svg]:px-4 ${
                                isGamificationPage
                                    ? "bg-gradient-to-r from-[#ff8000] to-[#ff9831] hover:opacity-90"
                                    : "bg-gradient-to-r from-[#080909] to-[#596270] hover:opacity-90"
                            } text-white cursor-pointer`}
                        >
                            {t("demo")}
                        </button>
                    </div>

                    <div className="lg:hidden flex items-center gap-2">
                        <LanguageSwitcher dark={!!isGamificationPage} />
                        <MenuButton
                            isOpen={isMobileMenuOpen}
                            toggle={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            isGamificationPage={!!isGamificationPage}
                            closeLabel={tCommon("close")}
                            openLabel={tCommon("openMenu")}
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-[64px] left-0 right-0 z-40 ${
                                isGamificationPage
                                    ? "bg-[#0a0a0a]/95 backdrop-blur-md"
                                    : isScrolled
                                    ? "bg-white/90 backdrop-blur-md"
                                    : "bg-white/95 backdrop-blur-md"
                            } lg:hidden`}
                        >
                            <div className="container mx-auto px-4 py-4">
                                <div className="flex flex-col space-y-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`text-lg font-medium relative overflow-hidden group ${
                                                isGamificationPage
                                                    ? "text-white hover:text-[#ff8000]"
                                                    : "text-[#181c23] hover:text-[#181c23]"
                                            } transition-all py-2`}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            {link.name}
                                            <span
                                                className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                                                    isGamificationPage
                                                        ? "bg-[#ff8000]"
                                                        : "bg-[#181c23]"
                                                }`}
                                            />
                                        </Link>
                                    ))}

                                    <div className="mt-4">
                                        <a
                                            href="tel:+998787771100"
                                            className={`flex items-center gap-2 text-sm font-medium transition-colors py-2 ${
                                                isGamificationPage
                                                    ? "text-white hover:text-[#ff8000]"
                                                    : "text-[#181c23] hover:text-[#ff8000]"
                                            }`}
                                        >
                                            <Phone className="w-4 h-4" />
                                            <span>{t("phone")}</span>
                                        </a>
                                    </div>

                                    <div className="mt-2">
                                        <button
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                openConsultation();
                                            }}
                                            className={`w-full ${
                                                isGamificationPage
                                                    ? "bg-gradient-to-r from-[#ff8000] to-[#ff9831] hover:opacity-90"
                                                    : "bg-gradient-to-r from-[#080909] to-[#596270] hover:opacity-90"
                                            } text-white py-3 px-6 rounded-md font-bold transition-all`}
                                        >
                                            {t("demo")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
