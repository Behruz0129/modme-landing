import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClarityInit from "@/components/analytics/ClarityInit";

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
                <ClarityInit />
                <Script id="facebook-pixel" strategy="afterInteractive">
                    {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '460779613477871');
fbq('track', 'PageView');`}
                </Script>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=460779613477871&ev=PageView&noscript=1" />',
                    }}
                />
                <Navbar />
                {children}
                <Footer />
                <CookieConsent />
            </body>
        </html>
    );
}
