import Link from "next/link";
import React, { useEffect, useState } from "react";

import { option } from "@/types";

export const Navbar = ({ menu }: { menu: option[] }) => {
  useEffect(() => {
    var prevScrollpos = window.scrollY;
    var navBar = document.getElementById("navbar")!;
    var header = document.querySelector("header")!;

    const showAndHideNavbar = () => {
      var currentScrollPos = window.scrollY;

      if (window.scrollY > 0) {
        header.style.backgroundColor = "#000";
        header.style.boxShadow = "0 2px 10px -8px #D9D9D9";
        header.style.borderEndEndRadius = "10px";
      } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
      }

      if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
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

  return (
    <header>
      <nav id='navbar'>
        <Link className='animate__animated animate__fadeInDown' href={"#home"}>
          <h2>Newtyf</h2>
        </Link>
        <ol>
          {menu.map((item, index) => (
            <li
              className={`animate__animated`}
              style={{ animationDelay: `${(index + 1) / 2}s` }}
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
  );
};
