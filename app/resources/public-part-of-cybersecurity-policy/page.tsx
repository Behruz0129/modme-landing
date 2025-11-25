import { Metadata } from "next";
import CybersecurityPolicyClient from "./client";

export const metadata: Metadata = {
    title: "Приложение № 4 — Публичная часть Политики кибербезопасности | Modme",
    description:
        "Приложение № 4 — Публичная часть Политики кибербезопасности ООО «MODME» - официальная политика кибербезопасности платформы Modme CRM.",
    keywords:
        "Modme кибербезопасность, политика кибербезопасности, Modme CRM безопасность",
};

export default function CybersecurityPolicyPage() {
    return <CybersecurityPolicyClient />;
}

