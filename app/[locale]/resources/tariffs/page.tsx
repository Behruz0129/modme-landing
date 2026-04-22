import { Metadata } from "next";
import TariffsClient from "./client";

export const metadata: Metadata = {
    title: "Приложение № 1 — Тарифы | Modme",
    description:
        "Приложение № 1 — Тарифы ООО «MODME» - официальные тарифные планы платформы Modme CRM.",
    keywords:
        "Modme тарифы, тарифные планы, Modme CRM цены, приложение тарифы",
};

export default function TariffsPage() {
    return <TariffsClient />;
}

