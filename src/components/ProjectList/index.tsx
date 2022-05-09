import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

interface Props {
  projects: Project[];
  className?: string;
}

const ProjectList: React.FC<Props> = ({ projects, className }) => (
  <div
    className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 ${className}`}
  >
    {projects.map((project, i) => (
      <ProjectCard key={i} project={project} />
    ))}
  </div>
);

export default ProjectList;
