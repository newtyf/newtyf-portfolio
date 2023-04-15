import "@/styles/globals.scss";
// import 'bootstrap/dist/css/bootstrap.css'
import "animate.css"

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Newt Yf</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
