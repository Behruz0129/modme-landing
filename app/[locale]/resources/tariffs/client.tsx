"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";

type Tariff = {
    start: number;
    basic: number;
    pro: number;
    premium: number;
};

const tariffPrices: Tariff[] = [
    {
        start: 1500000,
        basic: 3120000,
        pro: 4680000,
        premium: 9000000,
    },
    {
        start: 2700000,
        basic: 6240000,
        pro: 9360000,
        premium: 18000000,
    },
    {
        start: 4500000,
        basic: 9360000,
        pro: 14040000,
        premium: 27000000,
    },
    {
        start: 6000000,
        basic: 12480000,
        pro: 18720000,
        premium: 36000000,
    },
];

function formatCurrentDate(locale: string) {
    return new Intl.DateTimeFormat(
        locale === "ru" ? "ru-RU" : locale === "en" ? "en-US" : "uz-UZ",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    ).format(new Date());
}

function formatPrice(price: number) {
    return new Intl.NumberFormat("ru-RU", {
        maximumFractionDigits: 0,
        useGrouping: true,
    })
        .format(price)
        .replace(/,/g, " ");
}

export default function TariffsClient() {
    const common = useTranslations("common");
    const t = useTranslations("resources.tariffsPage");
    const locale = useLocale();
    const periods = t.raw("periods") as string[];
    const intro = t.raw("intro") as string[];
    const notes = t.raw("notes") as string[];

    const tariffs = tariffPrices.map((prices, index) => ({
        period: periods[index],
        ...prices,
    }));

    const tablePlans = [
        {
            key: "start" as const,
            title: t("table.start"),
            range: t("table.startRange"),
        },
        {
            key: "basic" as const,
            title: t("table.basic"),
            range: t("table.basicRange"),
        },
        {
            key: "pro" as const,
            title: t("table.pro"),
            range: t("table.proRange"),
        },
        {
            key: "premium" as const,
            title: t("table.premium"),
            range: t("table.premiumRange"),
        },
    ];

    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12"
                >
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-[#ff8000] hover:text-[#ff9831] transition-colors mb-6 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {common("backToResources")}
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#181c23] mb-8">
                        {t("title")}
                    </h1>

                    <div className="prose prose-lg max-w-none text-[#4a5564] leading-relaxed text-left">
                        <div className="space-y-6">
                            <div className="text-left mb-8">
                                <p className="text-xl font-semibold text-[#181c23] mb-2">
                                    {t("subtitle")}
                                </p>
                                <p className="text-2xl font-bold text-[#181c23] mb-2">
                                    {t("documentTitle")}
                                </p>
                                <p className="text-lg text-[#181c23] mb-2">
                                    {t("serviceDescription")}
                                </p>
                                <p className="text-sm text-[#a8a8a8]">
                                    ({t("updatedLabel")}{" "}
                                    {formatCurrentDate(locale)})
                                </p>
                            </div>

                            <div className="space-y-4">
                                {intro.map((paragraph, index) => (
                                    <p key={paragraph}>
                                        <strong>{index + 1}.</strong>{" "}
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="my-8">
                                <h2 className="text-2xl font-bold text-[#181c23] mb-6">
                                    {t("activeTariffsTitle")} (
                                    <a
                                        href="https://modme.uz/prices"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ff8000] hover:underline"
                                    >
                                        https://modme.uz/prices/
                                    </a>
                                    ):
                                </h2>

                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full border-collapse border border-[#f0f0f0] rounded-lg">
                                        <thead>
                                            <tr className="bg-[#f8f8f8]">
                                                <th className="border border-[#f0f0f0] px-4 py-3 text-left font-semibold text-[#181c23]">
                                                    {t("table.tariff")}
                                                </th>
                                                {tablePlans.map((plan) => (
                                                    <th
                                                        key={plan.key}
                                                        className="border border-[#f0f0f0] px-4 py-3 text-center font-semibold text-[#181c23]"
                                                    >
                                                        {plan.title}
                                                        <br />
                                                        <span className="text-sm font-normal text-[#a8a8a8]">
                                                            ({plan.range})
                                                        </span>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tariffs.map((tariff) => (
                                                <tr
                                                    key={tariff.period}
                                                    className="hover:bg-[#fcfcfc]"
                                                >
                                                    <td className="border border-[#f0f0f0] px-4 py-3 font-medium text-[#181c23]">
                                                        {tariff.period}
                                                    </td>
                                                    {tablePlans.map((plan) => (
                                                        <td
                                                            key={plan.key}
                                                            className="border border-[#f0f0f0] px-4 py-3 text-center text-[#4a5564]"
                                                        >
                                                            {formatPrice(
                                                                tariff[
                                                                    plan.key
                                                                ]
                                                            )}{" "}
                                                            {t("currency")}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="md:hidden space-y-4">
                                    {tariffs.map((tariff) => (
                                        <div
                                            key={tariff.period}
                                            className="border border-[#f0f0f0] rounded-lg p-4 bg-[#fcfcfc]"
                                        >
                                            <h3 className="font-semibold text-[#181c23] mb-3">
                                                {tariff.period}
                                            </h3>
                                            <div className="space-y-2 text-sm">
                                                {tablePlans.map((plan) => (
                                                    <div
                                                        key={plan.key}
                                                        className="flex justify-between"
                                                    >
                                                        <span className="text-[#a8a8a8]">
                                                            {plan.title} (
                                                            {plan.range}):
                                                        </span>
                                                        <span className="font-medium text-[#181c23]">
                                                            {formatPrice(
                                                                tariff[
                                                                    plan.key
                                                                ]
                                                            )}{" "}
                                                            {t("currency")}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {notes.map((paragraph, index) => (
                                    <p key={paragraph}>
                                        <strong>{index + 11}.</strong>{" "}
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#f0f0f0]">
                                <h2 className="text-xl font-bold text-[#181c23] mb-4">
                                    {t("contactTitle")}
                                </h2>
                                <p className="mb-3">{t("contactIntro")}</p>
                                <ul className="ml-6 space-y-2 list-disc">
                                    <li>
                                        {t("emailPrefix")}{" "}
                                        <a
                                            href="mailto:crmmodme@gmail.com"
                                            className="text-[#ff8000] hover:underline"
                                        >
                                            crmmodme@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        {t("telegramPrefix")}{" "}
                                        <a
                                            href="https://modme.uz"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#ff8000] hover:underline"
                                        >
                                            https://modme.uz
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
