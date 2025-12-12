import type { Metadata } from "next";
import VacanciesClient from "./client";

export const metadata: Metadata = {
    title: "Vakansiyalar - Modme",
    description:
        "Modme jamoasiga qo'shiling! Bizning ochiq vakansiyalarimiz bilan tanishing va karyerangizni biz bilan birga rivojlantiring.",
    openGraph: {
        title: "Vakansiyalar - Modme",
        description:
            "Modme jamoasiga qo'shiling! Bizning ochiq vakansiyalarimiz bilan tanishing va karyerangizni biz bilan birga rivojlantiring.",
        url: "https://modme.uz/vacancies",
    },
};

export default function VacanciesPage() {
    return <VacanciesClient />;
}

