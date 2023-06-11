"use client";

import { useRef, useEffect, useState } from "react";
import style from "./main.module.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);
  const bgPatternRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const menu = menuRef.current;
    const section = sectionRef.current;
    const trailer = trailerRef.current;
    const bgPattern = bgPatternRef.current;

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

  const handleScroll = (e: React.WheelEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section) return;

    if (e.deltaY > 0) {
      let nextIndex = activeTab;

      if (activeTab == 2) {
        nextIndex = 0;
      } else {
        nextIndex = nextIndex + 1;
      }
      section.dataset.activeIndex = nextIndex.toString();
      setActiveTab(nextIndex);
    } else {
      let nextIndex = activeTab;

      if (activeTab == 0) {
        nextIndex = 2;
      } else {
        nextIndex = nextIndex - 1;
      }
      section.dataset.activeIndex = nextIndex.toString();
      setActiveTab(nextIndex);
    }
  };

  const handleChangeTab = (id: number) => {
    setActiveTab(id);
  };

  const renderSwitch = (id: number) => {
    switch (id) {
      case 0:
        return <AboutMe handleChangeTab={handleChangeTab} />;
      case 1:
        return <Projects handleChangeTab={handleChangeTab} />;
      case 2:
        return <Contact />;
      default:
        return "";
    }
  };

  return (
    <section
      ref={sectionRef}
      // onWheel={(e) => handleScroll(e)}
      className={`${style.section} relative flex min-h-screen w-full flex-1 flex-col justify-center overflow-hidden lg:flex-row lg:items-center lg:justify-start lg:pl-[5vw]`}
    >
      <div
        ref={trailerRef}
        className={`${style.trailer} pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border-2 border-white bg-white opacity-0 mix-blend-difference contrast-100 transition-all duration-700 ease-out`}
      ></div>
      <div
        className={`${style.bgImage} animate-slideleft-bg-img-mobile lg:animate-slideleft-bg-img absolute left-0 top-0 -z-30 h-full w-full bg-gradient-to-r from-slate-900 to-sky-900 bg-[length:120%_120%] bg-[center_40%] opacity-100 transition-all duration-700 ease-out lg:bg-[length:120%_120%]`}
      ></div>
      <div
        ref={bgPatternRef}
        className={`${style.bgPattern} animate-slideleft-bg-mobile lg:animate-slideleft-bg bg-dots absolute left-0 top-0 -z-20 h-full w-full bg-[length:6vmin_6vmin] bg-[0%_0%] opacity-100 transition-all duration-700 ease-out lg:bg-[length:4vmin_4vmin]`}
      ></div>
      <div className="flex flex-col items-center lg:items-start">
        <div
          className="my-4 sm:my-8 lg:mb-10 lg:mt-0 xl:mb-16"
          ref={mainTitleRef}
        >
          <div className="animate-fadein whitespace-nowrap text-4xl font-bold tracking-tighter animation-delay-[200] sm:text-4xl lg:text-5xl 2xl:text-6xl">
            Daniel Skowron
          </div>
          <div className="animate-fadein text-center font-normal animation-delay-[300] sm:text-lg lg:text-left lg:text-xl 2xl:text-2xl">
            Web developer and designer.
          </div>
        </div>
        <div
          ref={menuRef}
          className={`${style.menu} group flex w-full flex-row items-center justify-around pb-4 lg:w-auto lg:flex-col lg:items-start lg:justify-center lg:gap-6 xl:gap-8`}
        >
          <button
            onClick={() => {
              setActiveTab(0);
            }}
            className={`${style.menuElement} ${
              activeTab == 0 ? "after:w-[100%]" : ""
            } animate-slideleft relative cursor-pointer p-2 text-base font-medium transition-all duration-300 ease-out animation-delay-[500] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-30 sm:text-lg lg:text-xl lg:hover:translate-x-4 lg:hover:translate-y-0 xl:text-3xl`}
          >
            About Me
          </button>
          <button
            onClick={() => {
              setActiveTab(1);
            }}
            className={`${style.menuElement} ${
              activeTab == 1 ? "after:w-[100%]" : ""
            } animate-slideleft relative cursor-pointer p-2 text-base font-medium transition-all duration-300 ease-out animation-delay-[600] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-30 sm:text-lg lg:text-xl lg:hover:translate-x-4 lg:hover:translate-y-0 xl:text-3xl`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setActiveTab(2);
            }}
            className={`${style.menuElement} ${
              activeTab == 2 ? "after:w-[100%]" : ""
            } animate-slideleft relative cursor-pointer p-2 text-base font-medium transition-all duration-300 ease-out animation-delay-[700] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-30 sm:text-lg lg:text-xl lg:hover:translate-x-4 lg:hover:translate-y-0 xl:text-3xl`}
          >
            Contact
          </button>
        </div>
      </div>
      {activeTab != null ? renderSwitch(activeTab) : ""}
    </section>
  );
};

export default Main;
