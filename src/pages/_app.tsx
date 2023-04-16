import "@/styles/globals.scss";
// import 'bootstrap/dist/css/bootstrap.css'
import "animate.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Newt Yf</title>
      </Head>
      <Component {...pageProps} />
      <Script
        src='https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
        onLoad={(e) => {
          window.particlesJS.load(
            "particles-js",
            "/particles.json",
            function () {
              console.log("callback - particles.js config loaded");
            }
          );
        }}
      ></Script>
    </>
  );
}
