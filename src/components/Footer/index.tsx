import useTranslation from "next-translate/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className='text-center text-gray-400 p-8'>
      {t("Made with love")} ❤️
    </footer>
  );
};

export default Footer;
