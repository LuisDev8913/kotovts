import type { NextPage } from "next";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import Layout from "@/components/Layout";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Portfolio from "@/sections/Portfolio";
import Contacts from "@/sections/Contacts";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <title>{t("Paul Kotov")}</title>
      </Head>

      <Hero />
      <About />
      <Portfolio />
      <Contacts />
    </Layout>
  );
};

export default Home;
