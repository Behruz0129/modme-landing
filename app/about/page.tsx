"use client";

import { motion } from "framer-motion";
import HistorySection from "@/components/about/HistorySection";
import FoundersSection from "@/components/about/FoundersSection";
import TeamSection from "@/components/about/TeamSection";
import MissionSection from "@/components/about/MissionSection";

export default function AboutPage() {
    return (
        <main className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <HistorySection />
                <FoundersSection />
                <TeamSection />
                <MissionSection />
            </motion.div>
        </main>
    );
}
