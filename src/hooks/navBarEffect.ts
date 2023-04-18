import { useEffect } from "react";

export const NavBarEffect = (): void => {
  useEffect(() => {
    var prevScrollpos = window.scrollY;
    var header = document.querySelector<HTMLElement>("#navbar")!;

    const showAndHideNavbar = () => {
      var currentScrollPos = window.scrollY;

      if (window.scrollY > 0) {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "0 2px 10px -8px #D9D9D9";
        header.style.borderEndEndRadius = "10px";
        header.style.backdropFilter = "blur(30px) brightness(30%)";
      } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        header.style.backdropFilter = "none";
      }

      if (prevScrollpos > currentScrollPos) {
        header.style.top = "0px";
      } else {
        header.style.top = "-120px";
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener("scroll", showAndHideNavbar);

    return () => {
      window.removeEventListener("scroll", showAndHideNavbar);
    };
  }, []);
};
