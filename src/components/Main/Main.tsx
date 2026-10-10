import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
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

import style from "./main.module.css";
import Link from "next/link";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import HeroImage from "./HeroComponent";
import Nav from "./Nav";
import ScrollTo from "./ScrollTo";
import Trailer from "./Trailer";

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
  return (
    <div className={`${style.section} w-screen`}>
      <Trailer />
      <div
        className={`${style.bgImage} animate-slideleft-bg fixed top-0 left-0 -z-30 h-full w-full bg-linear-to-br from-[#0c1735] to-black opacity-100 transition-[transform,opacity] duration-700 ease-out`}
      ></div>
      <div
        className={`${style.bgPattern} bg-dots animate-slideleft-bg fixed top-0 left-0 -z-20 h-[150vh] w-full bg-size-[6vmin_6vmin] opacity-60 transition-[transform,opacity] duration-700 ease-out md:bg-size-[4vmin_4vmin]`}
      ></div>
      <div>
        <div className="m-auto max-w-7xl justify-between gap-8 md:flex md:gap-6 md:px-6 lg:gap-12 lg:px-12 xl:px-16 2xl:px-24">
          <Nav>
            <div>
              <h3 className="mb-2">I&apos;ve worked with:</h3>
              <div className="mb-[1.6rem] flex flex-wrap gap-[0.8rem]">
                {technologiesStack.map((tech, i) => (
                  <div
                    key={i}
                    data-tech-name={tech.name}
                    className={`${style.techIcon} rounded-md border border-neutral-500 p-2 text-xl transition-transform ease-out hover:scale-110`}
                  >
                    <tech.icon />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-[0.8rem]">
                {toolsStack.map((tech, i) => (
                  <div
                    key={i}
                    data-tech-name={tech.name}
                    className={`${style.techIcon} rounded-md border border-neutral-500 p-2 text-xl transition-transform ease-out hover:scale-110`}
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
                  className="transition-transform ease-out hover:scale-125"
                  target="_blank"
                  href="mailto: contact@danielskowron.com"
                >
                  <AiFillMail />
                </Link>
                <Link
                  className="transition-transform ease-out hover:scale-125"
                  target="_blank"
                  href="https://github.com/daniolsk"
                >
                  <AiFillGithub />
                </Link>
                <Link
                  className="transition-transform ease-out hover:scale-125"
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-sk/"
                >
                  <AiFillLinkedin />
                </Link>
                <Link
                  className="transition-transform ease-out hover:scale-125"
                  target="_blank"
                  href="https://www.instagram.com/danielskowron_/"
                >
                  <AiFillInstagram />
                </Link>
              </div>
            </div>
          </Nav>
          <main className="flex-6 p-4 md:py-12 2xl:py-20">
            <section className={`group -mb-6 ${style.heroImage}`}>
              <HeroImage />
              <div className="relative -top-6 ml-2 inline-block text-5xl font-bold tracking-tighter transition-transform duration-200 ease-out group-hover:translate-x-6 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[0%] after:bg-white after:transition-[width] after:duration-300 after:ease-out after:content-[''] group-hover:after:w-full md:-top-8 lg:text-6xl">
                Hi, Im Daniel
              </div>
            </section>
            <section id="about-me" className="pt-8">
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
                <ScrollTo
                  target="projects"
                  className={`${style.descriptionLink} text-xs-2 cursor-pointer rounded-full border border-white px-2 py-1 whitespace-nowrap`}
                >
                  personal
                </ScrollTo>{" "}
                projects that allow me to explore my creativity and tackle
                complex coding challenges, refining my problem-solving abilities
                and attention to detail.
              </p>
            </section>
            <section id="projects" className="mt-8 pt-8">
              <Projects />
            </section>
            <section id="contact" className="mt-8 pt-8">
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
