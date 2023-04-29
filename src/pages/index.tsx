import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { AsideSlide } from "@/components/AsideSlide";
import VerticalTabs from "@/components/VerticalTabs";

import { AsideEffect } from "@/hooks/AsideEffect";
import { menu, works, social, mail } from "@/utils/profile";

export default function Home() {
  const { hideSlide, showSlide } = AsideEffect();

  return (
    <>
      <Navbar menu={menu} showSlide={showSlide} />
      <main>
        {/* particles */}
        <div id='particles-js'></div>
        {/* FIRST SECTION */}
        <section id='home'>
          <h2 className='subtitle-home animate__animated animate__fadeInDown animate__slow'>
            I build things for the web.
          </h2>
          <div className='typewriter'>
            <h1 className='title-home'>YoungFlex</h1>
          </div>
          <p className='description animate__animated animate__fadeInDown'>
            I am a Fullstack Developer specialized in building (and occasionally
            in design) of amazing web experiences, such as Also passionate about
            video game development.
          </p>
          <a
            className='animate__animated animate__fadeInDown btn'
            href='mailto:axelskam.123@outlook.es'
          >
            Contact me!
          </a>
        </section>
        {/* SECOND SECTION */}
        <section id='about' className='container'>
          <div className='title-section animate__animated animate__fadeInDown animate__slow'>
            <h2>
              <span className='code-number'>01.</span>{" "}
              <a href='#about' className='nav'>
                About me
              </a>
            </h2>
            <span className='line-title'></span>
          </div>
          <div className='about-content animate__animated animate__fadeIn'>
            <div className='about-content__text'>
              <p>
                I am a Fullstack Developer residing in Lima, Peru with 3 years
                of experience in the software industry, I also passionate about
                the world of videogames for which to develop videogames 🕹️ it is
                what I do, especially more of me well..., I am a passionate
                about the urban genre (music, clothing 🐐), of the extreme
                sports (downhill 🚲), and as some say, a rat from the gym 💪🏽.
              </p>
              <p>
                Some technologies with which I have built this and other amazing
                websites or web applications:
              </p>
              <ul>
                <li>TypeScript</li>
                <li>C# & .Net</li>
                <li>Node JS</li>
                <li>AWS</li>
                <li>Next JS</li>
                <li>Sql & noSql</li>
              </ul>
            </div>
            <div className='about-content__image'>
              <div className='content-image animate__animated animate__fadeInDown animate__slow'>
                <Image
                  width={240}
                  height={240}
                  src={"/profile.jpg"}
                  alt='profile-photo'
                />
              </div>
            </div>
          </div>
        </section>
        {/* THIRD SECTION */}
        <section id='work' className='container'>
          <div className='title-section animate__animated animate__fadeInDown animate__slow'>
            <h2>
              <span className='code-number'>02.</span> Work
            </h2>
            <span className='line-title'></span>
          </div>
          <div className='work-content animate__animated animate__fadeIn'>
            <VerticalTabs works={works} />
          </div>
        </section>
        {/* FOURTH SECTION */}
        <section id='projects'></section>
        {/* FIFTH SECTION */}
        <section id='contact' className='container'>
          <h2 className='title-chip'>
            <span className='code-number'>04.</span> ¿Que sigue?
          </h2>
          <div className='contact-content'>
            <h2>Contact me!</h2>
            <p>
              I am currently looking for new challenges and projects. If you are
              interested in working with me, send me a message by clicking the
              button below.
            </p>
            <a
              href='mailto:axelskam.123@outlook.es'
              className='btn'
              target='_blank'
            >
              Hello!
            </a>
          </div>
        </section>
        {/* FOOTER */}
        <footer>
          <a href='https://github.com/newtyf/newtyf-portfolio' target="_blank" className='nav' rel="noopener">
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
