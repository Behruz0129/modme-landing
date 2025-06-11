import { Metadata } from "next";
import OfertaClient from "./client";

export const metadata: Metadata = {
    title: "Oferta | Modme",
    description:
        "Modme CRM xizmatidan foydalanish uchun ommaviy oferta shartlari. Platformadan foydalanish shartlari va qoidalari.",
    keywords:
        "Modme CRM oferta, xizmat shartlari, foydalanish qoidalari, o'quv markazlari CRM",
};

export default function OfertaPage() {
    return <OfertaClient />;
}
