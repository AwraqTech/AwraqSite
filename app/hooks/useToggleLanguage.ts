"use client";

import { useRouter, usePathname } from "next/navigation"; // Include pathname for proper routing
import { useLocaleContext } from "../context/LocaleContext";

export function useToggleLanguage() {
  const { locale, setLocale } = useLocaleContext();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar"; // Toggle between Arabic and English
    setLocale(nextLocale);

    // Remove the current locale prefix from the pathname
    const pathWithoutLocale = pathname.replace(/^\/(ar|en)(\/|$)/, "/");

    // Add the new locale prefix
    const localizedPath = `/${nextLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

    // Redirect to the new path
    router.replace(localizedPath);
  };

  return { toggleLanguage };
}
