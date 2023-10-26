/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import isMobile from 'ismobilejs';

import { ClientProvider } from '../contexts/ClientContext';
import { LocaleProvider } from '../contexts/LocaleContext';
import { isLanguageSupport } from '../utils/i18n';

type Props = {
  activeMenu: string;
  Component: React.Component;
  pageProps: any;
  mobileVersion: boolean;
  locale: any;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: any) {
    const userAgent = ctx.req
      ? ctx.req.headers['user-agent']
      : navigator.userAgent;

    const mobileVersion = isMobile(userAgent).phone;

    let locale: any;
    const queryLang = ctx.query.lang ?? 'th';
    if (typeof queryLang === 'string' && isLanguageSupport(queryLang)) {
      locale = queryLang;
    } else {
      locale = 'th';
    }

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, mobileVersion, locale };
  }

  public render() {
    const { Component, pageProps, mobileVersion, locale } = this.props;

    return (
      <>
        <Head>
          <title>Roongnapa Packaging</title>
        </Head>
        <LocaleProvider lang={locale}>
          <ClientProvider path="/" isMobile={mobileVersion}>
            <Component {...pageProps} />
          </ClientProvider>
        </LocaleProvider>
      </>
    );
  }
}

export default MyApp;
