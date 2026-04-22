import { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
    title: "Biz haqimizda | Modme",
    description:
        "Modme - O'zbekistondagi eng yirik o'quv markazlari uchun maxsus yaratilgan CRM tizimi. Bizning jamoamiz va missiyamiz haqida batafsil ma'lumot.",
    keywords:
        "Modme, o'quv markazlari, CRM tizimi, O'zbekiston, ta'lim texnologiyalari",
};

export default function AboutPage() {
    return <AboutClient />;
}
