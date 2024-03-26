import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { arabicTranslation } from "../locales/ar/translation";
import { english } from "../locales/en/translation";
const language = window.localStorage.getItem("language");
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: language,
    resources: {
      en: {
        translation: english, // Corrected object structure
      },
      ar: {
        translation: arabicTranslation, // Corrected object structure
      },
    },
  });
