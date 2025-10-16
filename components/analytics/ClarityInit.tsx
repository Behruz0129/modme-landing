"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityInit() {
    useEffect(() => {
        const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_ID;
        if (!clarityProjectId) return;
        try {
            Clarity.init(clarityProjectId);
        } catch (_) {
            // swallow errors in production to avoid breaking UI
        }
    }, []);

    return null;
}
