"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimation from "@/lib/animations/scroll-animation";

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
                                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                                        <Image
                                            src={founder.image}
                                            alt={founder.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-[#080a0a] mb-2">
                                            {founder.name}
                                        </h3>
                                        <p className="text-[#ff8000] font-medium mb-4">
                                            {founder.position}
                                        </p>
                                        <p className="text-[#a8a8a8] mb-6">
                                            {founder.description}
                                        </p>
                                        <div className="flex justify-center md:justify-start space-x-4">
                                            <a
                                                href={founder.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#a8a8a8] hover:text-[#ff8000] transition-colors"
                                            >
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.976-.017-2.229-1.359-2.229-1.36 0-1.569 1.062-1.569 2.158v5.675h-3v-11h3v1.538h.042c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.857z" />
                                                </svg>
                                            </a>
                                            <a
                                                href={founder.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#a8a8a8] hover:text-[#ff8000] transition-colors"
                                            >
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
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
