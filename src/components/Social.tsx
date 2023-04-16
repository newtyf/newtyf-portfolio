import React from "react";

type coordCss = {
  left: string;
  right: string;
};

const social = [
  { title: "github", link: "https://github.com/newtyf" },
  { title: "linkedin", link: "https://www.linkedin.com/in/axel-mu%C3%B1oz/" },
];

export const Social = (position: coordCss) => {
  const styles = {
    left: position.left,
    right: position.right,
  };

  return (
    <div className='social' style={styles}>
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
  );
};
