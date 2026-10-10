"use client";

import { useEffect, useRef } from "react";
import style from "./main.module.css";

const Trailer = () => {
  const trailerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trailer = trailerRef.current;

    // The trailer is only shown on devices with a real pointer
    if (!trailer || !window.matchMedia("(hover: hover)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;

      if (frame) return;

      frame = requestAnimationFrame(() => {
        frame = 0;

        trailer.animate(
          {
            transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
          },
          {
            duration: 400,
            fill: "forwards",
          },
        );
      });
    };

    let techTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleMouseOver = (e: MouseEvent) => {
      const tech = (e.target as Element).closest<HTMLElement>(
        "[data-tech-name]",
      );
      if (!tech) return;

      clearTimeout(techTimeout);
      trailer.dataset.tech = tech.dataset.techName;
    };

    const handleMouseOut = (e: MouseEvent) => {
      const tech = (e.target as Element).closest<HTMLElement>(
        "[data-tech-name]",
      );
      if (!tech || tech.contains(e.relatedTarget as Node | null)) return;

      techTimeout = setTimeout(() => {
        delete trailer.dataset.tech;
      }, 300);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(frame);
      clearTimeout(techTimeout);
    };
  }, []);

  return (
    <div
      ref={trailerRef}
      className={`${style.trailer} pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 rounded-full border-2 border-white bg-white opacity-0 mix-blend-difference contrast-100 transition-[width,height,opacity] duration-700 ease-out after:opacity-1 after:transition-all after:duration-700 after:ease-out`}
    ></div>
  );
};

export default Trailer;
