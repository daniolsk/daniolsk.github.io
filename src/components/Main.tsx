//@ts-nocheck
"use client";

import { useRef, useEffect, MouseEvent, useState } from "react";
import style from "./main.module.css";

import Image from "next/image";
import { motion } from "framer-motion";

const Main = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const menu = menuRef.current;
    const section = sectionRef.current;

    Array.from(menu.children).forEach((item, index) => {
      item.onmouseover = () => {
        section.dataset.activeIndex = index;
      };
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${style.section} relative flex min-h-screen w-full items-start justify-start overflow-hidden pl-[10vw] md:items-center`}
    >
      <div
        className={`${style.bgPattern} bg-dots absolute left-0 top-0 -z-20 h-[100vh] w-full bg-[length:4vmin_4vmin] bg-[0%_-35%] opacity-70 transition-all duration-700 ease-out`}
      ></div>
      <div className="flex flex-col items-start">
        <div className="mb-8 mt-8 md:mb-10 md:mt-0 xl:mb-16" ref={mainTitleRef}>
          <div className="whitespace-nowrap text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl 2xl:text-6xl">
            Daniel Skowron
          </div>
          <div className="font-normal sm:text-lg md:text-xl 2xl:text-2xl">
            Web developer and designer.
          </div>
        </div>
        <div
          ref={menuRef}
          className={`${style.menu} group flex flex-col items-start gap-4 md:gap-6 xl:gap-8`}
        >
          <button
            onClick={() => {
              setActiveTab(0);
            }}
            className={`${style.menuElement} relative cursor-pointer p-2 text-lg font-medium transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-8 hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-30 md:text-3xl xl:text-4xl`}
          >
            About Me
          </button>
          <button
            onClick={() => {
              setActiveTab(1);
            }}
            className={`${style.menuElement} relative cursor-pointer p-2 text-lg font-medium transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-8 hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-30 md:text-3xl xl:text-4xl`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setActiveTab(2);
            }}
            className={`${style.menuElement} relative cursor-pointer p-2 text-lg font-medium transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-8 hover:!opacity-100 hover:after:w-[100%] group-hover:opacity-30 md:text-3xl xl:text-4xl`}
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
