import { LanguageIcon } from "@/assets/svg";
import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitch: React.FC = () => {
  const router = useRouter();

  return (
    <button className='relative group' type='button'>
      <LanguageIcon className='w-7 h-7 fill-black dark:fill-white' />

      <div className='text-lg pt-4 absolute bottom-0 translate-y-3/4 -right-2 opacity-0 pointer-events-none transition ease-in-out delay-150 group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto group-focus:pointer-events-auto group-hover:translate-y-[95%] group-focus:translate-y-[95%]'>
        <div className='flex flex-col items-end gap-2'>
          <Link href={router.asPath} locale='en' scroll={false}>
            <a
              className={`${
                router.locale == "en" && "hidden"
              } font-medium whitespace-nowrap flex px-5 py-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-gray-500/5 shadow-md`}
            >
              🇬🇧 English
            </a>
          </Link>

          <Link href={router.asPath} locale='uk' scroll={false}>
            <a
              className={`${
                router.locale == "uk" && "hidden"
              } font-medium whitespace-nowrap flex px-5 py-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-gray-500/5 shadow-md`}
            >
              🇺🇦 Солов&apos;їна
            </a>
          </Link>
        </div>
      </div>
    </button>
  );
};

export default LanguageSwitch;
