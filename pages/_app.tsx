import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AppStoreProvider } from "../stores/AppContext";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStoreProvider>
      <div className="bg-batik">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </AppStoreProvider>
  );
}

export default MyApp;
