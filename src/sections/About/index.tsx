import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { motion, Variants } from "framer-motion";
import { ProfileImage } from "@/assets/img";

const aboutPictureAnimation: Variants = {
  hidden: {
    y: 32,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, ease: "easeInOut" }
  }
};

const About: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id='about'
      className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 max-w-screen-2xl mx-auto px-4 md:px-8 py-20 lg:py-32'
    >
      <div className='w-full max-w-md lg:max-w-2xl'>
        <h2 className='uppercase tracking-wider text-base lg:text-lg text-gray-600 dark:text-gray-400 font-medium mb-2'>
          {t("Hi, I'm Paul Kotov")} 👋
        </h2>

        <p className='text-lg lg:text-2xl leading-relaxed md:leading-relaxed'>
          {t("About Me")}
        </p>
      </div>

      <motion.div
        className='max-w-sm 2xl:max-w-md drop-shadow-2xl'
        variants={aboutPictureAnimation}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
      >
        <Image
          src={ProfileImage}
          className='rounded-3xl'
          alt='profle'
          priority
        />
      </motion.div>
    </section>
  );
};

export default About;
