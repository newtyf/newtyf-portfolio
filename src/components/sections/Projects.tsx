import { project } from "@/types";
import { ProjectCard } from "../ProjectCard";
import { Grid } from "@mui/material";
import { useState } from "react";

export const Projects = ({ projects }: { projects: project[] }) => {
  const [show, setshow] = useState<boolean>(false);

  const showMoreProjects = () => {
    setshow(!show);
  };

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
      <div className='extra-projects reveal'>
        <h2 className='title-chip'>More projects</h2>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, md: 12 }}
          overflow={show ? "visible" : "hidden"}
          height={show ? "auto" : "420px"}
          sx={{ transition: "overflow 800ms" }}
        >
          {Array.from(Array(6)).map(() => (
            <Grid item xs={12} md={4} key={"A"}>
              <a href='google.com'>
                <div className='project'>
                  <div className='project-title'>
                    <i className='bi bi-folder'></i>
                    <div className='list-icons'>
                      <i className='bi bi-github'></i>
                      <i className='bi bi-box-arrow-up-right'></i>
                    </div>
                  </div>
                  <div className='project-content'>
                    <h3 className='content-title'>titssssssssssssssssle</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Facilis sit fuga ipsam aliquid vitae in nam repellat sequi
                    </p>
                  </div>
                </div>
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
      <button onClick={showMoreProjects}>show projects</button>
    </section>
  );
};
