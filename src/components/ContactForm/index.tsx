import { Spinner } from "@/assets/svg";
import { useForm } from "@formspree/react";
import useTranslation from "next-translate/useTranslation";
import { FormEventHandler, useState } from "react";

const ContactForm: React.FC = () => {
  const { t } = useTranslation("common");

  const [state, submit] = useForm(process.env.FORM_ID!, {
    data: { subject: "From Contact Form" }
  });

  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setIsSubmited(true);

    submit(e);

    (e.target as HTMLFormElement).reset();

    setTimeout(() => setIsSubmited(false), 2000);
  };

  return (
    <form className='max-w-sm' onSubmit={handleSubmit}>
      <label>
        <span className='uppercase tracking-wider font-medium text-sm text-gray-600 mb-2 block'>
          {t("Name")}
        </span>
        <input
          name='name'
          type='text'
          className='border border-gray-300 focus:border-primary rounded-xl px-5 py-3 mb-6 text-base transition duration-200 w-full'
          placeholder={t("Igor Pechkin")}
        />
      </label>
      <label>
        <span className='uppercase tracking-wider font-medium text-sm text-gray-600 mb-2 block'>
          {t("E-Mail")}
          <span className='text-primary'>*</span>
        </span>
        <input
          name='email'
          type='email'
          className='border border-gray-300 focus:border-primary rounded-xl px-5 py-3 mb-6 text-base transition duration-200 w-full'
          placeholder='postman.igor.pechkin@gmail.com'
          required
        />
      </label>
      <label>
        <span className='uppercase tracking-wider font-medium text-sm text-gray-600 mb-2 block'>
          {t("Message")}
          <span className='text-primary'>*</span>
        </span>
        <textarea
          name='message'
          className='border border-gray-300 focus:border-primary rounded-xl px-5 py-3 mb-6 text-base transition duration-200 w-full resize-none'
          placeholder={t("Dear Paul") + "..."}
          rows={8}
          required
        ></textarea>
      </label>

      <button
        className={`btn-primary ${
          state.errors.length ? "btn-error" : ""
        } ml-auto`}
        type='submit'
        disabled={state.submitting}
      >
        {state.submitting ? (
          <div className='px-[1.2rem]'>
            <Spinner className='w-6 h-6 text-white/50 animate-spin fill-white' />
          </div>
        ) : state.succeeded && isSubmited ? (
          t("Success")
        ) : (
          t("Submit")
        )}
      </button>
    </form>
  );
};

export default ContactForm;
