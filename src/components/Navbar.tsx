import Link from "next/link";
import React, { useEffect, useState } from "react";

import { option } from "@/types";
import { NavBarEffect } from "@/hooks/navBarEffect";

export const Navbar = ({ menu }: { menu: option[] }) => {
  NavBarEffect();

  return (
    <header>
      <nav id='navbar'>
        <Link
          className='animate__animated animate__fadeInDown'
          href={"#home"}
          scroll={false}
        >
          <h2>Newtyf</h2>
        </Link>
        <ol>
          {menu.map((item, index) => (
            <li
              className={`animate__animated`}
              style={{ animationDelay: `${(index + 1) / 3}s` }}
              key={item.title}
            >
              <Link
                className={!!item.styleCustom ? "btn-resume" : "line"}
                href={item.link}
                scroll={false}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
        <div className='menu animate__animated animate__fadeInDown'>
          <button title='menu'>
            <div
              id='nav-icon1'
              onClick={(e) => {
                e.currentTarget.classList.toggle("open");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <i className='bi bi-list'></i> */}
          </button>
        </div>
      </nav>
    </header>
  );
};
