//@ts-nocheck
"use client";

import { useRef, useEffect, MouseEvent } from "react";
import style from "./main.module.css";

import Image from "next/image";
import { motion } from "framer-motion";

const Main = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);

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
      className={`${style.section} relative flex min-h-screen w-full items-center justify-start overflow-hidden pl-32`}
    >
      <div className={`${style.bgPattern}`}></div>
      <div className="flex flex-col items-start">
        <div className="mb-16" ref={mainTitleRef}>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="whitespace-nowrap text-6xl font-bold tracking-tighter"
          >
            Daniel Skowron
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
            className="text-xl font-normal"
          >
            Web developer and designer.
          </motion.div>
        </div>
        <div
          ref={menuRef}
          className={`${style.menu} flex flex-col items-start gap-8`}
        >
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.5, ease: "easeOut" },
            }}
            className={`${style.menuElement} cursor-pointer p-2 text-4xl font-medium`}
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
            className={`${style.menuElement} cursor-pointer p-2 text-4xl font-medium`}
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
            className={`${style.menuElement} cursor-pointer p-2 text-4xl font-medium`}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Main;
