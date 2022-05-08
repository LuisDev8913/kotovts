import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Controls from "@/components/Controls";
import { useToggle } from "@/hooks/useToggle";
import { LogoImage } from "@/assets/img";

export const Header: React.FC = () => {
  const [open, toggle, setOpen] = useToggle();

  const router = useRouter();

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <header
      className={`fixed inset-0 bottom-auto bg-white/60 backdrop-blur-md opacity-100 px-4 sm:px-8 transition-[height] ease-in-out delay-150 z-10 ${
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

            <span className='text-2xl lg:text-3xl font-black'>Paul Kotov</span>
          </a>
        </Link>

        <div className='flex items-center gap-4'>
          <Navbar open={open} />

          <Controls />

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
