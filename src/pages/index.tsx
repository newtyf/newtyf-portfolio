import { Navbar, AsideSlide } from "@/components/";
import { About, Contact, Home, Work } from "@/components/sections";

import { AsideEffect } from "@/hooks/AsideEffect";
import { menu, jobs, social, mail } from "@/utils/profile";

export default function Index() {
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
        <section id='projects' className="container">
          {/* <h2>daaaaaaa</h2> */}
        </section>
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
            <span>10000 y</span> | <span>221 fork</span>
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
