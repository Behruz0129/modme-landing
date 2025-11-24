"use client";

const legalInfo = [
    { label: "MChJ", value: `"MODME"` },
    {
        label: "Manzil",
        value: "Toshkent shahri, Mirzo Ulug‘bek tumani, Navnihon MFY, Tepamasjid ko‘chasi, 4a-uy",
    },
    { label: "STIR", value: "307442900" },
];

export default function ResourcesClient() {
    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <section className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12">
                <p className="text-sm font-semibold text-[#ff8000] uppercase tracking-widest mb-4">
                    Resurslar
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#181c23] mb-6">
                    Huquqiy ma&apos;lumotlar
                </h1>
                <p className="text-lg text-[#4a5564] leading-relaxed mb-10">
                    Modme CRM platformasi faoliyati bilan bog&apos;liq barcha rasmiy va huquqiy
                    ma&apos;lumotlar bilan tanishing. Quyidagi ma&apos;lumotlar kompaniyamizning asosiy
                    rekvizitlarini taqdim etadi.
                </p>

                <div className="space-y-6">
                    {legalInfo.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-[#f0f0f0] bg-[#fcfcfc] p-5"
                        >
                            <p className="text-sm text-[#a8a8a8] uppercase tracking-wide mb-2">
                                {item.label}
                            </p>
                            <p className="text-xl font-semibold text-[#181c23]">{item.value}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

