"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, MessageCircle, Zap } from "lucide-react";

type Step = {
    n: 1 | 2 | 3 | 4;
    titleKey: "step1" | "step2" | "step3" | "step4";
    image: string;
    altKey: "step1" | "step2" | "step3" | "step4";
};

const STEPS: Step[] = [
    {
        n: 1,
        titleKey: "step1",
        image: "/images/integrations/kommo/step-1.png",
        altKey: "step1",
    },
    {
        n: 2,
        titleKey: "step2",
        image: "/images/integrations/kommo/step-2.png",
        altKey: "step2",
    },
    {
        n: 3,
        titleKey: "step3",
        image: "/images/integrations/kommo/step-3.png",
        altKey: "step3",
    },
    {
        n: 4,
        titleKey: "step4",
        image: "/images/integrations/kommo/step-4.png",
        altKey: "step4",
    },
];

export default function KommoIntegrationClient() {
    const t = useTranslations("kommoIntegration");

    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-20">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fff8e8] via-white to-[#fff8e8] pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-[420px] h-[420px] bg-[#ff8000]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] bg-[#ffd03d]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff8000]/10 text-[#ff8000] text-sm font-semibold uppercase tracking-wider mb-6">
                            <Zap className="w-4 h-4" />
                            {t("badge")}
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181c23] max-w-4xl leading-tight mb-6">
                            {t("heading")}
                        </h1>
                        <p className="text-lg sm:text-xl text-[#4a5564] max-w-3xl leading-relaxed">
                            {t("subtitle")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12 rounded-3xl overflow-hidden border border-[#f0f0f0] bg-white shadow-2xl shadow-[#ff8000]/10"
                    >
                        <Image
                            src="/images/integrations/kommo/hero.png"
                            alt={t("imageAlt.hero")}
                            width={1920}
                            height={980}
                            priority
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#181c23] mb-4">
                        {t("stepsHeading")}
                    </h2>
                    <p className="text-lg text-[#4a5564] max-w-2xl mx-auto">
                        {t("stepsSubheading")}
                    </p>
                </motion.div>

                <div className="space-y-16 lg:space-y-24">
                    {STEPS.map((step, index) => {
                        const reverse = index % 2 === 1;
                        return (
                            <motion.div
                                key={step.n}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6 }}
                                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                            >
                                <div className="space-y-5 lg:col-span-4">
                                    <div className="inline-flex items-center gap-3">
                                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#ffd03d] to-[#ff8000] text-white font-bold text-lg shadow-lg shadow-[#ff8000]/30">
                                            {step.n}
                                        </span>
                                        <span className="text-sm font-semibold text-[#ff8000] uppercase tracking-widest">
                                            {t("stepLabel", { n: step.n })}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#181c23] leading-snug">
                                        {t(`steps.${step.titleKey}.title`)}
                                    </h3>
                                    <p className="text-base sm:text-lg text-[#4a5564] leading-relaxed">
                                        {t(`steps.${step.titleKey}.description`)}
                                    </p>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative rounded-2xl overflow-hidden border border-[#f0f0f0] bg-white shadow-xl shadow-[#181c23]/5 lg:col-span-8"
                                >
                                    <Image
                                        src={step.image}
                                        alt={t(`imageAlt.${step.altKey}`)}
                                        width={1920}
                                        height={980}
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#181c23] to-[#2a2f3a] p-8 sm:p-12 lg:p-16"
                >
                    <div className="absolute -top-24 -right-24 w-[360px] h-[360px] bg-[#ff8000]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] bg-[#ffd03d]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative max-w-3xl mx-auto text-center space-y-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#ffd03d] text-sm font-semibold uppercase tracking-wider">
                            <CheckCircle2 className="w-4 h-4" />
                            {t("result.heading")}
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                            {t("result.description")}
                        </h2>
                        <div className="flex items-start gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 text-left">
                            <CheckCircle2 className="w-5 h-5 text-[#ffd03d] mt-0.5 shrink-0" />
                            <p className="text-base text-white/80 leading-relaxed">
                                {t("result.note")}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl border border-[#f0f0f0] bg-white p-8 sm:p-12 text-center"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#181c23] mb-4">
                        {t("cta.heading")}
                    </h3>
                    <p className="text-base sm:text-lg text-[#4a5564] max-w-2xl mx-auto mb-8">
                        {t("cta.description")}
                    </p>
                    <a
                        href="https://t.me/modme_support"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-white font-semibold text-base hover:shadow-xl hover:shadow-[#ff8000]/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <MessageCircle className="w-5 h-5" />
                        {t("cta.button")}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
