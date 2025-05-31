import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Modme - O'quv markazingizni yangi bosqichga olib chiqing!",
    description:
        "Modme - O'quv markazlari uchun eng munosib CRM tizimi. O'quvchilar, guruhlar, to'lovlar va boshqa barcha jarayonlarni boshqaring.",
    keywords:
        "CRM, o'quv markaz, ta'lim, boshqaruv tizimi, o'quvchilar, guruhlar, to'lovlar",
    authors: [{ name: "Behruz Berdiyev" }],
    creator: "Modme",
    publisher: "Modme",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://modme.uz"),
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: [
            { url: "/favicon/favicon.ico" },
            {
                url: "/favicon/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
        ],
        apple: [
            {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/favicon/safari-pinned-tab.svg",
                color: "#ff8000",
            },
        ],
    },
    manifest: "/favicon/site.webmanifest",
    openGraph: {
        title: "Modme - O'quv markazingizni yangi bosqichga olib chiqing!",
        description:
            "Modme - O'quv markazlari uchun eng munosib CRM tizimi. O'quvchilar, guruhlar, to'lovlar va boshqa barcha jarayonlarni boshqaring.",
        url: "https://modme.uz",
        siteName: "Modme",
        images: [
            {
                url: "/images/og/og-image.png",
                width: 1200,
                height: 630,
                alt: "Modme CRM Platform",
            },
        ],
        locale: "uz_UZ",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Modme - O'quv markazingizni yangi bosqichga olib chiqing!",
        description:
            "Modme - O'quv markazlari uchun eng munosib CRM tizimi. O'quvchilar, guruhlar, to'lovlar va boshqa barcha jarayonlarni boshqaring.",
        images: ["/images/twitter/twitter-image.png"],
        creator: "@modme",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google-site-verification-code",
        yandex: "yandex-verification-code",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uz" suppressHydrationWarning>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
