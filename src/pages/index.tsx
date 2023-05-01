import Image from "next/image";
import { Navbar, AsideSlide } from "@/components/";
import { About, Contact, Home, Work } from "@/components/sections";

import { AsideEffect } from "@/hooks/AsideEffect";
import { menu, jobs, social, mail, projects } from "@/utils/profile";
import { Projects } from "@/components/sections/Projects";

export default function Index({
  stargazers_count,
  followers,
}: {
  stargazers_count: number;
  followers: number;
}) {
  const { hideSlide, showSlide } = AsideEffect();

  return (
    <>
      <Navbar menu={menu} showSlide={showSlide} />
      <main>
        {/* particles */}
        <div id='particles-js'></div>
        {/* FIRST SECTION */}
        <Home />
        {/* SECOND SECTION */}
        <About />
        {/* THIRD SECTION */}
        <Work listJobs={jobs} />
        {/* FOURTH SECTION */}
        <Projects projects={projects} />
        {/* FIFTH SECTION */}
        <Contact />
        {/* FOOTER */}
        <footer>
          <a
            href='https://github.com/newtyf/newtyf-portfolio'
            target='_blank'
            className='nav'
            rel='noopener'
          >
            Designed & Built by Axel Muñoz
            <br />
            <span>
              {stargazers_count} <i className='bi bi-stars'></i>
            </span>{" "}
            |{" "}
            <span>
              {followers} <i className='bi bi-github'></i>{" "}
            </span>
          </a>
        </footer>
      </main>

      {/* menu slide */}
      <AsideSlide menu={menu} hideSlide={hideSlide} />

      {/* FIXED SOCIAL */}
      <div className='animate__animated animate__fadeInUpBig social icons'>
        <ul className='social-list'>
          {social.map((item) => (
            <li key={item.title}>
              <a
                title='social-link'
                href={item.link}
                className='icon'
                target='_blank'
              >
                <i className={`bi bi-${item.title}`}></i>
              </a>
            </li>
          ))}
        </ul>
        <div className='social-line'></div>
      </div>
      <div className='animate__animated animate__fadeInUpBig social mail'>
        <ul className='social-list reverse'>
          <li className='text-reverse'>
            <a className='icon' href={`mailto:${mail}`}>
              {mail}
            </a>
          </li>
        </ul>
        <div className='social-line'></div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.github.com/repos/newtyf/newtyf-portfolio`
  );
  const dataRepo = await res.json();

  const resUser = await fetch(`https://api.github.com/users/newtyf`);
  const dataUser = await resUser.json();

  const { stargazers_count } = dataRepo;
  const { followers } = dataUser;
  return { props: { stargazers_count, followers } };
}
