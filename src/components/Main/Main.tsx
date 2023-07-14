"use client";

import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { useRef, useEffect, useState } from "react";
import style from "./main.module.css";
import Link from "next/link";

const Main = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);
  const bgPatternRef = useRef<HTMLDivElement>(null);

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const menu = menuRef.current;
    const section = sectionRef.current;
    const trailer = trailerRef.current;

    if (!menu || !section) return;

    Array.from(menu.children).forEach((item, index) => {
      (item as HTMLElement).onmouseover = () => {
        section.dataset.activeIndex = index.toString();
      };
    });

    if (!trailer) return;

    window.onmousemove = (e) => {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };

      trailer.animate(keyframes, {
        duration: 400,
        fill: "forwards",
      });
    };
  }, []);

  const handleNavClick = (id: number) => {
    switch (id) {
      case 0:
        window.scrollTo(0, 0);
        setActiveTab(0);
        break;
      case 1:
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        setActiveTab(1);
        break;
      case 2:
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        setActiveTab(2);
        break;

      default:
        break;
    }
  };

  return (
    <div ref={sectionRef} className={`${style.section} w-screen`}>
      <div
        ref={trailerRef}
        className={`${style.trailer} pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border-2 border-white bg-white opacity-0 mix-blend-difference contrast-100 transition-all duration-700 ease-out`}
      ></div>
      <div
        className={`${style.bgImage} animate-slideleft-bg-img-mobile lg:animate-slideleft-bg-img fixed left-0 top-0 -z-30 h-full w-full bg-gradient-to-r from-[#0c1735] to-black bg-[length:120%_120%] bg-[center_40%] opacity-100 transition-all duration-700 ease-out`}
      ></div>
      <div
        ref={bgPatternRef}
        className={`${style.bgPattern} animate-slideleft-bg-mobile lg:animate-slideleft-bg bg-dots fixed left-0 top-0 -z-20 h-full w-full bg-[length:4vmin_4vmin] bg-[0%_0%] opacity-60 transition-all duration-700 ease-out`}
      ></div>
      <div>
        <header className="p-4 md:hidden">DS</header>
        <div className="m-auto max-w-screen-xl justify-between gap-12 md:flex md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <nav className="sticky top-0 hidden h-screen flex-[4] flex-col justify-around p-4 md:flex">
            <div>
              <h1 className="text-4xl font-bold tracking-wider">
                Daniel Skowron
              </h1>
              <h3 className="text-lg tracking-widest">
                Web developer and designer.
              </h3>
            </div>
            <div className="flex justify-start">
              <div
                ref={menuRef}
                className={`${style.menu} group flex flex-col items-start gap-4 pb-4`}
              >
                <button
                  onClick={() => {
                    handleNavClick(0);
                  }}
                  className={`${style.menuElement} ${
                    activeTab == 0 ? "after:w-[100%]" : ""
                  } animate-slideleft relative cursor-pointer p-2 text-xl font-medium transition-all duration-300 ease-out animation-delay-[500] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-4 hover:translate-y-0 hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-60`}
                >
                  About Me
                </button>
                <button
                  onClick={() => {
                    handleNavClick(1);
                  }}
                  className={`${style.menuElement} ${
                    activeTab == 1 ? "after:w-[100%]" : ""
                  } animate-slideleft relative cursor-pointer p-2 text-xl font-medium transition-all duration-300 ease-out animation-delay-[600] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-4 hover:translate-y-0 hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-60`}
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    handleNavClick(2);
                  }}
                  className={`${style.menuElement} ${
                    activeTab == 2 ? "after:w-[100%]" : ""
                  } animate-slideleft relative cursor-pointer p-2 text-xl font-medium transition-all duration-300 ease-out animation-delay-[700] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-4 hover:translate-y-0 hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-60`}
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="flex gap-4 text-3xl">
              <Link
                className="transition-all ease-out hover:scale-125"
                target="_blank"
                href="mailto: danielskowron02@gmail.com"
              >
                <AiFillMail />
              </Link>
              <Link
                className="transition-all ease-out hover:scale-125"
                target="_blank"
                href="https://github.com/daniolsk"
              >
                <AiFillGithub />
              </Link>
              <Link
                className="transitiona-ll ease-out hover:scale-125"
                target="_blank"
                href="https://www.linkedin.com/in/daniel-sk/"
              >
                <AiFillLinkedin />
              </Link>
              <Link
                className="transition-all ease-out hover:scale-125"
                target="_blank"
                href="https://www.instagram.com/danielskowron_/"
              >
                <AiFillInstagram />
              </Link>
            </div>
          </nav>
          <main className="flex-[6] p-4 md:py-12 2xl:py-20">
            <section ref={aboutMeRef}>
              <h3 className="mb-4 text-sm text-neutral-300">About me</h3>
              <h1 className="mb-4 text-2xl font-bold tracking-tighter">
                I&apos;m Daniel, a web developer and designer based in Kraków,
                Poland.
              </h1>
              <p className="mb-2 text-justify text-base tracking-wide">
                As a passionate web developer, I specialize in creating
                exceptional websites by combining my skills in front-end and
                back-end development. Throughout my journey, I have dedicated
                myself to mastering various coding languages and staying updated
                with the latest technologies and trends in web development.
                Alongside HTML and CSS, I have gained proficiency in React and
                Next.js, which I frequently utilize in my projects. My
                commitment lies in delivering top-notch, user-friendly websites
                for my clients, handling everything from design and development
                to maintenance, enhancements, and adaptability to evolving
                market needs.
              </p>
              <p className="text-justify text-base tracking-wide">
                In my free time, I enjoy taking on{" "}
                <button
                  onClick={() => {
                    handleNavClick(1);
                  }}
                  className={`${style.textBtn} text-xs-2 whitespace-nowrap rounded-full border border-white px-2 py-1`}
                >
                  personal
                </button>{" "}
                projects that allow me to explore my creativity and tackle
                complex coding challenges, refining my problem-solving abilities
                and attention to detail.
              </p>
            </section>
            <section className="mt-8 pt-8" ref={projectsRef}>
              <h3 className="mb-4 text-sm text-neutral-300">Projects</h3>
              <h1 className="mb-4 text-2xl font-bold tracking-tighter">
                My example personal projects. More on my{" "}
                <Link
                  className="text-blue-400 hover:underline"
                  href="https://github.com/daniolsk"
                  target="_blank"
                >
                  GitHub
                </Link>
                .
              </h1>
              <div className="flex flex-col gap-6">
                <Link
                  href="https://muscler.vercel.app/"
                  target="_blank"
                  className="group relative flex aspect-[4/3] min-h-[400px] flex-col justify-end overflow-hidden rounded-xl border-[1px] border-neutral-500 transition-all ease-out hover:border-neutral-400"
                >
                  <div className="h-full w-full bg-[url('/21shots_so.webp')] bg-cover bg-center brightness-[0.9] transition-all ease-out hover:bg-[length_110%] hover:brightness-100"></div>
                  <div className="bg-black p-4 transition-all ease-out group-hover:bg-[#0c0c0c]">
                    <h1 className="mb-2 text-xl font-bold tracking-tighter">
                      MUSCLER
                    </h1>
                    <h3 className="mb-2  text-neutral-300">
                      An application that allows tracking fitness progress,
                      recording and planning workout sessions (including sets,
                      repetitions and weights).
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        Next.js
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        React.js
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        Tailwind CSS
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        Framer Motion
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        Prisma
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        Planetscale MySQL DB
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        Vercel
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href="https://guessthesong.vercel.app/"
                  target="_blank"
                  className="group relative flex aspect-[4/3] min-h-[400px] flex-col justify-end overflow-hidden rounded-xl border-[1px] border-neutral-500 transition-all ease-out hover:border-neutral-400"
                >
                  <div className="h-full w-full bg-[url('/767shots_so.png')] bg-cover bg-center brightness-[0.9] transition-all ease-out"></div>
                  <div className="bg-black p-4 transition-all ease-out group-hover:bg-[#0c0c0c]">
                    <h1 className="mb-2 text-xl font-bold tracking-tighter">
                      GUESS THE SONG
                    </h1>
                    <h3 className="mb-2  text-neutral-300">
                      A browser-based game that involves guessing the name of a
                      song or album based on a partial lyric and the
                      artist&apos;s name or a list of songs.
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2  text-xs">
                        TypeScript
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2  text-xs">
                        Next.js
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        React.js
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        Tailwind CSS
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                        Genius Lyrics API
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2  text-xs">
                        Spotify API
                      </div>
                      <div className="flex items-center justify-center rounded-full bg-sky-900 px-2  text-xs">
                        Vercel
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
            <section className="mt-8 pt-8" ref={contactRef}>
              <h3 className="mb-4 text-sm text-neutral-300">Contact</h3>
              <h1 className="mb-4 text-2xl font-bold tracking-tighter">
                Let&apos;s create something amazing
              </h1>
              <div className="mb-4">
                <div className="mb-2 font-semibold">MAIL</div>
                <div>
                  <Link
                    href="mailto: danielskowron02@gmail.com"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <AiFillMail />
                    danielskowron02@gmail.com
                  </Link>
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold">ON THE WEB</div>
                <div className="flex flex-col gap-2">
                  <Link
                    className="flex items-center gap-2 hover:underline"
                    target="_blank"
                    href="https://github.com/daniolsk"
                  >
                    <AiFillGithub /> GitHub
                  </Link>
                  <Link
                    className="flex items-center gap-2 hover:underline"
                    target="_blank"
                    href="https://www.linkedin.com/in/daniel-sk/"
                  >
                    <AiFillLinkedin />
                    LinkedIn
                  </Link>
                  <Link
                    className="flex items-center gap-2 hover:underline"
                    target="_blank"
                    href="https://www.instagram.com/danielskowron_/"
                  >
                    <AiFillInstagram />
                    Instagram
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Main;
