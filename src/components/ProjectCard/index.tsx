import type { Project } from "@/data/projects";
import Image from "next/image";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => (
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
      <Image src={project.img} className='rounded-xl' alt={project.title} />
    </div>

    <span className='text-2xl font-bold mb-1 group-hover:text-inherit group-focus:text-primary group-active:text-primary md:group-hover:text-primary transition ease-in-out delay-150'>
      {project.title}
    </span>
    <p className='leading-relaxed'>{project.description}</p>
  </a>
);

export default ProjectCard;
