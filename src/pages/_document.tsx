import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const gtag: string = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Finger+Paint&family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap'
          rel='stylesheet'
        />
        <meta
          name='google-site-verification'
          content='oD6rxybfXL3VSOYH0xpWkP-d2SAFPEGaepElLIBO_lI'
        />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script async src={gtag}></Script>
            <Script
              id='google-analytics'
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GA_ID});`,
              }}
            ></Script>
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
