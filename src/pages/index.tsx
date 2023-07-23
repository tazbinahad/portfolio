import { Header, HeroSection } from "@/components";
import styles from "@/styles/Home.module.scss";
import { switchMode } from "@/utils/utils";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // switch color mode
  useEffect(() => {
    switchMode("light");
  }, []);

  return (
    <>
      {/* =========Site Descriptions========= */}
      <Head>
        <title>Tazbin Ahad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* =========Header Part=========*/}
      <Header />
      {/* =========Main Content========= */}
      <main className={`${styles.main} ${inter.className}`}>
        {/* ========Hero Section======= */}
        <HeroSection />
      </main>
    </>
  );
}
