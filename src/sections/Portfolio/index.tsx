import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ProjectList from "@/components/ProjectList";
import projectList from "@/data/projects";

const Portfolio: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className='max-w-screen-2xl space-y-12 mx-auto px-4 md:px-8 my-20 lg:my-32'>
      <h2 className='text-4xl font-bold'>{t("My best projects")}</h2>

      <ProjectList
        projects={projectList.filter((project) => project.isBest).slice(0, 3)}
        className='last-hidden'
      />

      <div className='flex justify-center w-full'>
        <Link href='portfolio'>
          <a className='btn-secondary'>{t("More")}</a>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
