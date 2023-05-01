import React from "react";

export const Home = () => {
  return (
    <section id='home'>
      <h2 className='subtitle-home animate__animated animate__fadeInDown animate__slow'>
        I build things for the web.
      </h2>
      <div className='typewriter'>
        <h1 className='title-home'>YoungFlex</h1>
      </div>
      <p className='description animate__animated animate__fadeInDown'>
        I am a Fullstack Developer specialized in building (and occasionally in
        design) of amazing web experiences, such as Also passionate about video
        game development.
      </p>
      <a
        className='animate__animated animate__fadeInDown btn'
        href='mailto:axelskam.123@outlook.es'
      >
        Contact me!
      </a>
    </section>
  );
};
