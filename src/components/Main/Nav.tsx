"use client";

import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import style from "./main.module.css";

const navItems = [
  { id: "aboutMeButton", label: "About Me", target: "about-me" },
  { id: "projectsButton", label: "Projects", target: "projects" },
  { id: "contactButton", label: "Contact", target: "contact" },
];

const Nav = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const aboutMe = document.getElementById("about-me");
    const contact = document.getElementById("contact");

    if (!aboutMe || !contact) return;

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

    observer0.observe(aboutMe);

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

    observer1.observe(contact);

    return () => {
      observer0.disconnect();
      observer1.disconnect();
    };
  }, []);

  const closeMenu = () => {
    setShowMenu(false);
    document.body.style.overflowY = "visible";
  };

  const handleNavClick = (id: number) => {
    document
      .getElementById(navItems[id].target)
      ?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id);
    closeMenu();
  };

  return (
    <>
      <header className="sticky top-0 z-10 flex w-full justify-end p-2 mix-blend-difference md:hidden">
        <AiOutlineMenu
          className="h-10 w-10 cursor-pointer p-1 text-2xl"
          onClick={() => {
            setShowMenu(true);
            document.body.style.overflowY = "hidden";
          }}
        />
      </header>
      <nav
        className={`${
          showMenu ? "translate-x-0" : "-translate-x-[110vw]"
        } fixed top-0 left-0 z-10 flex h-dvh w-full flex-4 flex-col justify-start bg-black p-4 transition-transform duration-200 ease-out md:sticky md:translate-x-0 md:justify-around md:bg-black/0`}
      >
        <header className="flex cursor-pointer justify-between text-2xl md:hidden">
          <div></div>
          <AiFillCloseCircle onClick={closeMenu} />
        </header>
        <div className="flex h-full flex-col justify-between p-3 md:justify-around md:p-0">
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              closeMenu();
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
              className={`${style.menu} group flex flex-col items-start gap-4`}
            >
              {navItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(i)}
                  onMouseOver={(e) => {
                    const section = e.currentTarget.closest<HTMLElement>(
                      `.${style.section}`,
                    );
                    if (section) section.dataset.activeIndex = i.toString();
                  }}
                  id={item.id}
                  className={`${
                    activeTab == i ? "after:w-full" : ""
                  } relative cursor-pointer p-2 text-xl font-medium transition-[opacity,translate] duration-300 ease-out group-hover:opacity-60 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[0%] after:bg-white after:transition-[width] after:duration-300 after:ease-out after:content-[''] hover:translate-x-4 hover:translate-y-0 hover:opacity-100! hover:after:w-full`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {children}
        </div>
      </nav>
    </>
  );
};

export default Nav;
