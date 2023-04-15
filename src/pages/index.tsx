import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className='animate__animated animate__fadeInDown'>
        <h2>Newtyf</h2>
        <nav>
          <ol>
            <li>
              <Link className='active' href={"/"}>
                About
              </Link>
            </li>
            <li>
              <Link href={"/"}>Work</Link>
            </li>
            <li>
              <Link href={"/"}>Projects</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <div className='home'>
          <h1 className='title-home animate__animated animate__fadeInDown'>
            YoungFlex
          </h1>
          <p className='animate__animated animate__fadeInDown'>
            {
              "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm searching new projects to participate and create amazing digital experience."
            }
          </p>
          <button className='animate__animated animate__fadeInDown'>
            Contact me!
          </button>
        </div>
      </main>
    </>
  );
}
