import { Metadata } from "next";
import ResourcesClient from "./client";

export const metadata: Metadata = {
    title: "Resurslar | Modme",
    description:
        "Modme CRM platformasining huquqiy ma'lumotlari va rasmiy hujjatlari. Kompaniya haqida barcha zarur ma'lumotlarni shu sahifada topishingiz mumkin.",
    keywords:
        "Modme huquqiy ma'lumotlar, Modme resurslar, Modme CRM hujjatlar, Modme kompaniya ma'lumotlari",
};

export default function ResourcesPage() {
    return <ResourcesClient />;
}

