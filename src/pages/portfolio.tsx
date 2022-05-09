import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import ProjectList from "@/components/ProjectList";
import Contacts from "@/sections/Contacts";
import projectList from "@/data/projects";

const Portfolio: NextPage = () => (
  <Layout>
    <Head>
      <title>Paul Kotov - Portfolio</title>
    </Head>

    <section className='relative lg:mt-24 py-32 px-8 overflow-x-clip'>
      <div className='absolute inset-0 bottom-auto h-64 scale-y-125 scale-x-150 translate-x-1/4 rotate-6 bg-gradient-to-tr from-white to-primary/30 blur-3xl -z-10' />

      <div className='max-w-screen-2xl w-full mx-auto'>
        <h1 className='text-4xl lg:text-6xl font-black mb-16'>Portfolio</h1>

        <ProjectList projects={projectList} />
      </div>
    </section>

    <Contacts />
  </Layout>
);

export default Portfolio;
