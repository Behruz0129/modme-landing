"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TechnicalSupportPolicyClient() {
    const getCurrentDate = () => {
        const now = new Date();
        const day = now.getDate();
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        return `«${day}» ${month} ${year} г.`;
    };
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
                        Приложение № 2
                    </h1>

                    <div className="prose prose-lg max-w-none text-[#4a5564] leading-relaxed text-left">
                        <div className="space-y-6">
                            <div className="text-left mb-8">
                                <p className="text-xl font-semibold text-[#181c23] mb-2">
                                    к Публичной оферте на заключение договора возмездного оказания услуг по предоставлению доступа к программному обеспечению «modme.uz» по модели SaaS
                                </p>
                                <p className="text-2xl font-bold text-[#181c23] mb-2">
                                    ПОЛИТИКА ТЕХНИЧЕСКОЙ ПОДДЕРЖКИ
                                </p>
                                <p className="text-lg font-semibold text-[#181c23] mb-2">
                                    ООО «MODME»
                                </p>
                                <p className="text-sm text-[#a8a8a8]">
                                    (редакция от {getCurrentDate()})
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p><strong>1.</strong> Настоящее Приложение определяет порядок, условия и сроки оказания технической поддержки Заказчикам Сервиса «modme.uz» (далее – «Сервис») со стороны MODME.</p>
                                <p><strong>2.</strong> Настоящая Политика является приложением к Публичной оферте и Договору, размещается в открытом доступе на сайте <a href="https://modme.uz" target="_blank" rel="noopener noreferrer" className="text-[#ff8000] hover:underline">https://modme.uz</a>.</p>
                                <p><strong>3.</strong> Техническая поддержка предоставляется Заказчикам в рамках оплаченного тарифного плана и является неотъемлемой частью оказываемых Услуг.</p>
                                <p><strong>4.</strong> Техническая поддержка включает в себя:</p>
                                <ul className="ml-6 space-y-1 list-disc">
                                    <li>консультационное и эксплуатационное сопровождение Сервиса;</li>
                                    <li>консультации по функциональным возможностям Сервиса и помощь в его использовании;</li>
                                    <li>прием, регистрацию, первичную диагностику и обработку инцидентов и запросов;</li>
                                    <li>сбор и обработку обратной связи от Заказчиков;</li>
                                    <li>информирование Заказчиков о новых версиях, обновлениях и плановых работах;</li>
                                    <li>взаимодействие по вопросам использования API и интеграций;</li>
                                    <li>сбор и передачу в отдел разработки запросов на новые функции (feature requests).</li>
                                </ul>
                                <p><strong>5.</strong> Техническая поддержка не включает в себя:</p>
                                <ul className="ml-6 space-y-1 list-disc">
                                    <li>обучение персонала Заказчика за пределами функционала Сервиса;</li>
                                    <li>настройку Сервиса под индивидуальные бизнес-процессы Заказчика, не предусмотренные документацией;</li>
                                    <li>исправление ошибок, вызванных действиями Заказчика или использованием Сервиса способом, не предусмотренным документацией.</li>
                                </ul>
                                <p><strong>6.</strong> Обращения в службу технической поддержки принимаются через официальные каналы связи.</p>
                                <p><strong>7.</strong> Время работы службы технической поддержки: с понедельника по субботу, с 10:00 до 19:00 по времени г. Ташкента (UTC+5), за исключением официальных праздничных дней Республики Узбекистан.</p>
                                <p><strong>8.</strong> Все обращения Заказчиков регистрируются в CRM-системе MODME.</p>
                                <p><strong>9.</strong> Исполнитель обязуется предоставить первичный ответ на обращение в течение 1 (одного) рабочего дня с момента его получения через указанные каналы связи. Под первичным ответом понимается подтверждение получения обращения, запрос уточняющей информации или начало диагностики.</p>
                                <p><strong>10.</strong> В рамках первичного ответа специалист технической поддержки проводит диагностику и предпринимает меры для разрешения проблемы, включая:</p>
                                <ul className="ml-6 space-y-1 list-disc">
                                    <li>Предоставление консультаций и инструкций.</li>
                                    <li>Направление фото-, видеоматериалов или ссылок на документацию.</li>
                                    <li>Проведение онлайн-консультации (например, через Zoom).</li>
                                </ul>
                                <p><strong>11.</strong> Если решение проблемы требует привлечения продукт-менеджера или отдела разработки, специалист технической поддержки передает обращение соответствующему подразделению и информирует Заказчика о дальнейших сроках решения. Исполнитель прилагает все разумные усилия для решения таких обращений в максимально сжатые сроки.</p>
                                <p><strong>12.</strong> После разрешения инцидента или выполнения запроса сотрудник технической поддержки осуществляет повторный контакт с Заказчиком для подтверждения решения проблемы и получения обратной связи.</p>
                                <p><strong>13.</strong> Служба технической поддержки MODME осуществляет проактивную работу, включающую:</p>
                                <ul className="ml-6 space-y-1 list-disc">
                                    <li>периодические проверки корректности функционирования платформы;</li>
                                    <li>опросы удовлетворенности качеством оказания Услуг;</li>
                                    <li>сбор предложений по улучшению и развитию функционала Сервиса.</li>
                                </ul>
                                <p><strong>14.</strong> Обращения в службу технической поддержки MODME принимаются через следующие официальные каналы связи:</p>
                                <ul className="ml-6 space-y-2 list-disc">
                                    <li>Корпоративный Telegram-аккаунт: <a href="https://t.me/modme_support" target="_blank" rel="noopener noreferrer" className="text-[#ff8000] hover:underline">t.me/modme_support</a></li>
                                    <li>Телефонный номер: <a href="tel:+998787771100" className="text-[#ff8000] hover:underline">+998 787771100</a></li>
                                    <li>Электронная почта: <a href="mailto:crmmodme@gmail.com" className="text-[#ff8000] hover:underline">crmmodme@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

