import { cn } from "@/lib/utils";

export const heroButtonStyles = {
    primary: cn(
        "bg-gradient-to-r from-[#ffd03d] to-[#ff9831]",
        "hover:opacity-90 active:opacity-95",
        "text-[#080a0a] font-bold",
        "rounded-lg px-6 py-6",
        "text-base md:text-lg",
        "w-full sm:w-auto h-auto",
        "cursor-pointer",
        "shadow-lg shadow-[#ffd03d]/50",
        "hover:shadow-[#ffd03d]/70",
        "active:shadow-[#ffd03d]/30",
        "active:scale-[0.98]",
        "transition-all"
    ),
    secondary: cn(
        "border-[#ff8000] text-[#ff8000]",
        "hover:bg-orange-50 active:bg-orange-100",
        "font-bold rounded-lg",
        "px-4 py-6 text-base",
        "flex items-center justify-center gap-2",
        "w-full sm:w-auto h-auto",
        "cursor-pointer transition-all"
    ),
};

export const sectionStyles = {
    container: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",
    hero: "w-full overflow-visible pt-[120px] md:pt-[130px] lg:pt-[120px] pb-16 lg:pb-20 relative bg-[#fcfcfc]",
    content: "flex flex-col items-start max-w-4xl",
    heading:
        "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#080a0a] leading-tight mb-4 md:max-w-4xl lg:max-w-5xl",
    description: "text-base md:text-lg text-[#a8a8a8] max-w-3xl",
};
