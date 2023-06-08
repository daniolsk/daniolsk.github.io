import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-5 flex h-full w-full flex-1 flex-col items-center justify-start overflow-hidden lg:mt-0 lg:justify-center lg:gap-12 lg:px-[10vw]">
      <div className="animate-fadein relative mx-10 my-5 flex flex-col gap-2 border-2 border-white bg-gradient-to-b from-gray-900 to-violet-900 p-8 text-white shadow-2xl sm:px-14 lg:mx-0 lg:p-6 xl:p-12">
        <div className="animate-sliderightdown absolute -left-3 -top-3 -z-10 h-full w-full border-2 border-white animation-delay-[300]"></div>
        <div className="animate-fadein mb-8 text-3xl font-bold uppercase animation-delay-[100] lg:text-4xl">
          Let&apos;s create something amazing
        </div>
        <div className="animate-fadein mb-4 text-base font-semibold animation-delay-[200] lg:text-lg">
          <div className="mb-2 font-bold">CONTACT</div>
          <div>
            <span className="underline">danielskowron02@gmail.com</span>
          </div>
        </div>
        <div className="animate-fadein text-sm animation-delay-[300] lg:text-base">
          <div className="mb-2 font-bold">ON THE WEB</div>
          <div className="flex flex-col gap-2">
            <Link className="underline" href="#">
              Instagram
            </Link>
            <Link className="underline" href="#">
              GitHub
            </Link>
            <Link className="underline" href="#">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
