"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const testimonials = [
    {
        id: 1,
        name: "Aziza Karimova",
        position: "O'quv markazi direktori",
        avatar: "/avatars/avatar1.jpg",
        comment:
            "Modme platformasi bizning o'quv markazimizni to'liq digitalizatsiya qildi. Endi barcha jarayonlar avtomatlashtirilgan va tizimli.",
        center: "Smart Education",
    },
    {
        id: 2,
        name: "Jasur Rahimov",
        position: "O'qituvchi",
        avatar: "/avatars/avatar2.jpg",
        comment:
            "Platforma orqali darslarni tashkil qilish va o'quvchilarni nazorat qilish juda qulay. Vaqt tejamkorligi katta.",
        center: "Global Education",
    },
    {
        id: 3,
        name: "Malika Yusupova",
        position: "Administrator",
        avatar: "/avatars/avatar3.jpg",
        comment:
            "Modme tizimi orqali to'lovlarni qabul qilish va hisobotlarni tayyorlash juda oson. Mijozlar ham mamnun.",
        center: "Bright Future",
    },
    {
        id: 4,
        name: "Dilshod Toshmatov",
        position: "O'quv markazi asoschisi",
        avatar: "/avatars/avatar4.jpg",
        comment:
            "Platforma bizga yangi filiallarimizni samarali boshqarish imkonini berdi. Barcha ma'lumotlar bir joyda.",
        center: "Elite Education",
    },
    {
        id: 5,
        name: "Nargiza Alimova",
        position: "O'qituvchi",
        avatar: "/avatars/avatar5.jpg",
        comment:
            "Darslarni tashkil qilish, uy vazifalarini berish va baholash jarayoni juda qulay. O'quvchilar ham platformani yaxshi ko'rishadi.",
        center: "Success Academy",
    },
    {
        id: 6,
        name: "Shahzod Rahimov",
        position: "O'quv markazi direktori",
        avatar: "/avatars/avatar6.jpg",
        comment:
            "Modme platformasi bizga zamonaviy ta'lim berish imkonini berdi. Barcha jarayonlar shaffof va tizimli.",
        center: "Modern Education",
    },
];

const TestimonialsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeTestimonial = testimonials[activeTab];

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Mijozlarimiz fikrlari
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Modme platformasi haqida
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Tabs */}
                    <div className="space-y-4">
                        {testimonials.map((testimonial, index) => (
                            <motion.button
                                key={testimonial.id}
                                onClick={() => setActiveTab(index)}
                                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                                    activeTab === index
                                        ? "bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-white shadow-lg"
                                        : "bg-white hover:bg-gray-50"
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm opacity-80">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Testimonial */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTestimonial.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd03d]/5 to-[#ff8000]/5 rounded-2xl" />
                            <div className="relative p-8">
                                <div className="mb-6">
                                    <svg
                                        className="w-12 h-12 text-[#ff8000] opacity-50"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                </div>
                                <p className="text-xl md:text-2xl text-[#080a0a] mb-8 leading-relaxed">
                                    {activeTestimonial.comment}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-semibold text-lg text-[#080a0a]">
                                            {activeTestimonial.name}
                                        </h4>
                                        <p className="text-[#a8a8a8]">
                                            {activeTestimonial.position}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-[#ff8000]">
                                            {activeTestimonial.center}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
