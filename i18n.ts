import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    if (!locales.includes(locale)) {
        notFound();
    }

    return {
        messages: (await import(`./messages/${locale}.json`)).default
    };
});

export function validateLocale(locale?: string) {
    if (!locale || !locales.includes(locale)) {
        notFound();
    }
    return locale;
}