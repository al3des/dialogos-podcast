import Layout from "@components/layout/Layout";
import "@styles/globals.css";
import AudioProvider from "context/AudioContext";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <AudioProvider>
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"
          ></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AudioProvider>
  );
}

export default Application;
