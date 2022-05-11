import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { lang } = useTranslation("common");

  return (
    <a
      href={project.url}
      target='_blank'
      rel='noreferrer'
      className='relative flex flex-col group'
    >
      {project.isBest && (
        <span className='text-6xl absolute drop-shadow-red -top-6 -right-4 pointer-events-none z-10'>
          🔥
        </span>
      )}

      <div className='drop-shadow-xl mb-4'>
        <Image
          src={project.img}
          className='rounded-xl'
          alt={project.title[lang as "en" | "uk"]}
        />
      </div>

      <span className='text-2xl font-bold mb-1 group-hover:text-inherit group-focus:text-primary group-active:text-primary md:group-hover:text-primary transition ease-in-out delay-150'>
        {project.title[lang as "en" | "uk"]}
      </span>
      <p className='leading-relaxed'>
        {project.description[lang as "en" | "uk"]}
      </p>
    </a>
  );
};

export default ProjectCard;
