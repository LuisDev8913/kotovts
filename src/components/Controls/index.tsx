import { LanguageIcon, MoonIcon, SunIcon } from "@/assets/svg";
import { useToggle } from "@/hooks/useToggle";

const Controls: React.FC = () => {
  const [isLight, toggle] = useToggle(true);

  return (
    <div className='flex text-2xl gap-4 pr-4 md:pr-0 md:pl-4 border-r md:border-r-0 md:border-l'>
      <button onClick={toggle}>
        {isLight ? (
          <SunIcon className='w-7 h-7 stroke-black' />
        ) : (
          <MoonIcon className='w-7 h-7 fill-black' />
        )}
      </button>

      <button>
        <LanguageIcon className='w-7 h-7 fill-black' />
      </button>
    </div>
  );
};

export default Controls;
