"use client";

import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineMenu,
  AiFillCloseCircle,
} from "react-icons/ai";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiPlanetscale,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFigma,
  SiAdobephotoshop,
  SiPrisma,
  SiHtml5,
  SiCss3,
  SiSupabase,
} from "react-icons/si";

import { useRef, useEffect, useState } from "react";
import style from "./main.module.css";
import Link from "next/link";

import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Main = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);
  const bgPatternRef = useRef<HTMLDivElement>(null);

  const meImageRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

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

    if (
      !meImageRef.current ||
      !aboutMeRef.current ||
      !projectsRef.current ||
      !contactRef.current
    )
      return;

    const observer0 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveTab(0);
        } else {
          setActiveTab(1);
        }
      },
      { threshold: 0.1 }
    );

    observer0.observe(aboutMeRef.current);

    const observer1 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveTab(2);
        } else {
          setActiveTab(1);
        }
      },
      { threshold: 0.1 }
    );

    observer1.observe(contactRef.current);
  }, []);

  const handleNavClick = (id: number) => {
    switch (id) {
      case 0:
        aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
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

    setShowMenu(false);
    document.querySelector("body")!.style.overflowY = "visible";
  };

  return (
    <div ref={sectionRef} className={`${style.section} w-screen`}>
      <div
        ref={trailerRef}
        className={`${style.trailer} pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border-2 border-white bg-white opacity-0 mix-blend-difference contrast-100 transition-all duration-700 ease-out`}
      ></div>
      <div
        className={`${style.bgImage} animate-slideleft-bg-img-mobile lg:animate-slideleft-bg-img fixed left-0 top-0 -z-30 h-full w-full bg-gradient-to-br from-[#0c1735] to-black bg-[length:120%_120%] bg-[center_40%] opacity-100 transition-all duration-700 ease-out`}
      ></div>
      <div
        ref={bgPatternRef}
        className={`${style.bgPattern} animate-slideleft-bg-mobile lg:animate-slideleft-bg bg-dots fixed left-0 top-0 -z-20 h-full w-full bg-[length:6vmin_6vmin] bg-[0%_0%] opacity-60 transition-all duration-700 ease-out md:bg-[length:4vmin_4vmin]`}
      ></div>
      <div>
        <header className="sticky top-0 z-10 flex justify-between border-b-[1px] border-neutral-500 bg-black/60 p-3 text-xl backdrop-blur-sm md:hidden">
          <Link href={"/"}>DS</Link>
          <AiOutlineMenu
            className="cursor-pointer text-2xl"
            onClick={() => {
              setShowMenu(true);
              document.querySelector("body")!.style.overflowY = "hidden";
            }}
          />
        </header>
        <div className="m-auto max-w-screen-xl justify-between gap-8 md:flex md:gap-6 md:px-6 lg:gap-12 lg:px-12 xl:px-16 2xl:px-24">
          <nav
            className={`${
              showMenu ? "left-0" : "left-[-110vw]"
            } fixed  top-0 z-10 flex h-[100dvh] w-full flex-[4] flex-col justify-start bg-black p-4 transition-all ease-out md:sticky md:justify-around md:bg-black/0`}
          >
            <header className="flex cursor-pointer justify-between text-2xl md:hidden">
              <div></div>
              <AiFillCloseCircle
                onClick={() => {
                  setShowMenu(false);
                  document.querySelector("body")!.style.overflowY = "visible";
                }}
              />
            </header>
            <div className="flex h-full flex-col justify-between p-3 md:justify-around md:p-0">
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setShowMenu(false);
                  document.querySelector("body")!.style.overflowY = "visible";
                }}
                className="cursor-pointer"
              >
                <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                  Daniel Skowron
                </h1>
                <h3 className="text-base tracking-[0.22em] md:text-lg">
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
              <div>
                <h3 className="mb-2">I&apos;ve worked with:</h3>
                <div className="flex flex-wrap gap-[0.8rem]">
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiHtml5 />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiCss3 />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiJavascript />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiTypescript />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiReact />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiNextdotjs />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiTailwindcss />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiNodedotjs />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiExpress />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiPostgresql />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiMongodb />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiMysql />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiGit />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiGithub />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiPrisma />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiSupabase />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiVercel />
                  </div>
                  <div className="rounded-md border-[1px] border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110">
                    <SiPlanetscale />
                  </div>
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
                  className="transition-all ease-out hover:scale-125"
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
            </div>
          </nav>
          <main className="flex-[6] p-4 md:py-12 2xl:py-20">
            <section className="group" ref={meImageRef}>
              <div
                className={`${style.hideTrailer} relative aspect-square w-full overflow-hidden rounded-xl bg-[url('/me.jpg')] bg-[length:100%] bg-[0_-100px] transition-all duration-200  ease-out group-hover:bg-[length:106%] xsm:bg-[0_-150px] md:bg-[0_-100px] lg:bg-[0_-150px]`}
              ></div>
              <div className="relative -top-6 ml-2 inline-block text-5xl font-bold tracking-tighter transition-all duration-200 ease-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] group-hover:ml-8 group-hover:after:w-full md:-top-8 lg:text-6xl">
                Hi, Im Daniel
              </div>
            </section>
            <section ref={aboutMeRef} className="pt-8">
              <h3 className="mb-4 text-sm text-neutral-300">About me</h3>
              <h1 className="mb-4 text-2xl font-bold tracking-tighter lg:text-3xl">
                I&apos;m Daniel, a web developer and designer based in Krakow,
                Poland.
              </h1>
              <p className="mb-2 text-justify text-base tracking-normal">
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
              <p className="text-justify text-base tracking-normal">
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
              <Projects />
            </section>
            <section className="mt-8 pt-8" ref={contactRef}>
              <Contact />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Main;
