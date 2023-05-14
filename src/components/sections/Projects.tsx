import { project } from "@/types";
import { ProjectCard } from "../ProjectCard";

export const Projects = ({ projects }: { projects: project[] }) => {
  return (
    <section id='projects' className='container'>
      <div className='title-section reveal'>
        <h2>
          <span className='code-number'>03. </span>
          <a href='#about' className='nav'>
            Some Things I&apos;ve Built
          </a>
        </h2>
        <span className='line-title'></span>
      </div>
      {projects.map((project, index) => (
        <ProjectCard
          project={project}
          rigth={index % 2 === 0}
          key={project.github}
        />
      ))}
    </section>
  );
};
