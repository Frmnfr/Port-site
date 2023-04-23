import Image from "next/image";
import { Dongle, Inter } from "next/font/google";
import Head from "next/head";
import dynamic from "next/dynamic";
import { NextPage } from "next";

const LittleWitch = dynamic(() => import("../components/Section"), {
  ssr: false,
  // loading: () => <p>Loading...</p>,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Naufal | Javascript Dev</title>
      </Head>
      <LittleWitch />
    </div>
  );
};
export default Home;
