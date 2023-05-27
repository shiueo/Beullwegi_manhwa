import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
