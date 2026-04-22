import { Metadata } from "next";
import ContactsClient from "./client";

export const metadata: Metadata = {
    title: "Kontaktlar | Modme",
    description:
        "Modme CRM bilan bog'lanish. Telefon raqam, qo'llab-quvvatlash, loyiha menejeri va sotuv bo'limi bilan aloqa.",
    keywords:
        "Modme kontaktlar, Modme aloqa, Modme telefon, Modme qo'llab-quvvatlash",
};

export default function ContactsPage() {
    return <ContactsClient />;
}

