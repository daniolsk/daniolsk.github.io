import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center gap-12 overflow-auto px-5 py-2 pb-4 md:py-8 lg:mt-0 lg:max-h-screen lg:px-[8vw] lg:py-12">
      <div className="animate-fadein relative m-auto flex-col border-2 border-white bg-slate-900 p-4 text-white shadow-3xl sm:flex md:mx-20 md:p-8 lg:mx-0 lg:p-10">
        <div className="animate-sliderightdown absolute -left-3 -top-3 -z-10 hidden h-full w-full border-2 border-white animation-delay-[700] md:block"></div>
        <div className="animate-fadein text-3xl font-bold leading-[1.2] tracking-tighter animation-delay-[100] lg:text-5xl">
          Let&apos;s create something amazing
        </div>
        <div className="animate-fadein my-4 h-[1px] w-full bg-white animation-delay-[250] lg:my-6"></div>
        <div className="animate-fadein mb-4 font-medium leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          <div className="mb-2 font-bold">CONTACT</div>
          <div>
            <span className="underline">danielskowron02@gmail.com</span>
          </div>
        </div>
        <div className="animate-fadein font-medium leading-relaxed animation-delay-[350] lg:text-lg xl:text-xl">
          <div className="mb-2 font-bold">ON THE WEB</div>
          <div className="flex flex-col gap-3">
            <Link
              className="underline"
              target="_blank"
              href="https://github.com/daniolsk"
            >
              GitHub
            </Link>
            <Link
              className="underline"
              target="_blank"
              href="https://www.linkedin.com/in/daniel-sk/"
            >
              LinkedIn
            </Link>
            <Link
              className="underline"
              target="_blank"
              href="https://www.instagram.com/danielskowron_/"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
