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
      <motion.div
        initial={{ backgroundSize: "3vmin 3vmin" }}
        animate={{ backgroundSize: "4vmin 4vmin" }}
        className={`${style.bgPattern}`}
      ></motion.div>
      <div className="flex flex-col items-start">
        <div className="mb-8 mt-8 md:mb-10 md:mt-0 xl:mb-16" ref={mainTitleRef}>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="whitespace-nowrap text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl 2xl:text-6xl"
          >
            Daniel Skowron
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
            className="font-normal sm:text-lg md:text-xl 2xl:text-2xl"
          >
            Web developer and designer.
          </motion.div>
        </div>
        <div
          ref={menuRef}
          className={`${style.menu} flex flex-col items-start gap-4 md:gap-6 xl:gap-8`}
        >
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.5, ease: "easeOut" },
            }}
            onClick={() => {
              setActiveTab(0);
            }}
            className={`${style.menuElement} ${
              activeTab == 0 ? "!translate-x-[30px]" : ""
            } cursor-pointer p-2 text-lg font-medium md:text-3xl xl:text-4xl`}
          >
            About Me
          </motion.button>
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.6, ease: "easeOut" },
            }}
            active={activeTab == 1 ? true : false}
            onClick={() => {
              setActiveTab(1);
            }}
            className={`${style.menuElement} ${
              activeTab == 1 ? "!translate-x-[30px]" : ""
            } cursor-pointer p-2 text-lg font-medium md:text-3xl xl:text-4xl`}
          >
            Projects
          </motion.button>
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.7, ease: "easeOut" },
            }}
            onClick={() => {
              setActiveTab(2);
            }}
            active={activeTab == 2 ? true : false}
            className={`${style.menuElement} ${
              activeTab == 2 ? "!translate-x-[30px]" : ""
            } cursor-pointer p-2 text-lg font-medium md:text-3xl xl:text-4xl`}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Main;
