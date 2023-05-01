import React from "react";

export const Contact = () => {
  return (
    <section id='contact' className='container reveal'>
      <h2 className='title-chip reveal'>
        <span className='code-number'>04.</span> {"What's next?"}
      </h2>
      <div className='contact-content reveal'>
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
  );
};
