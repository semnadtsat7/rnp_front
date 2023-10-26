import React from 'react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Prompt';
    user-select: none;
  }

  .ant-menu {
    color: #765e30;
     
  }

  .ant-menu-item {
    :hover {
      color: #923140;
    }
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    color: #923140;
    background-color: transparent;
  }
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/logo/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo/logo192.png" />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Serif|Prompt:400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GlobalStyle />
          {process.env.NODE_ENV === 'production' ? (
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src="//js.hs-scripts.com/6991762.js"
            />
          ) : (
            <></>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
