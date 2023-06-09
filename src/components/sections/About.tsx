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
            Hi my name is&nbsp;
            <a
              href='https://www.linkedin.com/in/axel-mu%C3%B1oz/'
              className='line'
              target='_blank'
            >
              <b>Axel Muñoz</b>
            </a>
            , i am a Fullstack Developer residing in Peru, with 3 years of
            experience in the software industry. Being the <b>web</b> my main
            development focus.
          </p>
          <p>
            I remember when i created my first hello world, it was when i
            created my first robotics project, my project was about getting the
            height of a person with&nbsp;
            <a href='https://www.arduino.cc/' className='line'>
              <b>arduino</b>
            </a>
            &nbsp; and ultrasonic sensors, I love integrating software with
            hardware to solve people&apos;s problems.
          </p>
          <p>
            I also passionate about the world of videogames for which to develop
            videogames 🕹️ it is what i do, i make videogames on the web with
            native or phaser web technologies, and I also use&nbsp;
            <a href='https://unity.com/' className='line' target='_blank'>
              <b>Unity</b>
            </a>
            &nbsp; in some projects.
          </p>
          <p>
            More about me?, well..., I am passionate about the urban genre (
            music , clothes 🐐), I love cars and my goal is to buy or repair
            one, and as some say, a gym rat.
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
              src={"/profile.webp"}
              alt='profile-photo'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
