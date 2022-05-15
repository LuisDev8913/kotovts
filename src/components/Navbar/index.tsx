import { useMemo } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import useTranslation from "next-translate/useTranslation";

interface Props {
  open: boolean;
}

const navLinkAnimation: Variants = {
  hidden: {
    y: -32,
    opacity: 0
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.05, ease: "easeInOut" }
  })
};

const Navbar: React.FC<Props> = ({ open }) => {
  const { t } = useTranslation("common");

  const windowWidth = useWindowWidth()!;

  const initialNavbar = useMemo(
    () => (windowWidth < 767 ? "hidden" : "visible"),
    [windowWidth]
  );

  return (
    <motion.nav
      animate={open ? "visible" : initialNavbar}
      className={`md:text-center font-bold text-4xl md:text-lg flex flex-col md:flex-row items-center gap-6 w-full md:w-auto inset-0 absolute md:relative top-24 md:top-auto md:opacity-100 md:pointer-events-auto transition ease-out delay-150 z-10 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <Link href='/#about' passHref>
        <motion.a
          custom={1}
          variants={navLinkAnimation}
          className='md:hover:text-primary dark:md:hover:text-primary-400 active:text-primary dark:active:text-primary-400 whitespace-nowrap transition ease-in-out delay-150'
        >
          {t("About")}
        </motion.a>
      </Link>
      <Link href='/portfolio' passHref>
        <motion.a
          custom={2}
          variants={navLinkAnimation}
          className='md:hover:text-primary dark:md:hover:text-primary-400 active:text-primary dark:active:text-primary-400 whitespace-nowrap transition ease-in-out delay-150'
        >
          {t("Portfolio")}
        </motion.a>
      </Link>
      <Link href='#contacts' passHref>
        <motion.a
          custom={3}
          variants={navLinkAnimation}
          className='md:hover:text-primary dark:md:hover:text-primary-400 active:text-primary dark:active:text-primary-400 whitespace-nowrap transition ease-in-out delay-150'
        >
          {t("Contacts")}
        </motion.a>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
