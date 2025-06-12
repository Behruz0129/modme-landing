import { Metadata } from "next";
import DemoClient from "./client";

export const metadata: Metadata = {
    title: "Demo olish | Modme",
    description:
        "ModMe CRM tizimini bepul sinab ko'ring. O'quv markazingiz uchun demo versiyani hoziroq oling va tizimning barcha imkoniyatlarini tekshiring.",
    keywords:
        "ModMe CRM demo, o'quv markazlari CRM, CRM tizimi demo, o'quv markazlari uchun CRM, bepul demo",
};

export default function DemoPage() {
    return <DemoClient />;
}
