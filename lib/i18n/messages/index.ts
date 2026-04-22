import type { Locale } from "../config";
import uz from "../../../messages/uz.json";
import en from "../../../messages/en.json";
import ru from "../../../messages/ru.json";

export type Messages = typeof uz;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messages: Record<Locale, Messages> = { uz, en: en as any, ru: ru as any };

export default messages;
