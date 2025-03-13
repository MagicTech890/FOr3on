import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAR from "./locales/ar/translation.json";
import translationEN from "./locales/en/translation.json";

// the translations
const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

// Detect user's country/region and set appropriate language
const detectUserLanguage = () => {
  // Try to get browser language
  const browserLang = navigator.language || (navigator as any).userLanguage;

  // Check if the browser language starts with 'ar'
  if (browserLang && browserLang.startsWith("ar")) {
    return "ar";
  }

  // Try to get country from timezone offset
  const timezoneOffset = new Date().getTimezoneOffset();

  // Middle East/Arab countries typically have timezone offsets around -180 to -120
  // This is a very simplified approach - for production you'd want a more robust solution
  if (timezoneOffset >= -180 && timezoneOffset <= -120) {
    return "ar";
  }

  // Get saved language or default to Arabic
  return localStorage.getItem("language") || "ar";
};

// Get language based on user's country/region or from localStorage
const savedLanguage = detectUserLanguage();

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
