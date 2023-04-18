import Link from "next/link";
import React, { useEffect, useState } from "react";

import { option } from "@/types";
import { NavBarEffect } from "@/hooks/navBarEffect";

export const Navbar = ({ menu }: { menu: option[] }) => {
  NavBarEffect();

  return (
      <nav id='navbar'>
        <h2 className="animate__animated">
          <Link
            href={"#home"}
            scroll={false}
          >
            Newtyf
          </Link>
        </h2>

        <ol>
          {menu.map((item, index) => (
            <li
              className={`animate__animated animate__fadeInDown`}
              style={{ animationDelay: `${(index + 1) / 4}s` }}
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

        <div className='menu-hamburger animate__animated animate__fadeInDown'>
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
  );
};
