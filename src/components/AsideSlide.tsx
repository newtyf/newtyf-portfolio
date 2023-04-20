import { option } from "@/types";
import Link from "next/link";

export const AsideSlide = ({
  menu,
  hideSlide,
}: {
  menu: option[];
  hideSlide: () => void;
}) => {
  return (
    <aside>
      <div
        className='background-close'
        onClick={hideSlide}
      ></div>
      <nav>
        <h2 className='animate__animated'>
          <Link onClick={hideSlide} href={"#home"} scroll={false}>
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
                className={!!item.styleCustom ? "btn" : "nav"}
                href={item.link}
                onClick={hideSlide}
                scroll={false}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};
