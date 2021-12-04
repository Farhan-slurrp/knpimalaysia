/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <main className="p-8">
        <img
          src="/under-construction.jpeg"
          alt="under-construction"
          className="w-full"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
