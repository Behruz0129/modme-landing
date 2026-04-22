import { Metadata } from "next";
import TechnicalSupportPolicyClient from "./client";

export const metadata: Metadata = {
    title: "Приложение № 2 — Политика технической поддержки (SLA) | Modme",
    description:
        "Приложение № 2 — Политика технической поддержки (SLA) ООО «MODME» - официальная политика технической поддержки платформы Modme CRM.",
    keywords:
        "Modme SLA, политика технической поддержки, Modme CRM поддержка, техническая поддержка",
};

export default function TechnicalSupportPolicyPage() {
    return <TechnicalSupportPolicyClient />;
}

