import { Metadata } from "next";
import PrivacyPolicyClient from "./client";

export const metadata: Metadata = {
    title: "Приложение № 3 — Политика конфиденциальности и обработки персональных данных | Modme",
    description:
        "Приложение № 3 — Политика конфиденциальности и обработки персональных данных ООО «MODME» - официальная политика конфиденциальности платформы Modme CRM.",
    keywords:
        "Modme политика конфиденциальности, обработка персональных данных, Modme CRM конфиденциальность",
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}

