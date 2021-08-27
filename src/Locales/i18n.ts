import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import ruTranslation from './dict/ru.json';
import enTranslation from './dict/en.json';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const locale = RNLocalize.findBestAvailableLanguage(['en', 'ru']);
    callback(locale?.languageTag);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const resources = {
  en: {
    ...enTranslation,
  },
  ru: {
    ...ruTranslation,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
