import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PrivacyPolicyClient from "./client";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "privacyPolicy.consent.metadata",
    });

    return {
        title: t("title"),
        description: t("description"),
    };
}

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}

