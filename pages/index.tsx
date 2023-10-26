import React, { useEffect } from 'react';
import Head from 'next/head';

import { getLocale } from '../utils/i18n';

const Index: React.FC = () => {
  useEffect(() => {
    window.location.replace(`/${getLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
