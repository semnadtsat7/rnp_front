import React from 'react';

import useTranslation from '../hooks/useTranslation';

export default (WrappedComponent: any) => {
  const WithTranslation = ({ ...pageProps }) => {
    const { t, locale } = useTranslation();

    return <WrappedComponent {...pageProps} t={t} locale={locale} />;
  };

  WithTranslation.getInitialProps = async (ctx: any) => {
    let pageProps = {};
    if (WrappedComponent.getInitialProps) {
      pageProps = await WrappedComponent.getInitialProps(ctx);
    }
    return { ...pageProps };
  };

  return WithTranslation;
};
