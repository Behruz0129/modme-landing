import { Metadata } from "next";
import OfertaClient from "./client";

export const metadata: Metadata = {
    title: "Публичная оферта | Modme",
    description:
        "Публичная оферта ООО «MODME» - официальные условия использования платформы Modme CRM.",
    keywords:
        "Modme оферта, публичная оферта, условия использования, Modme CRM договор",
};

export default function OfertaPage() {
    return <OfertaClient />;
}

