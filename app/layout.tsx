import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
    title: "Modme - O'quv markazingizni keyingi bosqichga olib chiqing!",
    description:
        "Modme - O'quv markazlari uchun CRM tizimi. O'quv jarayonini avtomatlashtiring, o'quvchilarni boshqaring va natijalarni kuzating.",
    keywords:
        "o'quv markazi, CRM, o'quv jarayoni, o'quvchilar boshqaruvi, o'quv tizimi",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uz">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
