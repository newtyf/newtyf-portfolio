import { project } from "@/types";
import Image from "next/image";

export const ProjectCard = ({
  project,
  rigth = true,
}: {
  project: project;
  rigth: boolean;
}) => {
  return (
    <div
      className={
        rigth ? "projects-content reveal rigth" : "projects-content reveal"
      }
    >
      <div className='projects-content__text'>
        <h4>Featured Project</h4>
        <h3>
          <a href={project.liveSite} className='line' target='_blank'>
            {project.title}
          </a>
        </h3>
        <div className='description'>
          <p>{project.description}</p>
        </div>
        <ul className='tags'>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ul className='link-icons'>
          <li>
            <a
              href={project.github}
              className='icon'
              title='github'
              target='_blank'
            >
              <i className={`bi bi-github`}></i>
            </a>
          </li>
          <li>
            {project.liveSite && (
              <a
                href={project.liveSite}
                className='icon'
                title='link to page'
                target='_blank'
              >
                <i className='bi bi-box-arrow-up-right'></i>
              </a>
            )}
          </li>
        </ul>
      </div>
      <div className='projects-content__image'>
        <a href={project.liveSite} title='project link' target='_blank'>
          <Image
            width={700}
            height={300}
            src={project.image}
            alt='project-photo'
          />
        </a>
      </div>
    </div>
  );
};
