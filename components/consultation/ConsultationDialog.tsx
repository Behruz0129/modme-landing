"use client";

import { useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Loader2, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

const LEAD_ENDPOINT = "https://api.modmedev.uz/v1/amocrm/lead";

type FormValues = {
    contact_name: string;
    learning_center_name: string;
    phone: string;
};

function trackLead() {
    if (typeof window === "undefined") return;
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void })
        .fbq;
    fbq?.("track", "Lead");
}

export default function ConsultationDialog({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const t = useTranslations("consultation");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const schema = useMemo(
        () =>
            z.object({
                contact_name: z
                    .string()
                    .trim()
                    .min(2, { message: t("errors.nameRequired") }),
                learning_center_name: z
                    .string()
                    .trim()
                    .min(2, { message: t("errors.centerRequired") }),
                phone: z
                    .string()
                    .min(1, { message: t("errors.phoneRequired") })
                    .regex(/^\d{9}$/, { message: t("errors.phoneInvalid") }),
            }),
        [t]
    );

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            contact_name: "",
            learning_center_name: "",
            phone: "",
        },
    });

    const onSubmit = async (values: FormValues) => {
        setIsSubmitting(true);
        try {
            const res = await fetch(LEAD_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contact_name: values.contact_name.trim(),
                    learning_center_name: values.learning_center_name.trim(),
                    phone: `+998${values.phone}`,
                }),
            });

            if (!res.ok) throw new Error("Request failed");

            trackLead();
            toast.success(t("success"));
            reset();
            onOpenChange(false);
        } catch {
            toast.error(t("error"));
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputBase =
        "w-full px-4 py-3 rounded-xl border bg-white text-[#181c23] placeholder:text-[#c2c2c2] outline-none transition-colors focus:border-[#ff8000] focus:ring-2 focus:ring-[#ff8000]/30";

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 sm:p-8">
                    <div className="mb-6 pr-8">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-[#181c23]">
                            <PhoneCall className="h-6 w-6" />
                        </div>
                        <Dialog.Title className="text-2xl font-bold text-[#181c23]">
                            {t("title")}
                        </Dialog.Title>
                        <Dialog.Description className="mt-2 text-sm text-[#a8a8a8]">
                            {t("subtitle")}
                        </Dialog.Description>
                    </div>

                    <Dialog.Close
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#a8a8a8] transition-colors hover:bg-[#f5f5f5] hover:text-[#181c23]"
                        aria-label={t("submit")}
                    >
                        <X className="h-5 w-5" />
                    </Dialog.Close>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                        noValidate
                    >
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-[#181c23]">
                                {t("nameLabel")}
                            </label>
                            <input
                                type="text"
                                autoComplete="name"
                                placeholder={t("namePlaceholder")}
                                className={`${inputBase} ${
                                    errors.contact_name
                                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/30"
                                        : "border-[#e5e5e5]"
                                }`}
                                {...register("contact_name")}
                            />
                            {errors.contact_name && (
                                <p className="mt-1.5 text-xs text-red-500">
                                    {errors.contact_name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-[#181c23]">
                                {t("centerLabel")}
                            </label>
                            <input
                                type="text"
                                autoComplete="organization"
                                placeholder={t("centerPlaceholder")}
                                className={`${inputBase} ${
                                    errors.learning_center_name
                                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/30"
                                        : "border-[#e5e5e5]"
                                }`}
                                {...register("learning_center_name")}
                            />
                            {errors.learning_center_name && (
                                <p className="mt-1.5 text-xs text-red-500">
                                    {errors.learning_center_name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-[#181c23]">
                                {t("phoneLabel")}
                            </label>
                            <div className="flex items-stretch gap-2">
                                <span className="flex items-center rounded-xl border border-[#e5e5e5] bg-[#f7f7f7] px-3 text-sm font-medium text-[#727272]">
                                    +998
                                </span>
                                <Controller
                                    control={control}
                                    name="phone"
                                    render={({ field }) => (
                                        <input
                                            type="tel"
                                            inputMode="numeric"
                                            autoComplete="tel-national"
                                            maxLength={9}
                                            placeholder={t("phonePlaceholder")}
                                            className={`${inputBase} flex-1 ${
                                                errors.phone
                                                    ? "border-red-400 focus:border-red-400 focus:ring-red-400/30"
                                                    : "border-[#e5e5e5]"
                                            }`}
                                            value={field.value}
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.value
                                                        .replace(/\D/g, "")
                                                        .slice(0, 9)
                                                )
                                            }
                                            onBlur={field.onBlur}
                                        />
                                    )}
                                />
                            </div>
                            {errors.phone && (
                                <p className="mt-1.5 text-xs text-red-500">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ffd03d] to-[#ff8000] px-6 py-3.5 text-base font-bold text-[#181c23] shadow-lg shadow-[#ffd03d]/40 transition-all hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting && (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            )}
                            {isSubmitting ? t("submitting") : t("submit")}
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
