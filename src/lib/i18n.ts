import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // لو اللغة مش متوفرة يجيب الإنجليزي
    supportedLngs: ["en", "ar"],
    debug: true,
    interpolation: {
      escapeValue: false, // React بتحمي النصوص تلقائيًا
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // مكان ملفات الترجمة
    },
  });

export default i18n;
