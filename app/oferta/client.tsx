"use client";

import Link from "next/link";

export default function OfertaClient() {
    return (
        <div className="min-h-screen bg-[#fcfcfc] text-[#181c23] flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
                <div className="max-w-[600px] w-full bg-white rounded-2xl shadow-xl p-10 text-center border border-[#f0f0f0]">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#ff8000]">
                        Oferta
                    </h1>
                    <p className="text-lg text-[#232b39] mb-8">
                        Ushbu sahifada ModmeCRM xizmatidan foydalanish uchun
                        ommaviy oferta shartlari bilan tanishishingiz mumkin.
                        Barcha foydalanuvchilar ushbu shartlarga rozilik
                        bildirgan holda platformadan foydalanadilar.
                    </p>
                    <div className="text-left text-[#232b39] space-y-4 text-sm mb-8">
                        <p>
                            <span className="font-bold text-[#181c23]">1.</span>{" "}
                            ModmeCRM platformasidan foydalanish uchun ro'yxatdan
                            o'tganingizdan so'ng, barcha xizmatlar va
                            imkoniyatlardan foydalanishingiz mumkin.
                        </p>
                        <p>
                            <span className="font-bold text-[#181c23]">2.</span>{" "}
                            To'lovlar va xizmatlar narxi platformada
                            ko'rsatilgan tartibda amalga oshiriladi.
                        </p>
                        <p>
                            <span className="font-bold text-[#181c23]">3.</span>{" "}
                            Platformadan foydalanish davomida barcha ma'lumotlar
                            maxfiyligi va xavfsizligi kafolatlanadi.
                        </p>
                        <p>
                            <span className="font-bold text-[#181c23]">4.</span>{" "}
                            Barcha savollar va murojaatlar uchun{" "}
                            <Link
                                href="/support"
                                className="text-[#ff8000] hover:underline"
                            >
                                qo'llab-quvvatlash
                            </Link>{" "}
                            bo'limiga murojaat qilishingiz mumkin.
                        </p>
                    </div>
                    <Link href="/" className="inline-block mt-4">
                        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#ffd03d] to-[#ff8000] text-white font-bold text-base transition-all hover:opacity-90">
                            Bosh sahifaga qaytish
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
