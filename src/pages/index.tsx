import type { NextPage } from "next";
import Head from "next/head";

import Layout from "@/components/Layout";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Portfolio from "@/sections/Portfolio";
import Contacts from "@/sections/Contacts";

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>Paul Kotov</title>
    </Head>

    <Hero />
    <About />
    <Portfolio />
    <Contacts />
  </Layout>
);

export default Home;
