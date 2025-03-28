"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import StatisticsSection from "@/components/StatisticsSection";

const TestimonialsSection = dynamic(
    () => import("@/components/TestimonialsSection"),
    {
        loading: () => (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ff8000]"></div>
            </div>
        ),
        ssr: false,
    }
);

const WithdrawMethodSection = dynamic(
    () => import("@/components/WithdrawMethodSection"),
    {
        loading: () => (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ff8000]"></div>
            </div>
        ),
        ssr: false,
    }
);

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
    loading: () => (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ff8000]"></div>
        </div>
    ),
    ssr: false,
});

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-hidden"
        >
            <HeroSection />
            <ClientsSection />
            <FeaturesSection />
            <WithdrawMethodSection />
            <AdvantagesSection />
            <StatisticsSection />
            <TestimonialsSection />
            <FAQSection />
        </motion.div>
    );
}
