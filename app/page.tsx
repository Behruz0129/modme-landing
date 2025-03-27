"use client";

import { motion } from "framer-motion";

import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WithdrawMethodSection from "@/components/WithdrawMethodSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

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
