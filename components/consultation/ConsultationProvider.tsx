"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { Toaster } from "sonner";
import ConsultationDialog from "./ConsultationDialog";

type ConsultationContextValue = {
    open: () => void;
    close: () => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

export function ConsultationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    const value = useMemo(() => ({ open, close }), [open, close]);

    return (
        <ConsultationContext.Provider value={value}>
            {children}
            <ConsultationDialog open={isOpen} onOpenChange={setIsOpen} />
            <Toaster
                position="top-center"
                richColors
                toastOptions={{ style: { fontFamily: "inherit" } }}
            />
        </ConsultationContext.Provider>
    );
}

export function useConsultation(): ConsultationContextValue {
    const ctx = useContext(ConsultationContext);
    if (!ctx) {
        throw new Error(
            "useConsultation must be used within a ConsultationProvider"
        );
    }
    return ctx;
}
