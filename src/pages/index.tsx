import { AsideSlide } from "@/components/AsideSlide";
import { Navbar } from "@/components/Navbar";
import VerticalTabs from "@/components/VerticalTabs";
import { AsideEffect } from "@/hooks/AsideEffect";
import { job, option } from "@/types";
import Image from "next/image";

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
const works: job[] = [
  {
    title: "Picnic Creativa",
    description: [
      `Encargado del desarrollo e implementacion de nuevas features tanto en el lado Frontend como en el lado Backend.`,
      `Implementacion y desarrollo de Mails Automatizados`,
      `Administrar y gestionar los servidores de desarrollo.`,
      `Desarrollo de bots automatizado para la trazabilidad de errores y
      getion de los servicios implementados.`,
      `Generar codigo SQL para la gestion e implementacion de nuevas
      features en la Base de Datos.`,
    ],
    role: "Desarrolllador Web",
    start: "ENE 2022",
    end: "JUL 2022",
  },
  {
    title: "Mirum Agency",
    description: [
      "Maquetado de Mails",
      "Testeo de Mails",
      "Investigación de servicios para la mejora en el desarrollo de mails",
    ],
    role: "Programador",
    start: "JUL 2022",
    end: "MAR 2023",
  },
];

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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                magnam odit ex consequuntur. Eos ab quos, nam harum facere
                cupiditate tempora nostrum inventore aspernatur quaerat
                repudiandae molestias consequuntur. Veniam, recusandae?
                Consectetur quam, deleniti vero nulla totam quod sint officiis
                consequatur laboriosam quis repellat libero unde, sit molestias
                esse blanditiis similique quia voluptatibus sequi. Accusantium
                velit quibusdam reiciendis dolores nemo. A.
              </p>

              <p>
                Nihil voluptas non labore nisi ipsa doloremque illo porro enim!
                Optio inventore quis reprehenderit ab provident, adipisci ipsam
                dolores libero maxime earum cum quo ipsum similique! Error
                similique aperiam sequi! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aut impedit, cumque ipsum porro sed ab
                voluptatibus amet consequuntur beatae molestias eaque labore
                eius debitis voluptatum velit ex, culpa, quidem laudantium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                impedit, cumque ipsum porro sed ab voluptatibus amet
                consequuntur beatae molestias eaque labore eius debitis
                voluptatum velit ex, culpa, quidem laudantium.
              </p>
              <ul>
                <li>Javascript</li>
                <li>TypeScript</li>
                <li>C# & .Net</li>
                <li>AWS</li>
                <li>Golang</li>
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
