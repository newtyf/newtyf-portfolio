import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const menu = [
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
];

const social = [
  { title: "github", link: "https://github.com/newtyf" },
  { title: "linkedin", link: "https://www.linkedin.com/in/axel-mu%C3%B1oz/" },
];

const mail = "axelskam.098@gmail.com";

export default function Home() {
  return (
    <>
      <header>
        <Link className='animate__animated animate__fadeInDown' href={"#home"}>
          <h2>Newtyf</h2>
        </Link>
        <nav>
          <ol>
            {menu.map((item, index) => (
              <li
                className={`animate__animated`}
                style={{animationDelay: `${(index+1)/2}s`}}
                key={item.title}
              >
                <Link className='line' href={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <main>
        {/* FIRST SECTION */}
        <div id='home' className='home'>
          <div id='particles-js'></div>
          <div className='home-content'>
            <div className='home-content__info'>
              <h1 className='title-home animate__animated animate__fadeInDown'>
                YoungFlex
              </h1>
              <p className='description animate__animated animate__fadeInDown'>
                {
                  "Soy un desarrollador FullStack especializado en la construccion de herramientas y experiencias digitales."
                }
              </p>
              <a
                className='animate__animated animate__fadeInDown btn'
                href='mailto:axelskam.123@outlook.es'
              >
                Contact me!
              </a>
            </div>
          </div>
        </div>
        {/* SECOND SECTION */}
        <div id='about' className='about'>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            necessitatibus quo consequatur ab quasi numquam qui ipsam, ipsa
            ipsum possimus architecto totam in harum, reiciendis pariatur optio.
            Dolorum, suscipit nesciunt.
          </p>
        </div>
      </main>

      {/* FIXED SOCIAL */}
      <div className='animate__animated animate__fadeInUpBig social'>
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
        <ul className='social-list'>
          <li className='text-reverse'>
            <a className='line' href={`mailto=${mail}`}>
              {mail}
            </a>
          </li>
        </ul>
        <div className='social-line'></div>
      </div>
    </>
  );
}
