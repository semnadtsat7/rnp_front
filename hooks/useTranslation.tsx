import { useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleContext';
import en from '../locales/en.json';
import th from '../locales/th.json';

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  const trans: any = {
    en: en,
    th: th
  };

  function t(key: string) {
    if (!trans[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return trans[locale][key] || '';
  }

  return { t, locale };
}
