import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AmocrmIntegrationClient from "./client";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "amocrmIntegration.metadata",
    });

    return {
        title: t("title"),
        description: t("description"),
        keywords: t("keywords"),
    };
}

export default function AmocrmIntegrationPage() {
    return <AmocrmIntegrationClient />;
}
