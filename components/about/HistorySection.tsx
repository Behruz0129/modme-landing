"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const history = [
    {
        year: "2020",
        title: "Tashkil etilish",
        description:
            "Modme 2020-yilda tashkil etilgan. Kompaniya asoschilari — Cambridge Learning Center asoschisi Jahongir Po‘latov va Mars IT School asoschisi Ruslan Yuldashevdir. Ular ta’lim markazlarining ichki jarayonlarini avtomatlashtirish va boshqarishni soddalashtirish maqsadida Modme CRM platformasini yaratdilar",
        image: "/images/about/history-1.jpg",
    },
    {
        year: "2021",
        title: "Loyihamiz break-even nuqtasiga yetdi",
        description:
            "Loyiha o‘z xarajatlarini o‘zi qoplaydi. 15 oyda 40 dan ortiq o‘quv markazi va 10 000+ talabaning hayotini osonlashtirgan tizimimiz uchun bu muhim bosqich bo‘ldi",
        image: "/images/about/history-1.2.jpg",
    },
    {
        year: "2022",
        title: "Tezkor o‘sish va ilk investitsiyalar",
        description:
            "2022-yilda Modme loyihasi sezilarli o‘sishni boshdan kechirdi. AmoCRM asoschisi Mixail Tokovinin kompaniyaga investitsiya kiritdi, bu esa loyiha rivojlanishiga turtki bo‘ldi",
        image: "/images/about/history-2.jpg",
    },
    {
        year: "2023",
        title: "Yirik investitsiya va xalqaro kengayish",
        description:
            "2023-yilda Modme UzVC fondidan 100,000 AQSh dollari miqdorida investitsiya oldi. Bu fond Londondagi Sturgeon Capital bilan hamkorlikda bo‘lib, Modme loyihasini 1,250,000 AQSh dollariga baholadi.\n\n" +
            "Shuningdek, kompaniya Indoneziya bozoriga chiqishni boshladi va xalqaro miqyosda o‘z faoliyatini kengaytirdi",
        image: "/images/about/history-3.jpg",
    },
    {
        year: "2024",
        title: "Mahsulotlar va xizmatlar kengayishi",
        description:
            "Modme o‘zining mobil ilovasini ishga tushirdi, bu orqali o‘quv markazlari o‘z logotipi va nomi bilan ilovadan foydalanish imkoniyatiga ega bo‘ldilar. Bundan tashqari, `Modme Audit` xizmati joriy etildi, bu xizmat orqali o‘quv markazlari o‘z faoliyatini tahlil qilish va samaradorligini oshirish imkoniyatiga ega bo‘ldilar",
        image: "/images/about/history-4.jpg",
    },
    {
        year: "2025",
        title: "Bugungi kunda",
        description:
            "Modme o‘zining CRM va LMS platformalari orqali o‘quv markazlarining marketing, moliya, sotuv va xizmat ko‘rsatish bo‘limlarini avtomatlashtirishga yordam bermoqda",
        image: "/images/about/history-5.jpg",
    },
];

const HistorySection = () => {
    return (
        <section className="w-full pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] mb-6">
                            Bizning tarix
                        </h2>
                        <p className="text-xl md:text-2xl text-[#a8a8a8]">
                            Kompaniyamizning rivojlanish bosqichlari
                        </p>
                    </div>
                </ScrollAnimation>

                {/* History Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#ffd03d] to-[#ff8000] hidden md:block" />

                    {/* Timeline Items */}
                    <div className="space-y-20 md:space-y-32">
                        {history.map((item, index) => (
                            <ScrollAnimation
                                key={`${index}-${item.year}`}
                                direction={index % 2 === 0 ? "left" : "right"}
                                delay={0.1 * index}
                                threshold={0.3}
                            >
                                <div className="relative">
                                    {/* Year Circle */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#ffd03d] to-[#ff8000] flex items-center justify-center text-white font-bold text-xl z-10">
                                        {item.year}
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                                            index % 2 === 0
                                                ? "md:flex-row-reverse"
                                                : ""
                                        }`}
                                    >
                                        {/* Image */}
                                        <div className="w-full md:w-1/2">
                                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="w-full md:w-1/2">
                                            <h3 className="text-2xl font-bold text-[#080a0a] mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#4A5564] mb-6">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
