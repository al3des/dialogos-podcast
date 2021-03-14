import "@styles/globals.css";
import Layout from "@components/layout/Layout";
import Head from "next/head";
import AudioProvider from "context/AudioContext";

function Application({ Component, pageProps }) {
  return (
    <AudioProvider>
      <Layout>
        <Head>
          <link
            href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAIxKAwD/sl4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIiIgAAAAAAABEAAAAAAAAAEQAAAAAAAAARAAAAAAAAAREgAAAAAAAQAAIAAAAAAQARACAAAAADAREQEAAAAAMBERAQAAAAAwEREBAAAAAAAREQAAAAAAABERAAAAAAAAEREAAAAAAAAxEQAAAAAAAAMQAAAAAAAAAAAAAAD4HwAA/n8AAP5/AAD+fwAA/D8AAPvfAAD2bwAA9C8AAPQvAAD0LwAA/D8AAPw/AAD8PwAA/D8AAP5/AAD//wAA"
            rel="icon"
            type="image/x-icon"
          />
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
