import { Metadata } from "next";
import SupportClient from "./client";

export const metadata: Metadata = {
    title: "Yordam Markazi | ModMe CRM",
    description:
        "Modme platformasi bo'yicha video darslar, to'liq qo'llanma va texnik yordam. Barcha yordam materiallari va qo'llanmalar.",
    keywords:
        "Modme CRM yordam, video darslar, qo'llanma, texnik yordam, o'quv markazlari CRM",
};

export default function SupportPage() {
    return <SupportClient />;
}
