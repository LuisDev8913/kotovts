import useTranslation from "next-translate/useTranslation";
import ContactForm from "@/components/ContactForm";
import Links from "@/components/Links";
import links from "@/data/links";

const Contacts: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id='contacts'
      className='max-w-screen-xl mx-auto px-4 md:px-8 py-20 lg:py-32'
    >
      <h3 className='text-4xl font-bold mb-8'>{t("Contacts")}</h3>

      <div className='flex flex-col-reverse md:flex-row gap-12'>
        <div className='w-full'>
          <ContactForm />
        </div>

        <div className='w-full space-y-6'>
          <div>
            <span className='uppercase tracking-wider text-sm text-gray-600 font-medium block mb-2'>
              {t("E-Mail")}
            </span>
            <a
              href='mailto:paul@kotov.com.ua'
              className='text-xl md:hover:text-primary focus:text-primary active:text-primary transition ease-in-out delay-150'
            >
              paul@kotov.com.ua
            </a>
          </div>

          <div>
            <span className='uppercase tracking-wider text-sm text-gray-600 font-medium block mb-2'>
              {t("Follow")}
            </span>
            <div className='flex gap-2'>
              <Links links={links} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
