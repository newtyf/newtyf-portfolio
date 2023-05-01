import { useEffect } from "react";

export const ShowContentScroll = () => {
  const reveal = () => {
    let reveals = document.querySelectorAll<HTMLDivElement>(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeigth = window.innerHeight;
      let revelTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revelTop < windowHeigth - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, []);
};
