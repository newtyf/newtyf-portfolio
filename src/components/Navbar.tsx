import Link from "next/link";
import { option } from "@/types";
import { NavBarEffect } from "../hooks/NavBarEffect";

export const Navbar = ({
  menu,
  showSlide,
}: {
  menu: option[];
  showSlide: () => void;
}) => {
  NavBarEffect();
  return (
    <nav id='navbar'>
      <h2 className='animate__animated'>
        <Link href={"#home"} scroll={false}>
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
              className={!!item.styleCustom ? "btn" : ""}
              href={item.link}
              scroll={false}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ol>

      <div className='menu-hamburger animate__animated animate__fadeInDown'>
        <button title='menu' onClick={showSlide}>
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
