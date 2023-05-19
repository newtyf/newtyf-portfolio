import "@/styles/globals.scss";
// import 'bootstrap/dist/css/bootstrap.css'
import "animate.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (process.env.NODE_ENV === "production") {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Newtyf</title>
        <link rel='icon' href='/favicon.ico'></link>
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
