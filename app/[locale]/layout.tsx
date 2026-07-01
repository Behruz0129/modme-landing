import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import ClarityInit from "@/components/analytics/ClarityInit";
import { ConsultationProvider } from "@/components/consultation/ConsultationProvider";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });

    const ogLocale =
        locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ";

    return {
        title: t("title"),
        description: t("description"),
        keywords: t("keywords"),
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
            canonical: `/${locale}`,
            languages: {
                uz: "/uz",
                en: "/en",
                ru: "/ru",
            },
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
            title: t("title"),
            description: t("description"),
            url: `https://modme.uz/${locale}`,
            siteName: "Modme",
            images: [
                {
                    url: "/images/og/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Modme CRM Platform",
                },
            ],
            locale: ogLocale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
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
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={inter.className}>
                <NextIntlClientProvider>
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
                    <ConsultationProvider>
                        <Navbar />
                        {children}
                        <Footer />
                    </ConsultationProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
