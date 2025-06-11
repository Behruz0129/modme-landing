import { Metadata } from "next";
import PricesClient from "./client";

export const metadata: Metadata = {
    title: "Narxlar | Modme",
    description:
        "Modme - o'quv markazlari uchun eng samarali CRM tizimi. Turli o'lchamdagi o'quv markazlari uchun moslashtirilgan tariflar va imkoniyatlar.",
    keywords:
        "Modme narxlari, o'quv markazlari CRM, CRM tizimi narxlari, o'quv markazlari uchun CRM, arzon CRM",
};

export default function PricesPage() {
    return <PricesClient />;
}
