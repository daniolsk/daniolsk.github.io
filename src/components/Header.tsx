//@ts-nocheck
"use client";

import { useRef, useEffect, MouseEvent } from "react";
import style from "./header.module.css";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageBgRef = useRef<HTMLDivElement>(null);

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
    <MotionConfig transition={{ ease: "easeOut" }}>
      <section
        ref={sectionRef}
        className={`${style.section} relative flex min-h-screen w-full items-center justify-around overflow-hidden`}
      >
        <div className={`${style.bgPattern}`}></div>
        <div className="flex flex-col items-start">
          <div className="mb-16" ref={mainTitleRef}>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="whitespace-nowrap text-6xl font-bold tracking-tighter"
            >
              Daniel Skowron
            </motion.div>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
              className="text-xl font-normal"
            >
              Web developer and designer.
            </motion.div>
          </div>
          <div
            ref={menuRef}
            className={`${style.menu} flex flex-col items-start gap-8`}
          >
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
              className={`${style.menuElement} cursor-pointer p-2 text-4xl font-medium`}
            >
              About Me
            </motion.div>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}
              className={`${style.menuElement} cursor-pointer p-2 text-4xl font-medium`}
            >
              Projects
            </motion.div>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.6 } }}
              className={`${style.menuElement} cursor-pointer p-2 text-4xl font-medium`}
            >
              Contact
            </motion.div>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ x: 30, y: 30, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, transition: { delay: 1 } }}
            ref={imageBgRef}
            className="absolute left-3 top-3 -z-[1] h-full w-full bg-white"
          ></motion.div>
          <motion.div
            initial={{ x: -12, y: -12, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, transition: { delay: 0.5 } }}
            ref={imageRef}
            className={`${style.image} aspect-square w-[40vw] bg-[url(/me.jpg)] bg-center bg-no-repeat xl:w-[30vw]`}
          ></motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default Header;
