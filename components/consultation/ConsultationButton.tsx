"use client";

import { useConsultation } from "./ConsultationProvider";

export default function ConsultationButton({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { open } = useConsultation();

    return (
        <button type="button" onClick={open} className={className}>
            {children}
        </button>
    );
}
