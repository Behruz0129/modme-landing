"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TariffsClient() {
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

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("ru-RU", {
            maximumFractionDigits: 0,
            useGrouping: true,
        })
            .format(price)
            .replace(/,/g, " ");
    };

    const tariffs = [
        {
            period: "3 месяца доступа",
            start: 1500000,
            basic: 3120000,
            pro: 4680000,
            premium: 9000000,
        },
        {
            period: "6 месяцев доступа",
            start: 2700000,
            basic: 6240000,
            pro: 9360000,
            premium: 18000000,
        },
        {
            period: "9 месяцев доступа",
            start: 4500000,
            basic: 9360000,
            pro: 14040000,
            premium: 27000000,
        },
        {
            period: "12 месяцев доступа",
            start: 6000000,
            basic: 12480000,
            pro: 18720000,
            premium: 36000000,
        },
    ];
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
                        Приложение № 1
                    </h1>

                    <div className="prose prose-lg max-w-none text-[#4a5564] leading-relaxed text-left">
                        <div className="space-y-6">
                            <div className="text-left mb-8">
                                <p className="text-xl font-semibold text-[#181c23] mb-2">
                                    к Публичной оферте на заключение договора возмездного оказания услуг по предоставлению доступа к программному обеспечению «modme.uz» по модели SaaS
                                </p>
                                <p className="text-2xl font-bold text-[#181c23] mb-2">
                                    ТАРИФЫ
                                </p>
                                <p className="text-lg text-[#181c23] mb-2">
                                    на услуги по предоставлению доступа к Сервису modme.uz
                                </p>
                                <p className="text-sm text-[#a8a8a8]">
                                    (редакция от {getCurrentDate()})
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p><strong>1.</strong> Настоящее Приложение определяет Тарифы, порядок и условия их применения, а также особенности расчётов между MODME и Заказчиком.</p>
                                <p><strong>2.</strong> Приложение является неотъемлемой частью Публичной оферты и имеет равную юридическую силу с её текстом.</p>
                                <p><strong>3.</strong> Информация о Тарифах также размещается на сайте Исполнителя: <a href="https://modme.uz" target="_blank" rel="noopener noreferrer" className="text-[#ff8000] hover:underline">https://modme.uz</a> в разделе «Цены», где может обновляться и дополняться.</p>
                                <p><strong>4.</strong> Стоимость услуг определяется исходя из Тарифа, который зависит от количества студентов у Заказчика.</p>
                                <p><strong>5.</strong> Под «студентом» для целей расчета стоимости услуг понимается уникальный физический субъект (ученик), на которого в Сервисе заведена электронная карточка (учетная запись) и с которым связана хотя бы одна активная операция (посещение занятия, запись на курс, внесение платежа) в течение текущего расчетного периода.</p>
                                <p><strong>6.</strong> Количество студентов определяется на последний день каждого расчетного периода (месяца). Заказчик самостоятельно управляет списком студентов в рамках своего Аккаунта и несет ответственность за его актуальность.</p>
                                <p><strong>7.</strong> В случае, если фактическое количество студентов Заказчика по состоянию на конец расчетного периода превышает максимальный лимит, установленный для оплаченного Тарифа, Заказчик автоматически переводится на следующий, соответствующий фактическому количеству, Тариф. Доплата за разницу в стоимости производится в течение 5 (пяти) рабочих дней с момента получения счета от Исполнителя.</p>
                                <p><strong>8.</strong> Заказчик, по своему желанию, вправе в любое время перейти на более высокий Тариф, осуществив соответствующую доплату. Переход на Тариф с меньшим количеством студентов возможен только по окончании оплаченного периода предоставления доступа.</p>
                                <p><strong>9.</strong> В случае расхождения между данным Приложением и сведениями на сайте приоритет имеет версия, опубликованная на Сайте.</p>
                            </div>

                            <div className="my-8">
                                <h2 className="text-2xl font-bold text-[#181c23] mb-6">
                                    10. Действующие Тарифы (<a href="https://modme.uz/prices" target="_blank" rel="noopener noreferrer" className="text-[#ff8000] hover:underline">https://modme.uz/prices/</a>):
                                </h2>
                                
                                {/* Desktop Table */}
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full border-collapse border border-[#f0f0f0] rounded-lg">
                                        <thead>
                                            <tr className="bg-[#f8f8f8]">
                                                <th className="border border-[#f0f0f0] px-4 py-3 text-left font-semibold text-[#181c23]">Тариф</th>
                                                <th className="border border-[#f0f0f0] px-4 py-3 text-center font-semibold text-[#181c23]">
                                                    Старт<br />
                                                    <span className="text-sm font-normal text-[#a8a8a8]">(0-100 студентов)</span>
                                                </th>
                                                <th className="border border-[#f0f0f0] px-4 py-3 text-center font-semibold text-[#181c23]">
                                                    Базовый<br />
                                                    <span className="text-sm font-normal text-[#a8a8a8]">(100-300 студентов)</span>
                                                </th>
                                                <th className="border border-[#f0f0f0] px-4 py-3 text-center font-semibold text-[#181c23]">
                                                    Про<br />
                                                    <span className="text-sm font-normal text-[#a8a8a8]">(300-1000 студентов)</span>
                                                </th>
                                                <th className="border border-[#f0f0f0] px-4 py-3 text-center font-semibold text-[#181c23]">
                                                    Премиум<br />
                                                    <span className="text-sm font-normal text-[#a8a8a8]">(1000+ студентов)</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tariffs.map((tariff, index) => (
                                                <tr key={index} className="hover:bg-[#fcfcfc]">
                                                    <td className="border border-[#f0f0f0] px-4 py-3 font-medium text-[#181c23]">
                                                        {tariff.period}
                                                    </td>
                                                    <td className="border border-[#f0f0f0] px-4 py-3 text-center text-[#4a5564]">
                                                        {formatPrice(tariff.start)} сум
                                                    </td>
                                                    <td className="border border-[#f0f0f0] px-4 py-3 text-center text-[#4a5564]">
                                                        {formatPrice(tariff.basic)} сум
                                                    </td>
                                                    <td className="border border-[#f0f0f0] px-4 py-3 text-center text-[#4a5564]">
                                                        {formatPrice(tariff.pro)} сум
                                                    </td>
                                                    <td className="border border-[#f0f0f0] px-4 py-3 text-center text-[#4a5564]">
                                                        {formatPrice(tariff.premium)} сум
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Cards */}
                                <div className="md:hidden space-y-4">
                                    {tariffs.map((tariff, index) => (
                                        <div key={index} className="border border-[#f0f0f0] rounded-lg p-4 bg-[#fcfcfc]">
                                            <h3 className="font-semibold text-[#181c23] mb-3">{tariff.period}</h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-[#a8a8a8]">Старт (0-100):</span>
                                                    <span className="font-medium text-[#181c23]">{formatPrice(tariff.start)} сум</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-[#a8a8a8]">Базовый (100-300):</span>
                                                    <span className="font-medium text-[#181c23]">{formatPrice(tariff.basic)} сум</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-[#a8a8a8]">Про (300-1000):</span>
                                                    <span className="font-medium text-[#181c23]">{formatPrice(tariff.pro)} сум</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-[#a8a8a8]">Премиум (1000+):</span>
                                                    <span className="font-medium text-[#181c23]">{formatPrice(tariff.premium)} сум</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p><strong>11.</strong> Все Тарифы устанавливаются в национальной валюте — узбекских сумах (UZS) и указаны без НДС</p>
                                <p><strong>12.</strong> Платёж по Тарифу — денежная сумма, уплачиваемая Заказчиком в счёт оплаты услуг Исполнителя по предоставлению доступа к Сервису в соответствии с выбранным Тарифом.</p>
                                <p><strong>13.</strong> Исполнитель вправе изменять Тарифы, стоимость и условия их применения, публикуя новую редакцию на сайте.</p>
                                <p><strong>14.</strong> Изменения вступают в силу с даты публикации, если иное не указано в тексте изменений.</p>
                                <p><strong>15.</strong> Для уже оплаченных периодов стоимость и условия Тарифа сохраняются до конца оплаченного периода.</p>
                                <p><strong>16.</strong> Заказчик может приобрести дополнительные услуги, не включённые в Тариф, по отдельному договору (например, обучение персонала, настройка CRM, интеграции).</p>
                                <p><strong>17.</strong> Такие услуги оплачиваются на основании отдельного договора.</p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#f0f0f0]">
                                <h2 className="text-xl font-bold text-[#181c23] mb-4">
                                    Контактные данные по Тарифам и расчётам
                                </h2>
                                <p className="mb-3">Вопросы, связанные с Тарифами и оплатой, можно направлять:</p>
                                <ul className="ml-6 space-y-2 list-disc">
                                    <li>по электронной почте: <a href="mailto:crmmodme@gmail.com" className="text-[#ff8000] hover:underline">crmmodme@gmail.com</a></li>
                                    <li>либо через официальный Telegram-аккаунт менеджера, ссылка на который размещена на сайте Сервиса: <a href="https://modme.uz" target="_blank" rel="noopener noreferrer" className="text-[#ff8000] hover:underline">https://modme.uz</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

