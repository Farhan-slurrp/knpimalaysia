import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-batik">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
