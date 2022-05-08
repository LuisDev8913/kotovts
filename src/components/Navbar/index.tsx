import { useMemo } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useWindowWidth } from "@/hooks/useWindowWidth";

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
          className='md:hover:text-primary active:text-primary whitespace-nowrap transition ease-in-out delay-150'
        >
          About
        </motion.a>
      </Link>
      <Link href='/portfolio' passHref>
        <motion.a
          custom={2}
          variants={navLinkAnimation}
          className='md:hover:text-primary active:text-primary whitespace-nowrap transition ease-in-out delay-150'
        >
          Portfolio
        </motion.a>
      </Link>
      <Link href='#contacts' passHref>
        <motion.a
          custom={3}
          variants={navLinkAnimation}
          className='md:hover:text-primary active:text-primary whitespace-nowrap transition ease-in-out delay-150'
        >
          Contacts
        </motion.a>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
