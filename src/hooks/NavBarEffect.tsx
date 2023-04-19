import { useEffect } from "react";

export const NavBarEffect = (): void => {
  useEffect(() => {
    var prevScrollpos = window.scrollY;
    var navbar = document.querySelector<HTMLElement>("#navbar")!;

    const showAndHideNavbar = () => {
      var currentScrollPos = window.scrollY;

      if (window.scrollY > 0) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "0 2px 10px -8px #D9D9D9";
        navbar.style.borderEndEndRadius = "10px";
        navbar.style.backdropFilter = "blur(30px) brightness(30%)";
      } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
        navbar.style.backdropFilter = "none";
      }

      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0px";
      } else {
        navbar.style.top = "-120px";
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener("scroll", showAndHideNavbar);

    return () => {
      window.removeEventListener("scroll", showAndHideNavbar);
    };
  }, []);
};
