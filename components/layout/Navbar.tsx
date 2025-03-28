"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Instagram, Send, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Biz haqimizda", href: "/about" },
    { name: "Narxlar", href: "/prices" },
    { name: "Gamifikatsiya", href: "/gamification" },
    { name: "FAQ", href: "#" },
];

// Hamburger menu animatsiya komponenti
const MenuButton = ({
    isOpen,
    toggle,
    isGamificationPage,
}: {
    isOpen: boolean;
    toggle: () => void;
    isGamificationPage: boolean;
}) => {
    return (
        <button
            onClick={toggle}
            className="flex flex-col justify-center items-center h-10 w-10 relative z-50 focus:outline-none lg:hidden"
            aria-label={isOpen ? "Yopish" : "Menu ochish"}
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
    const pathname = usePathname() || "";
    
    // Pathname oxirida slash bo'lsa uni olib tashlash
    const normalizedPathname = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    
    const isGamificationPage = normalizedPathname === "/gamification";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mobile menu ochilganda body scrollni bloklash
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

    // Sahifa o'zgarganda mobile menuni yopish
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Navbar background class
    const navbarBgClass = isGamificationPage
        ? (isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm" : "bg-[#0a0a0a]")
        : (isScrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent");

    // Mobile menu background class  
    const mobileMenuBgClass = isGamificationPage
        ? "bg-[#0a0a0a]/95 backdrop-blur-md"
        : (isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-white/95 backdrop-blur-md");

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[89px] ${navbarBgClass}`}
        >
            <div className="max-w-[1200px] mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link href="/" className="relative w-[120px] h-[40px]">
                        <Image
                            src={isGamificationPage ? "/images/logo-light.webp" : "/images/logo.webp"}
                            alt="Modme"
                            fill
                            className="object-contain"
                            priority
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-12">
                        {/* Navigation Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-lg font-medium transition-colors ${
                                    pathname === link.href
                                        ? "text-[#ff8000]"
                                        : isGamificationPage
                                        ? "text-white hover:text-[#ff8000]"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Social Icons & CTA */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Support Icon */}
                        <a
                            href="#"
                            className={`${
                                isGamificationPage
                                    ? "text-white hover:text-[#ff8000]"
                                    : "text-gray-600 hover:text-gray-900"
                            } cursor-pointer transition-colors`}
                            aria-label="Call support"
                        >
                            <Phone size={24} />
                        </a>

                        {/* Telegram Icon */}
                        <a
                            href="#"
                            className={`${
                                isGamificationPage
                                    ? "text-white hover:text-[#ff8000]"
                                    : "text-gray-600 hover:text-gray-900"
                            } cursor-pointer transition-colors`}
                            aria-label="Telegram"
                        >
                            <Send size={24} />
                        </a>

                        {/* Instagram Icon */}
                        <a
                            href="#"
                            className={`${
                                isGamificationPage
                                    ? "text-white hover:text-[#ff8000]"
                                    : "text-gray-600 hover:text-gray-900"
                            } cursor-pointer transition-colors`}
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>

                        {/* Demo Button */}
                        <Button
                            className={`${
                                isGamificationPage
                                    ? "bg-[#ff8000] hover:bg-[#ff9831]"
                                    : "bg-gradient-to-r from-[#080909] to-[#596270] hover:opacity-90"
                            } text-white`}
                            size="lg"
                        >
                            Demo olish
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <MenuButton
                        isOpen={isMobileMenuOpen}
                        toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        isGamificationPage={isGamificationPage}
                    />
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-[89px] left-0 right-0 z-40 ${mobileMenuBgClass} lg:hidden`}
                        >
                            <div className="container mx-auto px-4 py-4">
                                <div className="flex flex-col space-y-4">
                                    {/* Navigation Links */}
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`text-lg font-medium ${
                                                pathname === link.href
                                                    ? "text-[#ff8000]"
                                                    : isGamificationPage
                                                    ? "text-white hover:text-[#ff8000]"
                                                    : "text-gray-800 hover:text-black"
                                            } transition-colors py-2`}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            {link.name}
                                        </Link>
                                    ))}

                                    {/* Mobile social links */}
                                    <div className="flex justify-start space-x-6 py-4">
                                        <a
                                            href="#"
                                            className={`${
                                                isGamificationPage
                                                    ? "text-white hover:text-[#ff8000]"
                                                    : "text-gray-600 hover:text-gray-900"
                                            }`}
                                            aria-label="Call support"
                                        >
                                            <Phone size={24} />
                                        </a>
                                        <a
                                            href="#"
                                            className={`${
                                                isGamificationPage
                                                    ? "text-white hover:text-[#ff8000]"
                                                    : "text-gray-600 hover:text-gray-900"
                                            }`}
                                            aria-label="Telegram"
                                        >
                                            <Send size={24} />
                                        </a>
                                        <a
                                            href="#"
                                            className={`${
                                                isGamificationPage
                                                    ? "text-white hover:text-[#ff8000]"
                                                    : "text-gray-600 hover:text-gray-900"
                                            }`}
                                            aria-label="Instagram"
                                        >
                                            <Instagram size={24} />
                                        </a>
                                    </div>

                                    {/* Mobile Demo Button */}
                                    <div className="pt-2">
                                        <Button
                                            className={`${
                                                isGamificationPage
                                                    ? "bg-[#ff8000] hover:bg-[#ff9831]"
                                                    : "bg-gradient-to-r from-[#080909] to-[#596270] hover:opacity-90"
                                            } text-white w-full`}
                                            size="lg"
                                        >
                                            Demo olish
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
