import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useToggle } from "@/hooks/useToggle";
import { LogoImage } from "@/assets/img";

export const Header: React.FC = () => {
  const { t } = useTranslation("common");

  const [open, toggle, setOpen] = useToggle();

  const router = useRouter();

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <header
      className={`fixed inset-0 bottom-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-md opacity-100 px-4 sm:px-8 transition-[height] ease-in-out delay-150 z-20 ${
        open ? "h-full" : "h-16 lg:h-24"
      }`}
    >
      <div className='relative flex items-center w-full 2xl:max-w-screen-2xl h-16 lg:h-24 mx-auto justify-between'>
        <Link href='/'>
          <a className='flex gap-4 items-center'>
            <div className='drop-shadow-[-4px_4px_7px_rgba(0,0,0,0.15)] w-8 lg:w-12'>
              <Image
                src={LogoImage}
                layout='responsive'
                alt='paul kotov logo'
                priority
              />
            </div>

            <span className='text-2xl lg:text-3xl font-black'>
              {t("Paul Kotov")}
            </span>
          </a>
        </Link>

        <div className='flex items-center gap-3 md:gap-4'>
          <Navbar open={open} />

          <div className='flex text-2xl gap-3 pr-3 md:pr-0 md:pl-4 border-gray-500 dark:border-gray-300 border-r md:border-r-0 md:border-l'>
            <ThemeSwitch />
            <LanguageSwitch />
          </div>

          <div
            className={`block md:hidden ${open ? "open" : ""}`}
            id='toggler'
            onClick={toggle}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
