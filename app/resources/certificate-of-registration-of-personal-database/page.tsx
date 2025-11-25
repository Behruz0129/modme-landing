import { Metadata } from "next";
import CertificateClient from "./client";

export const metadata: Metadata = {
    title: "Свидетельство о регистрации базы персональных данных | Modme",
    description:
        "Свидетельство о регистрации базы персональных данных ООО «MODME» - официальное свидетельство регистрации базы персональных данных платформы Modme CRM.",
    keywords:
        "Modme свидетельство, регистрация базы данных, персональные данные, Modme CRM регистрация",
};

export default function CertificatePage() {
    return <CertificateClient />;
}

