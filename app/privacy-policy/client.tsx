"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";

export default function PrivacyPolicyClient() {
    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12 mb-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#ff8000] hover:text-[#ff9831] transition-colors mb-6 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Bosh sahifaga qaytish
                    </Link>

                    <h1 className="text-2xl md:text-3xl font-bold text-[#181c23] mb-2 text-left">
                        СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
                    </h1>
                    <p className="text-sm text-[#a8a8a8] mb-8 text-left">
                        (редакция от «___» ____________ 2025 г.)
                    </p>

                    <div className="prose prose-lg max-w-none text-[#4a5564] text-left">
                        <p className="leading-relaxed mb-6">
                            Настоящее согласие предоставляется физическим лицом — представителем 
                            юридического лица или индивидуального предпринимателя, заключающего 
                            договор с ООО «MODME».
                        </p>

                        <div className="space-y-6">
                            <div>
                                <p className="leading-relaxed">
                                    <span className="font-semibold text-[#181c23]">1.</span>{" "}
                                    Настоящим я, субъект персональных данных — ___________________________________________ 
                                    (Ф.И.О., дата рождения, ПИНФЛ, паспорт / ID-карта), подтверждаю, что ознакомлен(а) 
                                    с Политикой обработки персональных данных ООО «MODME» (далее — MODME), размещённой 
                                    на официальном Сайте:{" "}
                                    <a
                                        href="https://modme.uz"
                                        className="text-[#ff8000] hover:underline"
                                    >
                                        https://modme.uz
                                    </a>
                                    , и даю безусловное и однозначное согласие ООО «MODME» (ИНН 307442900) на обработку 
                                    моих персональных данных в порядке и на условиях, установленных законодательством 
                                    Республики Узбекистан и указанной Политикой Исполнителя.
                                </p>
                            </div>

                            <div>
                                <p className="leading-relaxed mb-3">
                                    <span className="font-semibold text-[#181c23]">2.</span>{" "}
                                    Обработка моих персональных данных осуществляется в целях:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>регистрации и предоставления доступа к Сервису modme.uz;</li>
                                    <li>исполнения договорных обязательств между мной (или организацией, которую я представляю) и MODME;</li>
                                    <li>обеспечения функционирования CRM/LMS-платформы и связанных с ней сервисов (интеграций, уведомлений, API);</li>
                                    <li>направления уведомлений, технической информации и сообщений, связанных с использованием Сервиса;</li>
                                    <li>соблюдения требований законодательства Республики Узбекистан.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="leading-relaxed mb-3">
                                    <span className="font-semibold text-[#181c23]">3.</span>{" "}
                                    В рамках настоящего согласия могут обрабатываться следующие персональные данные:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>фамилия, имя, отчество;</li>
                                    <li>контактный телефон;</li>
                                    <li>адрес электронной почты;</li>
                                    <li>должность и наименование организации (для представителей юридических лиц);</li>
                                    <li>сведения, вводимые при регистрации или использовании функционала Сервиса (логи, IP-адрес, cookies, время посещения, технические данные устройства).</li>
                                </ul>
                            </div>

                            <div>
                                <p className="leading-relaxed">
                                    <span className="font-semibold text-[#181c23]">4.</span>{" "}
                                    MODME вправе осуществлять следующие действия (операции) с персональными данными: 
                                    сбор, запись, систематизацию, хранение, изменение, использование, обезличивание, 
                                    блокирование, удаление и уничтожение, а также передачу в пределах Республики 
                                    Узбекистан для целей, указанных в разделе 2 настоящего Согласия.
                                </p>
                            </div>

                            <div>
                                <p className="leading-relaxed">
                                    <span className="font-semibold text-[#181c23]">5.</span>{" "}
                                    Обработка данных осуществляется с использованием автоматизированных средств и 
                                    (при необходимости) вручную, в соответствии с Политикой обработки персональных 
                                    данных MODME и требованиями законодательства.
                                </p>
                            </div>

                            <div>
                                <p className="leading-relaxed">
                                    <span className="font-semibold text-[#181c23]">6.</span>{" "}
                                    Данные хранятся на защищённых серверах, расположенных на территории 
                                    Республики Узбекистан, в соответствии с Сертификатом о регистрации базы данных.
                                </p>
                            </div>

                            <div>
                                <p className="leading-relaxed mb-3">
                                    <span className="font-semibold text-[#181c23]">7.</span>{" "}
                                    MODME вправе передавать персональные данные третьим лицам, если такая передача необходима для:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>предоставления услуг связи и уведомлений (SMS-провайдеры, IP-телефония);</li>
                                    <li>проведения платежей (платёжные системы и банки);</li>
                                    <li>обеспечения хостинга и дата-центра в Республике Узбекистан;</li>
                                    <li>исполнения обязательств по договору;</li>
                                    <li>других целей, предусмотренных законодательством Республике Узбекистан.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="leading-relaxed mb-3">
                                    <span className="font-semibold text-[#181c23]">8.</span>{" "}
                                    Я уведомлён(а), что имею право:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>получать информацию о составе и способах обработки своих данных;</li>
                                    <li>требовать уточнения, блокировки или удаления данных;</li>
                                    <li>
                                        в любой момент отозвать своё согласие на обработку персональных данных, 
                                        направив письменное уведомление на адрес:{" "}
                                        <a
                                            href="mailto:crmmodme@gmail.com"
                                            className="text-[#ff8000] hover:underline"
                                        >
                                            crmmodme@gmail.com
                                        </a>
                                        . Отзыв согласия не влияет на законность обработки данных, произведённой 
                                        до момента получения уведомления об отзыве;
                                    </li>
                                    <li>обжаловать действия (или бездействие) MODME в порядке, предусмотренном законодательством Республики Узбекистан.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="leading-relaxed">
                                    <span className="font-semibold text-[#181c23]">9.</span>{" "}
                                    Настоящее согласие действует в течение всего срока использования мной Сервиса 
                                    и шестидесяти (60) календарных дней после прекращения отношений с MODME.
                                </p>
                            </div>

                            <div>
                                <p className="leading-relaxed">
                                    <span className="font-semibold text-[#181c23]">10.</span>{" "}
                                    По истечении этого срока данные подлежат удалению или обезличиванию, согласно 
                                    условиям Оферты и Политики обработки персональных данных MODME, если иное не 
                                    предусмотрено законодательством.
                                </p>
                            </div>

                            <div>
                                <p className="leading-relaxed">
                                    <span className="font-semibold text-[#181c23]">11.</span>{" "}
                                    Подтверждаю, что предоставленные данные являются достоверными, и выражаю согласие 
                                    на их обработку в соответствии с условиями настоящего документа.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* To'liq hujjatga havola */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-[#181c23] mb-6">
                        Полный документ
                    </h2>
                    <Link
                        href="/resources/privacy-and-personal-data-processing-policy"
                        className="flex items-center justify-between p-6 rounded-2xl border border-[#f0f0f0] bg-[#fcfcfc] hover:bg-[#fff8e8] hover:border-[#ff8000]/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#ff8000]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff8000]/20 transition-colors">
                                <FileText className="w-6 h-6 text-[#ff8000]" />
                            </div>
                            <div>
                                <span className="text-lg md:text-xl font-semibold text-[#181c23] group-hover:text-[#ff8000] transition-colors block">
                                    Приложение № 3 — Политика конфиденциальности и обработки персональных данных
                                </span>
                                <span className="text-sm text-[#a8a8a8] mt-1 block">
                                    Ознакомьтесь с полным официальным документом
                                </span>
                            </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[#a8a8a8] group-hover:text-[#ff8000] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}

