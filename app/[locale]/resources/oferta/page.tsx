import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import OfertaClient from "./client";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "resources.oferta.metadata",
    });

    return {
        title: t("title"),
        description: t("description"),
        keywords: t("keywords"),
    };
}

export default function OfertaPage() {
    return <OfertaClient />;
}

