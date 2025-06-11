import { Metadata } from "next";
import GamificationClient from "./client";

export const metadata: Metadata = {
    title: "Gamification | Modme",
    description:
        "Modme CRM gamification - o'quv markazlari uchun o'yinlashtirilgan tizim. O'quvchilarni rag'batlantirish va motivatsiya qilish uchun zamonaviy yechim.",
    keywords:
        "Modme CRM gamification, o'yinlashtirilgan tizim, o'quv markazlari, motivatsiya, rag'batlantirish",
};

export default function GamificationPage() {
    return <GamificationClient />;
}
