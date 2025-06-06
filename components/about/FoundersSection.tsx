"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import {
    Instagram,
    Send,
    GraduationCap,
    Rocket,
    Building2,
    School,
} from "lucide-react";

const founders = [
    {
        name: "Jahongir Pulatov",
        position: "Asoschi va CEO",
        image: "/images/about/founder-1.png",
        description: [
            {
                icon: <GraduationCap className="w-5 h-5" />,
                text: '"Cambridge" o\'quv markazi asoschisi',
            },
            {
                icon: <School className="w-5 h-5" />,
                text: '"Jahon School" loyihasi asoschisi',
            },
            {
                icon: <Rocket className="w-5 h-5" />,
                text: '"Selfmade" loyihasi asoschisi',
            },
            {
                icon: <Building2 className="w-5 h-5" />,
                text: '"Modme" loyihasi asoschisi',
            },
        ],
        social: {
            telegram: "https://t.me/jahongir_pulatov_blog",
            instagram: "https://www.instagram.com/jakhongir_pulatov/",
        },
    },
    {
        name: "Ruslan Yuldashev",
        position: "Asoschi va COO",
        image: "/images/about/founder-2.png",
        description: [
            {
                icon: <GraduationCap className="w-5 h-5" />,
                text: '"Mars IT School" asoschisi',
            },
            {
                icon: <Building2 className="w-5 h-5" />,
                text: '"Modme" loyihasi asoschisi',
            },
            {
                icon: <Rocket className="w-5 h-5" />,
                text: "Yandex Education (Silicon Valley) sobiq xodimi",
            },
        ],
        social: {
            telegram: "https://t.me/ruslanonline",
            instagram: "https://www.instagram.com/monitoringe/",
        },
    },
];

const FoundersSection = () => {
    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Asoschilar
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Modme platformasini yaratgan insonlar
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd03d]/5 to-[#ff8000]/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="relative p-8">
                                <div className="flex flex-col items-center space-y-6">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        width={300}
                                        height={300}
                                        className="object-cover"
                                    />
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-[#080a0a] mb-2">
                                            {founder.name}
                                        </h3>
                                        <p className="text-[#ff8000] font-medium mb-4">
                                            {founder.position}
                                        </p>
                                        <div className="space-y-3 mb-6">
                                            {founder.description.map(
                                                (item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-3 text-[#a8a8a8]"
                                                    >
                                                        <span className="text-[#ff8000]">
                                                            {item.icon}
                                                        </span>
                                                        <span>{item.text}</span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <div className="flex justify-center space-x-4">
                                            <a
                                                href={founder.social.telegram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#a8a8a8] hover:text-[#ff8000] transition-colors"
                                            >
                                                <Send className="w-6 h-6" />
                                            </a>
                                            <a
                                                href={founder.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#a8a8a8] hover:text-[#ff8000] transition-colors"
                                            >
                                                <Instagram className="w-6 h-6" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
