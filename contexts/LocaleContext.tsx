import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { isLanguageSupport } from '../utils/i18n';

type ContextProps = {
  locale: string;
  setLocale: (locale: string) => void;
};

type LocaleProviderProps = {
  lang: string;
  children: any;
};

export const LocaleContext = React.createContext<ContextProps>({
  locale: 'th',
  setLocale: () => null
});

export const LocaleProvider = ({ lang, children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState(lang);
  const { query } = useRouter();

  useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  useEffect(() => {
    if (
      typeof query.lang === 'string' &&
      locale !== query.lang &&
      isLanguageSupport(query.lang)
    ) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
