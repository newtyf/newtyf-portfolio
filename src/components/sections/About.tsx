import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section id='about' className='container'>
      <div className='title-section reveal'>
        <h2>
          <span className='code-number'>01.</span>{" "}
          <a href='#about' className='nav'>
            About me
          </a>
        </h2>
        <span className='line-title'></span>
      </div>
      <div className='about-content'>
        <div className='about-content__text reveal'>
          <p>
            I am a Fullstack Developer residing in Lima, Peru with 3 years of
            experience in the software industry, I also passionate about the
            world of videogames for which to develop videogames 🕹️ it is what I
            do, especially more of me well..., I am a passionate about the urban
            genre (music, clothing 🐐), of the extreme sports (downhill 🚲), and
            as some say, a rat from the gym 💪🏽.
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
        <div className='about-content__image reveal'>
          <div className='content-image'>
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
  );
};
