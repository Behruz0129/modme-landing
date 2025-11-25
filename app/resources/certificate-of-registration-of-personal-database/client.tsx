"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CertificateClient() {
    const pdfPath = "/certificate-of-registration-of-personal-database.pdf";
    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12"
                >
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-[#ff8000] hover:text-[#ff9831] transition-colors mb-6 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Resurslarga qaytish
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#181c23] mb-8">
                        Свидетельство о регистрации базы персональных данных
                    </h1>

                    <div className="border border-[#f0f0f0] rounded-xl overflow-hidden bg-white">
                        <iframe
                            src={`${pdfPath}#toolbar=1&navpanes=1&scrollbar=1`}
                            className="w-full h-[800px] border-0"
                            title="Свидетельство о регистрации базы персональных данных"
                        />
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

