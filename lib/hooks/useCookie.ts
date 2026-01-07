"use client";

import { useState, useEffect, useCallback } from "react";

export function useCookie(key: string) {
    const [value, setValue] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getCookie = () => {
            const cookies = document.cookie.split(";");
            for (const cookie of cookies) {
                const [cookieKey, cookieValue] = cookie.trim().split("=");
                if (cookieKey === key) {
                    return decodeURIComponent(cookieValue);
                }
            }
            return null;
        };

        setValue(getCookie());
        setIsLoaded(true);
    }, [key]);

    const setCookie = useCallback(
        (newValue: string, days: number = 365) => {
            const expires = new Date();
            expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
            document.cookie = `${key}=${encodeURIComponent(newValue)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
            setValue(newValue);
        },
        [key]
    );

    const removeCookie = useCallback(() => {
        document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        setValue(null);
    }, [key]);

    return { value, setValue: setCookie, removeCookie, isLoaded };
}

