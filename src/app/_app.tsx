// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "./components/Header";
// import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>My Church Website</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;
