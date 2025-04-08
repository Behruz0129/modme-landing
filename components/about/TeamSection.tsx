"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { Linkedin, Twitter } from "lucide-react";

const team = [
    {
        name: "Jasur Toshmatov",
        position: "CEO",
        image: "/about/team-ceo.jpg",
        description:
            "Kompaniya rahbari va strategik yo'nalishlarni belgilovchi",
    },
    {
        name: "Malika Yusupova",
        position: "Product Manager",
        image: "/about/team-pm.jpg",
        description:
            "Platforma rivojlanishini boshqaruvchi va yangi funksiyalarni loyihalovchi",
    },
    {
        name: "Aziz Karimov",
        position: "Sales Manager",
        image: "/about/team-sales.jpg",
        description:
            "Mijozlar bilan ishlash va yangi hamkorliklarni rivojlantirish",
    },
    {
        name: "Dilshod Rahimov",
        position: "Support Manager",
        image: "/about/team-support.jpg",
        description: "Mijozlar uchun texnik yordam va qo'llab-quvvatlash",
    },
    {
        name: "Nargiza Alimova",
        position: "Support & Designer",
        image: "/about/team-support-design.jpg",
        description: "Dizayn va mijozlar qo'llab-quvvatlash bo'limi",
    },
    {
        name: "Shahzod Toshmatov",
        position: "Team Lead",
        image: "/about/team-lead.jpg",
        description: "Dasturiy ta'minot jamoasini boshqaruvchi",
    },
    {
        name: "Jasur Alimov",
        position: "Backend Developer",
        image: "/about/team-backend-1.jpg",
        description: "Backend dasturchi",
    },
    {
        name: "Malika Karimova",
        position: "Backend Developer",
        image: "/about/team-backend-2.jpg",
        description: "Backend dasturchi",
    },
    {
        name: "Aziz Yusupov",
        position: "Backend Developer",
        image: "/about/team-backend-3.jpg",
        description: "Backend dasturchi",
    },
    {
        name: "Dilshod Alimov",
        position: "Frontend Developer",
        image: "/about/team-frontend.jpg",
        description: "Frontend dasturchi",
    },
];

const TeamSection = () => {
    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Jamoa
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Modme platformasini yaratgan va rivojlantirgan
                            mutaxassislar
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-sm transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="relative p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080a0a] mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#ff8000] font-medium mb-3">
                                        {member.position}
                                    </p>
                                    <p className="text-[#a8a8a8]">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
