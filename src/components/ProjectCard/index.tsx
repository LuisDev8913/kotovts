import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { motion, Variants } from "framer-motion";
import type { Project } from "@/data/projects";

interface Props {
  custom: number;
  project: Project;
}

const projectCardAnimation: Variants = {
  hidden: {
    y: 32,
    opacity: 0
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.2, ease: "easeInOut" }
  })
};

const ProjectCard: React.FC<Props> = ({ custom, project }) => {
  const { lang } = useTranslation("common");

  return (
    <motion.a
      href={project.url}
      className='relative flex flex-col group'
      variants={projectCardAnimation}
      custom={custom}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.05, once: true }}
      target='_blank'
      rel='noreferrer'
    >
      {project.isBest && (
        <span className='text-6xl absolute drop-shadow-red -top-6 -right-4 pointer-events-none z-10'>
          🔥
        </span>
      )}

      <div className='flex drop-shadow-xl rounded-xl overflow-hidden mb-4'>
        <Image
          src={project.img}
          alt={project.title}
          className='rounded-xl'
          placeholder='blur'
        />
      </div>

      <span className='text-2xl font-bold mb-1 group-hover:text-inherit group-focus:text-primary-500 dark:group-focus:text-primary-400 group-active:text-primary-500 dark:group-active:text-primary-400 md:group-hover:text-primary-500 dark:md:group-hover:text-primary-400 transition ease-in-out delay-150'>
        {project.title}
      </span>
      <p className='leading-relaxed'>
        {project.description[lang as "en" | "uk"]}
      </p>
    </motion.a>
  );
};

export default ProjectCard;
