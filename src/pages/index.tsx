import { AsideSlide } from "@/components/AsideSlide";
import { Navbar } from "@/components/Navbar";
import { AsideEffect } from "@/hooks/AsideEffect";
import { option } from "@/types";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const menu: option[] = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Work",
    link: "#work",
  },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
  { title: "Resume", link: "/cv.pdf", styleCustom: true },
];
const social: option[] = [
  { title: "github", link: "https://github.com/newtyf" },
  { title: "linkedin", link: "https://www.linkedin.com/in/axel-mu%C3%B1oz/" },
  { title: "instagram", link: "https://www.instagram.com/newt_yf/" },
];
const mail = "axelskam.098@gmail.com";

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
          <div className='typewriter'>
            <h1 className='title-home'>YoungFlex</h1>
          </div>
          <h2 className='subtitle-home animate__animated animate__fadeInDown animate__slow'>
            I build things for the web.
          </h2>
          <p className='description animate__animated animate__fadeInDown'>
            Soy un Desarrollador Fullstack especializado en la construccion (y
            ocasionalmente en el diseño) de increibles experiencias web, como
            tambien un apasionado en el desarrollo de videojuegos.
          </p>
          <a
            className='animate__animated animate__fadeInDown btn'
            href='mailto:axelskam.123@outlook.es'
          >
            Contact me!
          </a>
        </section>
        {/* SECOND SECTION */}
        <section id='about'>
          <div className='about-content container'>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              necessitatibus quo consequatur ab quasi numquam qui ipsam, ipsa
              ipsum possimus architecto totam in harum, reiciendis pariatur
              optio. Dolorum, suscipit nesciunt.
            </p>
          </div>
        </section>
      </main>

      {/* menu slide */}
      <AsideSlide
        menu={menu}
        hideSlide={hideSlide}
      />

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
