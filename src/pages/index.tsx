import type { NextPage } from "next";
import Head from "next/head";

import Layout from "@/components/Layout";

import Hero from "@/sections/Hero";
import About from "@/sections/About";

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>Paul Kotov</title>
    </Head>

    <Hero />
    <About />
  </Layout>
);

export default Home;
