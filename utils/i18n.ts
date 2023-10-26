const languageList = ['en', 'th'];

export const getLocale = (): string => {
  const localSettings = localStorage.getItem('locale');

  if (localSettings) {
    return localSettings;
  } else {
    return 'en';
  }
};

export const isLanguageSupport = (lang?: any) => {
  return typeof lang === 'string' && lang ? languageList.includes(lang) : false;
};
