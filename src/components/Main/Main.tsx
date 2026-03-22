"use client";

import { motion } from "motion/react";
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
  SiPrisma,
  SiHtml5,
  SiCss3,
  SiSupabase,
  SiAngular,
  SiJira,
  SiBitbucket,
  SiSlack,
} from "react-icons/si";

import { useRef, useEffect, useState } from "react";
import style from "./main.module.css";
import Link from "next/link";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import HeroImage from "./HeroComponent";

const technologiesStack = [
  // Front-end
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiAngular, name: "Angular" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },

  // Back-end
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiPrisma, name: "Prisma" },

  // DBs
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMysql, name: "MySQL" },
];

const toolsStack = [
  // Version control
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiBitbucket, name: "Bitbucket" },

  // Hosting / BaaS / DBaaS
  { icon: SiVercel, name: "Vercel" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiPlanetscale, name: "PlanetScale" },

  // Team collaboration
  { icon: SiJira, name: "Jira" },
  { icon: SiSlack, name: "Slack" },
];

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

  const techTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      const x = e.clientX;
      const y = e.clientY;

      const keyframes = {
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
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
      { threshold: 0.1 },
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
      { threshold: 0.1 },
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
        className={`${style.trailer} pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 rounded-full border-2 border-white bg-white opacity-0 mix-blend-difference contrast-100 transition-all duration-700 ease-out after:opacity-1 after:transition-all after:duration-700 after:ease-out`}
      ></div>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`${style.bgImage} fixed top-0 left-0 -z-30 h-full w-full bg-linear-to-br from-[#0c1735] to-black bg-size-[120%_120%] bg-position-[center_40%] opacity-100 transition-all duration-700 ease-out`}
      ></motion.div>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        ref={bgPatternRef}
        className={`${style.bgPattern} bg-dots fixed top-0 left-0 -z-20 h-full w-full bg-size-[6vmin_6vmin] bg-position-[0%_0%] opacity-60 transition-all duration-700 ease-out md:bg-size-[4vmin_4vmin]`}
      ></motion.div>
      <div>
        <header className="sticky top-0 z-10 flex w-full justify-end p-2 mix-blend-difference md:hidden">
          <AiOutlineMenu
            className="h-10 w-10 cursor-pointer p-1 text-2xl"
            onClick={() => {
              setShowMenu(true);
              document.querySelector("body")!.style.overflowY = "hidden";
            }}
          />
        </header>
        <div className="m-auto max-w-7xl justify-between gap-8 md:flex md:gap-6 md:px-6 lg:gap-12 lg:px-12 xl:px-16 2xl:px-24">
          <nav
            className={`${
              showMenu ? "left-0" : "left-[-110vw]"
            } fixed top-0 z-10 flex h-dvh w-full flex-4 flex-col justify-start bg-black p-4 transition-all duration-200 ease-out md:sticky md:justify-around md:bg-black/0`}
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
                  className={`${style.menu} group flex flex-col items-start gap-4`}
                >
                  <button
                    onClick={() => handleNavClick(0)}
                    id="aboutMeButton"
                    className={`${style.menuElement} ${
                      activeTab == 0 ? "after:w-full" : ""
                    } animation-delay-[500] relative cursor-pointer p-2 text-xl font-medium transition-all duration-300 ease-out group-hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-4 hover:translate-y-0 hover:opacity-100! hover:after:w-full`}
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => handleNavClick(1)}
                    id={"projectsButton"}
                    className={`${style.menuElement} ${
                      activeTab == 1 ? "after:w-full" : ""
                    } animation-delay-[600] relative cursor-pointer p-2 text-xl font-medium transition-all duration-300 ease-out group-hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-4 hover:translate-y-0 hover:opacity-100! hover:after:w-full`}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => handleNavClick(2)}
                    id={"contactButton"}
                    className={`${style.menuElement} ${
                      activeTab == 2 ? "after:w-full" : ""
                    } animation-delay-[700] relative cursor-pointer p-2 text-xl font-medium transition-all duration-300 ease-out group-hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-4 hover:translate-y-0 hover:opacity-100! hover:after:w-full`}
                  >
                    Contact
                  </button>
                </div>
              </div>
              <div>
                <h3 className="mb-2">I&apos;ve worked with:</h3>
                <div className="mb-[1.6rem] flex flex-wrap gap-[0.8rem]">
                  {technologiesStack.map((tech, i) => (
                    <div
                      key={i}
                      className={`${style.techIcon} rounded-md border border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110`}
                      onMouseEnter={() => {
                        if (techTimeoutRef.current)
                          clearTimeout(techTimeoutRef.current);

                        if (trailerRef.current) {
                          trailerRef.current.setAttribute(
                            "data-tech",
                            tech.name,
                          );
                        }
                      }}
                      onMouseLeave={() => {
                        techTimeoutRef.current = setTimeout(() => {
                          if (trailerRef.current) {
                            trailerRef.current.removeAttribute("data-tech");
                          }
                        }, 300);
                      }}
                    >
                      <tech.icon />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-[0.8rem]">
                  {toolsStack.map((tech, i) => (
                    <div
                      key={i}
                      className={`${style.techIcon} rounded-md border border-neutral-500 p-2 text-xl transition-all ease-out hover:scale-110`}
                      onMouseEnter={() => {
                        if (techTimeoutRef.current)
                          clearTimeout(techTimeoutRef.current);

                        if (trailerRef.current) {
                          trailerRef.current.setAttribute(
                            "data-tech",
                            tech.name,
                          );
                        }
                      }}
                      onMouseLeave={() => {
                        techTimeoutRef.current = setTimeout(() => {
                          if (trailerRef.current) {
                            trailerRef.current.removeAttribute("data-tech");
                          }
                        }, 300);
                      }}
                    >
                      <tech.icon />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-2">Find me on:</h3>
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
            </div>
          </nav>
          <main className="flex-6 p-4 md:py-12 2xl:py-20">
            <section
              className={`group -mb-6 ${style.heroImage}`}
              ref={meImageRef}
            >
              <HeroImage />
              <div className="relative -top-6 ml-2 inline-block text-5xl font-bold tracking-tighter transition-all duration-200 ease-out group-hover:ml-8 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] group-hover:after:w-full md:-top-8 lg:text-6xl">
                Hi, Im Daniel
              </div>
            </section>
            <section ref={aboutMeRef} className="pt-8">
              <h3 className="mb-4 text-sm text-neutral-300">About me</h3>
              <h1 className="mb-4 text-2xl font-bold tracking-tighter lg:text-3xl">
                I&apos;m Daniel, a web developer based in Krakow, Poland.
              </h1>
              <p className="mb-2 text-justify text-base/7 tracking-normal">
                As a passionate web developer, I specialize in creating
                exceptional web applications by combining my skills in front-end
                and back-end development.
              </p>
              <p className="text-justify text-base/7 tracking-normal">
                In my free time, I enjoy taking on{" "}
                <span
                  onClick={() => handleNavClick(1)}
                  className={`${style.descriptionLink} text-xs-2 cursor-pointer rounded-full border border-white px-2 py-1 whitespace-nowrap`}
                >
                  personal
                </span>{" "}
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
            <footer className="mt-8 text-center text-sm">
              Made with ❤️ by Daniel Skowron
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Main;
