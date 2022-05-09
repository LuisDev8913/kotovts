import Image from "next/image";
import { ProfileImage } from "@/assets/img";

const About: React.FC = () => (
  <section
    id='about'
    className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 max-w-screen-2xl mx-auto px-4 md:px-8 py-20 lg:py-32'
  >
    <div className='w-full max-w-md lg:max-w-2xl'>
      <h2 className='uppercase tracking-wider text-base lg:text-lg text-gray-600 font-medium mb-2'>
        Hi, I&apos;m Paul Kotov 👋
      </h2>

      <p className='text-lg lg:text-2xl leading-relaxed md:leading-relaxed'>
        I&apos;m a Web Developer based in Kyiv, Ukraine. I use the full cycle of
        services to create and launch a website from scratch or redesign a live
        website along with the modern trends and requirements. I can help
        visualize even the craziest ideas converting them into elegant designs,
        awesome experiences and catchy brands.
      </p>
    </div>

    <div className='max-w-sm 2xl:max-w-md drop-shadow-2xl'>
      <Image src={ProfileImage} className='rounded-3xl' alt='profle' />
    </div>
  </section>
);

export default About;
