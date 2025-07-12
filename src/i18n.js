import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en/translation.json";
import translationGe from "./locales/ge/translation.json";
import translationFr from "./locales/fr/translation.json";
import translationIt from "./locales/it/translation.json";
import translationSp from "./locales/sp/translation.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ge: {
    translation: translationGe,
  },
  fr: {
    translation: translationFr,
  },
  it: {
    translation: translationIt,
  },
  sp: {
    translation: translationSp,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    detaction: {
      caches: ["localStorage"],
    },
  });

export default i18n;
