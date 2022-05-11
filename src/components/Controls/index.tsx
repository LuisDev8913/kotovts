import { LanguageIcon, MoonIcon, SunIcon } from "@/assets/svg";
import { useToggle } from "@/hooks/useToggle";
import Link from "next/link";
import { useRouter } from "next/router";

const Controls: React.FC = () => {
  const [isLight, toggle] = useToggle(true);

  const router = useRouter();

  return (
    <div className='flex text-2xl gap-4 pr-4 md:pr-0 md:pl-4 border-gray-500 border-r md:border-r-0 md:border-l'>
      <button type='button' onClick={toggle}>
        {isLight ? (
          <SunIcon className='w-7 h-7 stroke-black md:hover:stroke-primary focus:stroke-primary active:stroke-primary transition ease-in-out delay-150' />
        ) : (
          <MoonIcon className='w-7 h-7 fill-black md:hover:fill-primary focus:fill-primary active:fill-primary transition ease-in-out delay-150' />
        )}
      </button>

      <button className='relative group focus:outline-none' type='button'>
        <LanguageIcon className='w-7 h-7 fill-black md:hover:fill-primary focus:fill-primary active:fill-primary transition ease-in-out delay-150' />

        <div className='text-lg pt-4 absolute bottom-0 translate-y-3/4 -right-2 opacity-0 pointer-events-none transition ease-in-out delay-150 group-hover:opacity-100 hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-[95%]'>
          <div className='flex flex-col items-end gap-2'>
            <Link href={router.asPath} locale='en' scroll={false}>
              <a
                className={`${
                  router.locale == "en" && "hidden"
                } font-medium whitespace-nowrap flex px-5 py-3 bg-white/80 rounded-2xl shadow-gray-500/5 shadow-md`}
              >
                🇬🇧 English
              </a>
            </Link>

            <Link href={router.asPath} locale='uk' scroll={false}>
              <a
                className={`${
                  router.locale == "uk" && "hidden"
                } font-medium whitespace-nowrap flex px-5 py-3 bg-white/80 rounded-2xl shadow-gray-500/5 shadow-md`}
              >
                🇺🇦 Солов&apos;їна
              </a>
            </Link>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Controls;
