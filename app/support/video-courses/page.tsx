"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Video {
    id: string;
    title: string;
    description: string;
}

interface Playlist {
    id: string;
    title: string;
    videos: Video[];
}

const playlists: Playlist[] = [
    {
        id: "1",
        title: "Umumiy Sozlamalar bo'limi",
        videos: [
            {
                id: "7XasoSmEjIY",
                title: "1-dars. Arxivni Excelga eksport qilish",
                description:
                    "Ushbu videoda arxiv ma'lumotlarini Excel fayl ko'rinishida yuklab olishni o'rganasiz",
            },
            {
                id: "Bwy3NBMxsnk",
                title: "2-dars. Arxiv filterlar",
                description:
                    "Arxivdagi ma'lumotlarni qulay filtrlar orqali saralash usullari bilan tanishing",
            },
            {
                id: "uuLd8kN-TlU",
                title: "3-dars. Arxivdan o'chirish va tiklash",
                description:
                    "Arxivdagi yozuvlarni qanday o'chirish va qayta tiklashni ko'rib chiqamiz",
            },
            {
                id: "-KoVGk7jKHA",
                title: "4-dars. Arxivlash sabablari",
                description:
                    "Ma'lumotlar nima sababdan arxivlanadi — bu haqida ushbu videoda bilib oling",
            },
            {
                id: "Q55gmjOCPRs",
                title: "5-dars. Billing",
                description:
                    "Billing bo'limi orqali to'lovlarni boshqarish asoslarini o'rganamiz",
            },
            {
                id: "lGbFjABB8kI",
                title: "6-dars. Blog, yangi post yaratish",
                description:
                    "Modme blogiga yangi post yaratish jarayonini birgalikda ko'rib chiqamiz",
            },
            {
                id: "FOjJBtae1fc",
                title: "7-dars. Maxsus leadlar formasi",
                description:
                    "Maxsus lead formalarini qanday yaratish va tizimga joylashtirishni o'rganamiz",
            },
            {
                id: "QP0p_2JC1nk",
                title: "8-dars. Standart lead formasi sozlamalari",
                description:
                    "Standart lead formasi sozlamalarini ko'rib chiqamiz va to'g'ri sozlashni o'rganamiz",
            },
            {
                id: "uv0P1rCne-Y",
                title: "9-dars. Dam olish kunlari",
                description:
                    "Tizimda dam olish kunlarini qanday belgilashni bilib oling",
            },
            {
                id: "-Woce1xnhTY",
                title: "10-dars. Timetable 5 minutlik interval",
                description:
                    "Dars jadvalini 5 daqiqalik aniqlikda sozlash bo'yicha ko'rsatma",
            },
            {
                id: "-vKK5Ho-Xrg",
                title: "11-dars. Yangi kurs yaratish",
                description:
                    "Tizimda yangi kurs yaratish va uning asosiy parametrlarini sozlashni o'rganamiz",
            },
            {
                id: "1viPIzNHSv8",
                title: "12-dars. Kursga online dars qo'shish",
                description:
                    "Mavjud kursga online darslarni qo'shish va ularni boshqarishni ko'rib chiqamiz",
            },
            {
                id: "9EENRI_v7lQ",
                title: "13-dars. Guruhni tark etgan o'quvchilar sahifasi",
                description:
                    "Guruhni tark etgan o'quvchilar ma'lumotlarini ko'rish va boshqarish imkoniyatlarini o'rganamiz",
            },
            {
                id: "Jm83cVV4OvM",
                title: "14-dars. Workly va ijtimoiy tarmoqlar integratsiyasi",
                description:
                    "Workly va ijtimoiy tarmoqlar bilan integratsiya qilish va ularni sozlashni ko'rib chiqamiz",
            },
            {
                id: "OSxOtM7FzGY",
                title: "15-dars. Online to'lov usullari",
                description:
                    "Tizimda online to'lov usullarini sozlash va ularni boshqarishni o'rganamiz",
            },
            {
                id: "OuGCQmEQLC4",
                title: "16-dars. Kompaniya offertasi",
                description:
                    "Kompaniya offertasini tizimda sozlash va boshqarish imkoniyatlarini ko'rib chiqamiz",
            },
            {
                id: "TvWtUnIO2tM",
                title: "17-dars. Online telefoniya",
                description:
                    "Online telefoniya tizimini sozlash va undan foydalanishni o'rganamiz",
            },
            {
                id: "UUJQmnnbwQM",
                title: "18-dars. Sistemaga kirish",
                description:
                    "Tizimga xavfsiz kirish va foydalanuvchi huquqlarini boshqarishni ko'rib chiqamiz",
            },
            {
                id: "dOHs75sKnNQ",
                title: "19-dars. Yangi xodim yaratish",
                description:
                    "Tizimda yangi xodim yaratish va uning huquqlarini sozlashni o'rganamiz",
            },
            {
                id: "h6CfAYj9ntA",
                title: "20-dars. Ish vaqti sozlamalari",
                description:
                    "Xodimlar ish vaqtini sozlash va boshqarish imkoniyatlarini ko'rib chiqamiz",
            },
            {
                id: "mBmkAOx9Lac",
                title: "21-dars. SMS integratsiyalar",
                description:
                    "SMS integratsiyalarini sozlash va ularni boshqarishni o'rganamiz",
            },
            {
                id: "ojq_087kk6k",
                title: "22-dars. Roadmap",
                description:
                    "Tizimning kelajakdagi yangilanishlari va rejalarini ko'rib chiqamiz",
            },
            {
                id: "twJ3cgLasnQ",
                title: "23-dars. Oddiy shakllar",
                description:
                    "Tizimda oddiy shakllar yaratish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "gElo5XPhhkg",
                title: "24-dars. Yangi xona yaratish",
                description:
                    "Tizimda yangi xona yaratish va uning parametrlarini sozlashni ko'rib chiqamiz",
            },
        ],
    },
    {
        id: "2",
        title: "SMS Sozlamalari bo'limi",
        videos: [
            {
                id: "CLmHO9Jr5rY",
                title: "1-dars. Balans yetarli emasligi haqida ma'lumot berish",
                description:
                    "SMS balans yetarli emasligi haqida xabarnoma yuborish sozlamalarini o'rganamiz",
            },
            {
                id: "-rFTHiVEptE",
                title: "2-dars. Oldindan to'lov haqida xabarnoma",
                description:
                    "Oldindan to'lov haqida SMS xabarnomalarini sozlash va boshqarishni ko'rib chiqamiz",
            },
            {
                id: "gK8Lb9jXmaU",
                title: "3-dars. Sms shablonlar",
                description:
                    "SMS shablonlarini yaratish va ularni boshqarish imkoniyatlarini o'rganamiz",
            },
            {
                id: "kk0Jnj2ZhpE",
                title: "4-dars. Talaba darsda ishtirok etmadi",
                description:
                    "Talabaning darsda ishtirok etmagani haqida SMS yuborish sozlamalarini ko'rib chiqamiz",
            },
            {
                id: "44jjoI1oPW0",
                title: "5-dars. Talaba guruhga qo'shildi",
                description:
                    "Talaba guruhga qo'shilganda avtomatik SMS yuborish sozlamalarini o'rganamiz",
            },
            {
                id: "D9339ZjG6H4",
                title: "6-dars. Talaba tug'ilgan kuni",
                description:
                    "Talabaning tug'ilgan kuni haqida SMS yuborish sozlamalarini ko'rib chiqamiz",
            },
            {
                id: "3OIQ6FZCQqg",
                title: "7-dars. To'lov amalga oshirildi",
                description:
                    "To'lov amalga oshirilganda SMS xabarnoma yuborish sozlamalarini o'rganamiz",
            },
        ],
    },
    {
        id: "3",
        title: "Hisobotlar bo'limi",
        videos: [
            {
                id: "rokn4Vr4NVE",
                title: "1-dars. Jurnallar tarixi",
                description:
                    "Dars jurnallari tarixini ko'rish va tahlil qilish imkoniyatlarini o'rganamiz",
            },
            {
                id: "uRzp3G_z794",
                title: "2-dars. Konversiya hisoboti",
                description:
                    "Konversiya hisobotlarini tuzish va tahlil qilishni ko'rib chiqamiz",
            },
            {
                id: "HrWZkXaZhPU",
                title: "3-dars. Kurs samaradorligi",
                description:
                    "Kurslar samaradorligini o'lchash va tahlil qilish imkoniyatlarini o'rganamiz",
            },
            {
                id: "spEMdgpTG3g",
                title: "4-dars. Lidlar hisoboti",
                description:
                    "Lidlar bo'yicha hisobotlarni tuzish va tahlil qilishni ko'rib chiqamiz",
            },
            {
                id: "CY2hwJtBIJQ",
                title: "5-dars. Qo'ng'iroqlar tarixi",
                description:
                    "Qo'ng'iroqlar tarixini ko'rish va tahlil qilish imkoniyatlarini o'rganamiz",
            },
            {
                id: "z2q3efuoi9Q",
                title: "6-dars. SMS jurnallar tarixi",
                description:
                    "SMS yuborilgan xabarlar tarixini ko'rish va tahlil qilishni ko'rib chiqamiz",
            },
            {
                id: "JQqy15X3TWA",
                title: "7-dars. Talaba holati bo'yicha xisobot",
                description:
                    "Talabalar holati bo'yicha hisobotlarni tuzish va tahlil qilishni o'rganamiz",
            },
            {
                id: "B73W4F3-8N0",
                title: "8-dars. Ustozlar samaradorligi",
                description:
                    "Ustozlar samaradorligini o'lchash va tahlil qilish imkoniyatlarini ko'rib chiqamiz",
            },
        ],
    },
    {
        id: "4",
        title: "Moliyalar bo'limi",
        videos: [
            {
                id: "UD7YybbMVro",
                title: "1-dars. Barcha to'lovlarni eksport qilish",
                description:
                    "Tizimdagi barcha to'lovlarni Excel formatida eksport qilishni o'rganamiz",
            },
            {
                id: "jPhvcTCPVr8",
                title: "2-dars. Barcha to'lovlarni filtrlash",
                description:
                    "To'lovlarni turli parametrlar bo'yicha filtrlash va tahlil qilishni ko'rib chiqamiz",
            },
            {
                id: "5h3MjZ92QVI",
                title: "3-dars. Barcha ustozlarga umumiy maosh sozlash",
                description:
                    "Barcha ustozlarga bir vaqtda umumiy maosh sozlash imkoniyatlarini o'rganamiz",
            },
            {
                id: "yAQP4DpQKkE",
                title: "4-dars. Davr uchun maosh xisoblash",
                description:
                    "Ma'lum bir davr uchun ustozlar maoshini hisoblash va boshqarishni ko'rib chiqamiz",
            },
            {
                id: "6z2uYZf7cYE",
                title: "5-dars. Har bir ustoz uchun alohida maosh sozlamalari",
                description:
                    "Har bir ustoz uchun alohida maosh sozlamalarini o'rganamiz",
            },
            {
                id: "XsX0jqGV0yE",
                title: "6-dars. Kurs uchun maosh hisoblash sozlamalari",
                description:
                    "Kurslar bo'yicha maosh hisoblash sozlamalarini ko'rib chiqamiz",
            },
            {
                id: "huD4fuabAyA",
                title: "7-dars. Qarzdorlar ustida amallar",
                description:
                    "Qarzdorlar ustida amallar bajarish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "thCiC4zV2CM",
                title: "8-dars. Yechib olishlar bo'limi",
                description:
                    "Yechib olishlar bo'limini sozlash va boshqarish imkoniyatlarini ko'rib chiqamiz",
            },
            {
                id: "xm8EJvZEvrg",
                title: "9-dars. Qarzdorlarni eksport qilish",
                description:
                    "Qarzdorlar ma'lumotlarini Excel formatida eksport qilishni o'rganamiz",
            },
            {
                id: "Za6_4KTM0Lw",
                title: "10-dars. Qarzdorlarni filterlash & izlash",
                description:
                    "Qarzdorlarni turli parametrlar bo'yicha filtrlash va izlashni ko'rib chiqamiz",
            },
            {
                id: "Za6_4KTM0Lw",
                title: "11-dars. Xarajatlar ro'yxatiga yangi kategoriyalar qo'shish",
                description:
                    "Xarajatlar ro'yxatiga yangi kategoriyalar qo'shish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "JS_hqsA6UWI",
                title: "12-dars. Ustozlar maoshini Excelga eksport qilish",
                description:
                    "Ustozlar maoshi ma'lumotlarini Excel formatida eksport qilishni ko'rib chiqamiz",
            },
            {
                id: "vgFBI3JEGsU",
                title: "13-dars. Xarajatlar kategoriyalari",
                description:
                    "Xarajatlar kategoriyalarini yaratish va boshqarish imkoniyatlarini o'rganamiz",
            },
            {
                id: "00MalnEVoRs",
                title: "14-dars. Xarajatlarni filtr qilishni o'rganamiz",
                description:
                    "Xarajatlarni turli parametrlar bo'yicha filtrlash va tahlil qilishni ko'rib chiqamiz",
            },
            {
                id: "TnSKDVC3NM0",
                title: "15-dars. Xarajatlarni eksport qilish",
                description:
                    "Xarajatlar ma'lumotlarini Excel formatida eksport qilishni o'rganamiz",
            },
            {
                id: "hx7afwLC1ug",
                title: "16-dars. Yangi xarajat kiritish",
                description:
                    "Tizimga yangi xarajat kiritish va uni boshqarishni ko'rib chiqamiz",
            },
            {
                id: "q0tpY8tiXgA",
                title: "17-dars. O'quvchini to'lovini qaytarib berish (refund)",
                description:
                    "O'quvchilarga to'lovlarni qaytarib berish jarayonini o'rganamiz",
            },
            {
                id: "Db1TNIB0dBc",
                title: "18-dars. O'quvchini guruhdan chiqarib yuborishdagi recalculation haqida",
                description:
                    "O'quvchini guruhdan chiqarib yuborishda qayta hisoblash jarayonini ko'rib chiqamiz",
            },
        ],
    },
    {
        id: "5",
        title: "O'qituvchilar bo'limi",
        videos: [
            {
                id: "MUU3qi0Jlfk",
                title: "1-dars. Ustoz profili",
                description:
                    "Ustoz profilini sozlash va boshqarish imkoniyatlarini o'rganamiz",
            },
            {
                id: "VE8PB1Uprac",
                title: "2-dars. Yangi ustoz yaratish",
                description:
                    "Tizimda yangi ustoz yaratish va uning huquqlarini sozlashni ko'rib chiqamiz",
            },
        ],
    },
    {
        id: "6",
        title: "Talabalar bo'limi",
        videos: [
            {
                id: "Jrfh9UALAQo",
                title: "1-dars. Students – teg bo'yicha filterlash",
                description:
                    "Talabalarni teglar bo'yicha filtrlash va tahlil qilishni o'rganamiz",
            },
            {
                id: "qFQUXjBBFRU",
                title: "2-dars. Talaba profili to'liq abzor",
                description:
                    "Talaba profilini to'liq ko'rish va boshqarish imkoniyatlarini ko'rib chiqamiz",
            },
            {
                id: "bXrF1xMdLSI",
                title: "3-dars. Talabaga SMS yuborish usullari",
                description:
                    "Talabalarga SMS yuborishning turli usullarini o'rganamiz",
            },
            {
                id: "7D4SRjNgafg",
                title: "4-dars. Talabaga to'lov kiritish usullari",
                description:
                    "Talabalarga to'lov kiritishning turli usullarini ko'rib chiqamiz",
            },
            {
                id: "D7ZN3FLhenE",
                title: "5-dars. Talaba filters",
                description:
                    "Talabalarni turli parametrlar bo'yicha filtrlash va tahlil qilishni o'rganamiz",
            },
            {
                id: "CsHsjaf6Lfc",
                title: "6-dars. Talabalarni Excelga eksport qilish",
                description:
                    "Talabalar ma'lumotlarini Excel formatida eksport qilishni ko'rib chiqamiz",
            },
            {
                id: "7-hZ79UJB5k",
                title: "7-dars. Talabalarni guruhga qo'shish",
                description:
                    "Talabalarni guruhlarga qo'shish va ularni boshqarishni o'rganamiz",
            },
        ],
    },
    {
        id: "7",
        title: "Lidlar bo'limi",
        videos: [
            {
                id: "2oqSuWnmmN4",
                title: "1-dars. Yangi lid yaratish",
                description:
                    "Tizimda yangi lid yaratish va uning ma'lumotlarini to'ldirishni o'rganamiz",
            },
            {
                id: "7qcIoWC023Y",
                title: "2-dars. Lid ma'lumotini tahrirlash",
                description:
                    "Mavjud lid ma'lumotlarini tahrirlash va yangilashni ko'rib chiqamiz",
            },
            {
                id: "9crQjhWSZmk",
                title: "3-dars. Sectionlarni ochish va yopish & lidlar bo'limi ishlash tezligi haqida",
                description:
                    "Lidlar bo'limidagi sectionlarni boshqarish va tizim ishlash tezligini optimizatsiya qilishni o'rganamiz",
            },
            {
                id: "DskwPSxWAtQ",
                title: "4-dars. Yangi Lid Tarixi",
                description:
                    "Lidlar tarixini ko'rish va tahlil qilish imkoniyatlarini ko'rib chiqamiz",
            },
            {
                id: "EcV3yUYZDHg",
                title: "5-dars. Mijoz manbalarini (source) yaratish",
                description:
                    "Mijoz manbalarini yaratish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "MIZrSMjsQ_I",
                title: "6-dars. Xodimlar bo'yicha filter qilish",
                description:
                    "Lidlarni xodimlar bo'yicha filtrlash va tahlil qilishni ko'rib chiqamiz",
            },
            {
                id: "QgVhS-06W68",
                title: "7-dars. Yangi Column yaratish & Column ustida amallar",
                description:
                    "Lidlar bo'limida yangi ustunlar yaratish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "WTBFiECC1YQ",
                title: "8-dars. Sectionlar bo'yicha filter",
                description:
                    "Lidlarni sectionlar bo'yicha filtrlash va tahlil qilishni ko'rib chiqamiz",
            },
            {
                id: "e3dO9AD4eWM",
                title: "9-dars. Custom Lid form yaratish & Lidlarga ushbu formadan so'rov qoldirish",
                description:
                    "Maxsus lid formalarini yaratish va ular orqali so'rovlar qoldirishni o'rganamiz",
            },
            {
                id: "nYA7ruhwJ-k",
                title: "10-dars. Mijoz manbalari (Source) bo'yicha filter",
                description:
                    "Lidlarni mijoz manbalari bo'yicha filtrlash va tahlil qilishni ko'rib chiqamiz",
            },
            {
                id: "tzzi78imYtk",
                title: "11-dars. Standard formalar va Formaga section biriktirish",
                description:
                    "Standart formalarni yaratish va ularni sectionlarga biriktirishni o'rganamiz",
            },
            {
                id: "DnmRxIGm1dc",
                title: "12-dars. Lid arxiv",
                description:
                    "Lidlar arxivini ko'rish va boshqarish imkoniyatlarini ko'rib chiqamiz",
            },
            {
                id: "qMTWU81Icyw",
                title: "13-dars. Yangi lidlar bo'limi",
                description:
                    "Yangi lidlar bo'limini ko'rish va boshqarish imkoniyatlarini ko'rib chiqamiz",
            },
        ],
    },
    {
        id: "8",
        title: "Dashboard bo'limi",
        videos: [
            {
                id: "OIFNNA1IZOk",
                title: "1-dars. Dashboard statistikalari",
                description:
                    "Dashboard statistikalari va ularni tahlil qilish imkoniyatlarini o'rganamiz",
            },
            {
                id: "U2IQnqrcIG8",
                title: "2-dars. Eslatmalar bo'limi",
                description:
                    "Eslatmalar bo'limini sozlash va boshqarishni ko'rib chiqamiz",
            },
            {
                id: "BAlTZnxA4gU",
                title: "3-dars. Navigatsiya header",
                description:
                    "Navigatsiya headerini sozlash va undan foydalanishni o'rganamiz",
            },
            {
                id: "eHP2Yh2lkMY",
                title: "4-dars. Timetable",
                description:
                    "Timetable bo'limini ko'rish va boshqarish imkoniyatlarini ko'rib chiqamiz",
            },
        ],
    },
    {
        id: "9",
        title: "Guruhlar bo'limi bilan ishlash",
        videos: [
            {
                id: "AwI_Y76c3uQ",
                title: "1-dars. Chegirma berish",
                description:
                    "Guruh o'quvchilariga chegirma berish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "nQHLWg1Pgqw",
                title: "2-dars. Dars kunini ko'chirish",
                description:
                    "Guruh dars kunlarini o'zgartirish va ularni boshqarishni ko'rib chiqamiz",
            },
            {
                id: "KM43H3eP8kE",
                title: "3-dars. Dars mavzusini belgilash",
                description:
                    "Guruh darslarining mavzularini belgilash va ularni boshqarishni o'rganamiz",
            },
            {
                id: "CjJYfIT1eC4",
                title: "4-dars. Darsni bekor qilish",
                description:
                    "Guruh darslarini bekor qilish va ularni boshqarishni ko'rib chiqamiz",
            },
            {
                id: "Vq2E4vFM-xA",
                title: "5-dars. Guruh ma'lumotlarini eksport qilish",
                description:
                    "Guruh ma'lumotlarini Excel formatida eksport qilishni o'rganamiz",
            },
            {
                id: "L3vq2P3cgOc",
                title: "6-dars. Guruh tarixi",
                description:
                    "Guruh tarixini ko'rish va tahlil qilish imkoniyatlarini ko'rib chiqamiz",
            },
            {
                id: "6CpKrV6v9To",
                title: "7-dars. Guruhda davomat qilish",
                description:
                    "Guruhda davomat qilish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "zUYIPD9vNzI",
                title: "8-dars. Guruhda imtihon yaratish",
                description:
                    "Guruhda imtihonlar yaratish va ularni boshqarishni ko'rib chiqamiz",
            },
            {
                id: "mZTIvWGFzO8",
                title: "9-dars. Guruhda ustozni almashtirish",
                description:
                    "Guruhda ustozni almashtirish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "ed6E5lHIYE8",
                title: "10-dars. Guruhdagi eslatmalar",
                description:
                    "Guruhdagi eslatmalarni yaratish va ularni boshqarishni ko'rib chiqamiz",
            },
            {
                id: "QTn6bSs3wek",
                title: "11-dars. Guruhdagi o'quvchilar ustida amallar bajarish",
                description:
                    "Guruhdagi o'quvchilar ustida turli amallar bajarishni o'rganamiz",
            },
            {
                id: "3coyNi_6oe0",
                title: "12-dars. Guruhlar jadvali va guruhlar ustida amallar",
                description:
                    "Guruhlar jadvalini ko'rish va ular ustida amallar bajarishni ko'rib chiqamiz",
            },
            {
                id: "9NPAQ5SlIto",
                title: "13-dars. Imtihonlar sahifasi",
                description:
                    "Imtihonlar sahifasini ko'rish va ularni boshqarishni o'rganamiz",
            },
            {
                id: "ET_Sgrn8myY",
                title: "14-dars. Ma'lum bir guruh ustidagi amallar",
                description:
                    "Ma'lum bir guruh ustida turli amallar bajarishni ko'rib chiqamiz",
            },
        ],
    },
];

export default function VideoCoursesPage() {
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(
        null
    );
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleNextVideo = () => {
        if (
            selectedPlaylist &&
            currentVideoIndex < selectedPlaylist.videos.length - 1
        ) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    };

    const handlePrevVideo = () => {
        if (selectedPlaylist && currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
    };

    const currentVideo = selectedPlaylist?.videos[currentVideoIndex];

    return (
        <div className="min-h-screen bg-[#fcfcfc]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {!selectedPlaylist ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {playlists.map((playlist) => (
                            <motion.div
                                key={playlist.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <button
                                    onClick={() =>
                                        setSelectedPlaylist(playlist)
                                    }
                                    className="w-full bg-white rounded-xl shadow-lg p-8 text-left transition-all duration-300 hover:shadow-xl border border-[#FFE4B5]"
                                >
                                    <h2 className="text-2xl font-semibold mb-4 text-[#080a0a]">
                                        {playlist.title}
                                    </h2>
                                    <p className="text-base text-[#a8a8a8] mb-8">
                                        {playlist.videos.length} ta video dars
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-base font-medium text-[#ff8000]">
                                            Ko'rish
                                        </span>
                                        <svg
                                            className="w-6 h-6 text-[#ff8000]"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 12H19"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 5L19 12L12 19"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Video Content */}
                        <div className="w-full lg:w-3/4">
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFE4B5]">
                                <div className="flex items-center justify-between mb-8">
                                    <button
                                        onClick={() =>
                                            setSelectedPlaylist(null)
                                        }
                                        className="flex items-center text-base text-[#a8a8a8] hover:text-[#080a0a] transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 12H5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 19L5 12L12 5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Orqaga
                                    </button>
                                    <h1 className="text-2xl font-bold text-[#080a0a]">
                                        {currentVideo?.title ||
                                            "Video topilmadi"}
                                    </h1>
                                </div>
                                {currentVideo && (
                                    <>
                                        <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${currentVideo.id}`}
                                                title={currentVideo.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                        </div>
                                        <p className="text-base text-[#a8a8a8] mb-8">
                                            {currentVideo.description}
                                        </p>
                                    </>
                                )}
                                <div className="flex justify-between">
                                    <button
                                        onClick={handlePrevVideo}
                                        disabled={currentVideoIndex === 0}
                                        className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                                            currentVideoIndex === 0
                                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                : "bg-[#FFF8E8] text-[#ff8000] hover:bg-[#FFE4B5]"
                                        }`}
                                    >
                                        Oldingi
                                    </button>
                                    <button
                                        onClick={handleNextVideo}
                                        disabled={
                                            currentVideoIndex ===
                                            (selectedPlaylist?.videos.length ||
                                                0) -
                                                1
                                        }
                                        className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                                            currentVideoIndex ===
                                            (selectedPlaylist?.videos.length ||
                                                0) -
                                                1
                                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                : "bg-[#FFF8E8] text-[#ff8000] hover:bg-[#FFE4B5]"
                                        }`}
                                    >
                                        Keyingi
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Playlist Menu */}
                        <div className="w-full lg:w-1/4">
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFE4B5] sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                                <h2 className="text-2xl font-semibold mb-6 text-[#080a0a]">
                                    {selectedPlaylist.title}
                                </h2>
                                <div className="space-y-2">
                                    {selectedPlaylist.videos.map(
                                        (video, index) => (
                                            <motion.button
                                                key={video.id}
                                                onClick={() =>
                                                    setCurrentVideoIndex(index)
                                                }
                                                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                                                    currentVideoIndex === index
                                                        ? "bg-[#FFF8E8] text-[#ff8000]"
                                                        : "hover:bg-[#FFF8E8] text-[#080a0a]"
                                                }`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <span className="text-base font-medium">
                                                    {video.title}
                                                </span>
                                            </motion.button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
