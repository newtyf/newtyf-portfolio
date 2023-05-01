import { project } from "@/types";
import Image from "next/image";
import React from "react";

export const Projects = ({ projects }: { projects: project[] }) => {
  return (
    <section id='projects' className='container'>
      <div className='title-section'>
        <h2>
          <span className='code-number'>03. </span>
          <a href='#about' className='nav'>
            Some Things I&apos;ve Built
          </a>
        </h2>
        <span className='line-title'></span>
      </div>
      {projects.map((project, index) => (
        <div
          className={
            index % 2 === 0 ? "projects-content rigth" : "projects-content"
          }
          key={project.liveSite}
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
                <a
                  href={project.liveSite}
                  className='icon'
                  title='link to page'
                  target='_blank'
                >
                  <i className='bi bi-box-arrow-up-right'></i>
                </a>
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
      ))}
    </section>
  );
};
