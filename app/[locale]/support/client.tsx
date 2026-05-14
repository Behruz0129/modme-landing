"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ReactNode } from "react";

const Arrow = () => (
    <svg
        className="w-6 h-6 text-orange-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const VideoIcon = () => (
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
);

const DocIcon = () => (
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
    </svg>
);

const ChatIcon = () => (
    <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const PlugIcon = () => (
    <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9 2V8M15 2V8M5 8H19V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14V8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 21V23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

type SupportCard = {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    external?: boolean;
    cta: string;
};

export default function SupportClient() {
    const t = useTranslations("support");
    const tCommon = useTranslations("common");
    const locale = useLocale();

    const integrationCard: SupportCard =
        locale === "en"
            ? {
                  id: 4,
                  title: t("kommoIntegration.title"),
                  description: t("kommoIntegration.description"),
                  icon: <PlugIcon />,
                  href: "/support/kommo-integration",
                  cta: tCommon("viewMore"),
              }
            : {
                  id: 4,
                  title: t("amocrmIntegration.title"),
                  description: t("amocrmIntegration.description"),
                  icon: <PlugIcon />,
                  href: "/support/amocrm-integration",
                  cta: tCommon("viewMore"),
              };

    const supportCards: SupportCard[] = [
        {
            id: 1,
            title: t("videoLessons.title"),
            description: t("videoLessons.description"),
            icon: <VideoIcon />,
            href: "/support/video-courses",
            cta: tCommon("viewMore"),
        },
        {
            id: 2,
            title: t("documentation.title"),
            description: t("documentation.description"),
            icon: <DocIcon />,
            href: "https://modme-crm.gitbook.io/modme-crm",
            external: true,
            cta: tCommon("readMore"),
        },
        integrationCard,
        {
            id: 3,
            title: t("techSupport.title"),
            description: t("techSupport.description"),
            icon: <ChatIcon />,
            href: "https://t.me/modme_support",
            external: true,
            cta: tCommon("write"),
        },
    ];

    const renderCard = (card: SupportCard) => {
        const inner = (
            <>
                <div className="mb-6 p-4 bg-orange-100 rounded-lg inline-block">
                    <div className="text-orange-500">{card.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#080a0a]">
                    {card.title}
                </h3>
                <p className="text-base text-[#666666] mb-8">
                    {card.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-orange-500">
                        {card.cta}
                    </span>
                    <Arrow />
                </div>
            </>
        );

        if (card.external) {
            return (
                <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full p-8 rounded-xl border-2 bg-white text-[#080a0a] border-[#f0f0f0] transition-all duration-300 hover:shadow-lg"
                >
                    {inner}
                </a>
            );
        }

        return (
            <Link
                href={card.href}
                className="block h-full p-8 rounded-xl border-2 bg-white text-[#080a0a] border-[#f0f0f0] transition-all duration-300 hover:shadow-lg"
            >
                {inner}
            </Link>
        );
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-[#080a0a] mb-6">
                        {t("heading")}
                    </h1>
                    <p className="text-xl text-[#666666] max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {supportCards.slice(0, 2).map((card, index) => (
                            <motion.div
                                key={card.id}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {renderCard(card)}
                            </motion.div>
                        ))}
                    </div>

                    {supportCards.slice(2).map((card, index) => (
                        <motion.div
                            key={card.id}
                            custom={index + 2}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {renderCard(card)}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
