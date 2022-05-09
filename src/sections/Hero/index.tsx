import Link from "next/link";

const Hero: React.FC = () => (
  <section className='flex flex-col relative gap-8 mt-16 lg:mt-24 px-8 pt-40 pb-32 lg:pt-24 lg:pb-16 justify-center items-center overflow-x-clip'>
    <div className='absolute inset-0 scale-y-125 scale-x-150 translate-x-1/4 rotate-6 bg-gradient-to-tr from-white to-primary/30 blur-3xl -z-10' />

    <h1 className='text-4xl lg:text-6xl font-black text-center max-w-lg lg:max-w-4xl'>
      Design, develop and boost your services
    </h1>

    <Link href='/#contacts'>
      <a className='btn-primary'>Let&apos;s create together</a>
    </Link>
  </section>
);

export default Hero;
