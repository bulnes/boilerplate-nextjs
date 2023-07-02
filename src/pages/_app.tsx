import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="application-name" content="React Avançado - Boilerplate" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="React Avançado - Boilerplate"
        />

        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="msapplication-TileColor" content="#06092B" />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="theme-color" content="#06092B" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/img/icon-512.png" />

        <title>React Avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
