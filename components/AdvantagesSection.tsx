import { Headphones, MessageSquare, Shield, UserCheck } from "lucide-react";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const AdvantagesSection = () => {
    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12 mb-14 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] max-w-md lg:max-w-lg">
                            Biz Bilan Nimalarga Ega Bo'lasiz?
                        </h2>
                        <p className="text-base md:text-lg text-[#a8a8a8] max-w-md lg:max-w-lg">
                            ModMe – bu sizning o'quv markazingiz uchun eng
                            yaxshi tanlov! Biz sizga shunchaki platforma emas,
                            balki to'liq xizmat va qulay tajriba taqdim etamiz
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Cards Grid with Plus Lines */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#ff8000]/30 to-transparent hidden md:block z-0 transform -translate-x-1/2" />

                    {/* Horizontal Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff8000]/30 to-transparent hidden md:block z-0" />

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                        {/* Card 1 - 1:1 */}
                        <ScrollAnimation
                            direction="up"
                            delay={0.2}
                            threshold={0.5}
                        >
                            <div className="relative">
                                <div className="flex flex-col items-start">
                                    <div className="w-12 h-12 bg-[#ff8000]/10 rounded-lg flex items-center justify-center mb-4">
                                        <Headphones className="w-6 h-6 text-[#ff8000]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080a0a] mb-3">
                                        Doimiy Texnik Yordam
                                    </h3>
                                    <p className="text-[#a8a8a8]">
                                        Har kuni 9:00 dan 20:00 gacha texnik
                                        yordam xizmati orqali har qanday texnik
                                        muammolaringizni hal qilishda yordam
                                        beramiz. Bizning mutaxassislarimiz sizga
                                        ish vaqtida doimiy qo'llab-quvvatlash
                                        ko'rsatishadi
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Card 2 - 1:2 */}
                        <ScrollAnimation
                            direction="up"
                            delay={0.3}
                            threshold={0.5}
                        >
                            <div className="relative">
                                <div className="flex flex-col items-start">
                                    <div className="w-12 h-12 bg-[#ff8000]/10 rounded-lg flex items-center justify-center mb-4">
                                        <MessageSquare className="w-6 h-6 text-[#ff8000]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080a0a] mb-3">
                                        Bepul Konsultatsiya
                                    </h3>
                                    <p className="text-[#a8a8a8]">
                                        O'quv markazingizni rivojlantirish uchun
                                        bepul konsultatsiya xizmatini taqdim
                                        etamiz. Bizning mutaxassislarimiz sizga
                                        eng yaxshi yechimlarni taklif qilishadi
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Card 3 - 2:1 */}
                        <ScrollAnimation
                            direction="up"
                            delay={0.4}
                            threshold={0.5}
                        >
                            <div className="relative">
                                <div className="flex flex-col items-start">
                                    <div className="w-12 h-12 bg-[#ff8000]/10 rounded-lg flex items-center justify-center mb-4">
                                        <Shield className="w-6 h-6 text-[#ff8000]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080a0a] mb-3">
                                        Xavfsizlik
                                    </h3>
                                    <p className="text-[#a8a8a8]">
                                        3 tomonlama xavfsizlik tizimi: yuridik
                                        (shartnomalar va huquqiy himoya), texnik
                                        (ma'lumotlarni shifrlash va himoya) va
                                        reputatsiya (o'quvchilar va hamkorlar
                                        ishonchi) jihatdan to'liq himoyalangan
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Card 4 - 2:2 */}
                        <ScrollAnimation
                            direction="up"
                            delay={0.5}
                            threshold={0.5}
                        >
                            <div className="relative">
                                <div className="flex flex-col items-start">
                                    <div className="w-12 h-12 bg-[#ff8000]/10 rounded-lg flex items-center justify-center mb-4">
                                        <UserCheck className="w-6 h-6 text-[#ff8000]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#080a0a] mb-3">
                                        Qulay Interfeys
                                    </h3>
                                    <p className="text-[#a8a8a8]">
                                        Intuitiv va foydalanuvchi uchun qulay
                                        interfeys orqali o'quv markazingizni
                                        boshqarish oson va qiziqarli. Har qanday
                                        yoshdagi foydalanuvchilar uchun
                                        mo'ljallangan
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
