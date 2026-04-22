import { Headphones, MessageSquare, Shield, UserCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import ScrollAnimation from "@/lib/animations/scroll-animation";

const AdvantagesSection = () => {
    const t = useTranslations("advantages");

    const cards = [
        {
            icon: Headphones,
            title: t("support.title"),
            description: t("support.description"),
        },
        {
            icon: MessageSquare,
            title: t("consultation.title"),
            description: t("consultation.description"),
        },
        {
            icon: Shield,
            title: t("security.title"),
            description: t("security.description"),
        },
        {
            icon: UserCheck,
            title: t("interface.title"),
            description: t("interface.description"),
        },
    ];

    return (
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" delay={0.1} threshold={0.5}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12 mb-14 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080a0a] max-w-md lg:max-w-lg">
                            {t("heading")}
                        </h2>
                        <p className="text-base md:text-lg text-[#a8a8a8] max-w-md lg:max-w-lg">
                            {t("description")}
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="relative">
                    <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#ff8000]/30 to-transparent hidden md:block z-0 transform -translate-x-1/2" />
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff8000]/30 to-transparent hidden md:block z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                        {cards.map((card, idx) => {
                            const Icon = card.icon;
                            return (
                                <ScrollAnimation
                                    key={idx}
                                    direction="up"
                                    delay={0.2 + idx * 0.1}
                                    threshold={0.5}
                                >
                                    <div className="relative">
                                        <div className="flex flex-col items-start">
                                            <div className="w-12 h-12 bg-[#ff8000]/10 rounded-lg flex items-center justify-center mb-4">
                                                <Icon className="w-6 h-6 text-[#ff8000]" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#080a0a] mb-3">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#a8a8a8]">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
