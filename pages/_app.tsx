import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "tailwindcss/tailwind.css";
import { AppStoreProvider } from "../stores/AppContext";

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
