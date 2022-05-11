import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Hero: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className='flex flex-col relative gap-8 mt-16 lg:mt-24 px-8 pt-40 pb-32 lg:pt-24 lg:pb-16 justify-center items-center overflow-x-clip'>
      <div className='absolute inset-0 scale-y-125 scale-x-150 translate-x-1/4 rotate-6 bg-gradient-to-tr from-white dark:from-transparent to-primary/30 blur-3xl -z-10' />

      <h1 className='text-4xl lg:text-6xl font-black text-center max-w-lg lg:max-w-4xl'>
        {t("h1")}
      </h1>

      <Link href='/#contacts'>
        <a className='btn-primary'>{t("Let's create together")}</a>
      </Link>
    </section>
  );
};

export default Hero;
