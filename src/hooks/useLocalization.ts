"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type AppLocale = (typeof routing.locales)[number];

export function useLocalization(namespace?: string) {
  const t = useTranslations(namespace);
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const isRtl = locale === "ar";

  function switchLocale(nextLocale: AppLocale) {
    if (nextLocale === locale) return;
    // usePathname from next-intl returns path without locale prefix
    // Navigate to the same path but with the new locale
    // This will trigger a full page reload with the new locale and messages
    const newPath = `/${nextLocale}${pathname === "/" ? "" : pathname}`;
    window.location.href = newPath;
  }

  return {
    t,
    locale,
    dir: isRtl ? "rtl" : "ltr",
    isRtl,
    switchLocale,
  };
}

