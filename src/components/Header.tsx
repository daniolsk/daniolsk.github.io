//@ts-nocheck
"use client";

import { useRef, useEffect, MouseEvent } from "react";
import style from "./header.module.css";

import Image from "next/image";

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className={`${style.section} relative flex min-h-screen w-full items-center justify-between overflow-hidden px-32`}
    >
      <div className={`${style.bgPattern}`}></div>
      <div className={`${style.bgImage}`}></div>
      <div className="flex flex-col items-start">
        <div className="mb-16">
          <div className="whitespace-nowrap text-6xl font-bold tracking-tighter">
            Daniel Skowron
          </div>
          <div className="text-xl font-normal">Web developer and designer.</div>
        </div>
        <div
          ref={menuRef}
          className={`${style.menu} flex flex-col items-start gap-8`}
        >
          <div
            className={`${style.menuElement} cursor-pointer p-2 text-5xl font-medium`}
          >
            About Me
          </div>
          <div
            className={`${style.menuElement} cursor-pointer p-2 text-5xl font-medium`}
          >
            Projects
          </div>
          <div
            className={`${style.menuElement} cursor-pointer p-2 text-5xl font-medium`}
          >
            Contact
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-3 top-3 -z-[1] h-full w-full bg-white"></div>
        <div
          className={`${style.image} aspect-square w-[40vw] bg-[url(/me.jpg)] bg-center bg-no-repeat`}
        ></div>
      </div>
    </section>
  );
};

export default Header;
