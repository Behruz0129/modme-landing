"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { Linkedin, Twitter } from "lucide-react";

const founders = [
    {
        name: "Aziz Rahimov",
        position: "Asoschi va CEO",
        image: "/about/founder-1.jpg",
        description:
            "10+ yillik IT sohasidagi tajriba. O'zbekistondagi bir necha yirik IT kompaniyalarda ishlagan. Ta'lim sohasida innovatsiyalarni rivojlantirishga qiziqadi.",
        social: {
            linkedin: "https://linkedin.com/in/aziz-rahimov",
            twitter: "https://twitter.com/aziz_rahimov",
        },
    },
    {
        name: "Malika Karimova",
        position: "Asoschi va COO",
        image: "/about/founder-2.jpg",
        description:
            "Ta'lim sohasida 8+ yillik tajriba. Bir necha o'quv markazlarida direktor lavozimida ishlagan. Ta'lim jarayonlarini zamonaviylashtirishga e'tibor qaratadi.",
        social: {
            linkedin: "https://linkedin.com/in/malika-karimova",
            twitter: "https://twitter.com/malika_karimova",
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
                                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden">
                                        <Image
                                            src={founder.image}
                                            alt={founder.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-[#080a0a] mb-2">
                                            {founder.name}
                                        </h3>
                                        <p className="text-[#ff8000] font-medium mb-4">
                                            {founder.position}
                                        </p>
                                        <p className="text-[#a8a8a8] mb-6">
                                            {founder.description}
                                        </p>
                                        <div className="flex justify-center space-x-4">
                                            <a
                                                href={founder.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#a8a8a8] hover:text-[#ff8000] transition-colors"
                                            >
                                                <Linkedin className="w-6 h-6" />
                                            </a>
                                            <a
                                                href={founder.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#a8a8a8] hover:text-[#ff8000] transition-colors"
                                            >
                                                <Twitter className="w-6 h-6" />
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
