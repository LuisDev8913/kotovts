import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/assets/svg";

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button type='button' onClick={toggleTheme}>
      {theme === "dark" ? (
        <MoonIcon className='w-7 h-7 fill-black dark:fill-white' />
      ) : (
        <SunIcon className='w-7 h-7 stroke-primary-500 dark:stroke-primary-400' />
      )}
    </button>
  );
};

export default ThemeSwitch;
