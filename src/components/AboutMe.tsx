import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-5 flex h-full w-full flex-1 flex-col items-center !justify-start gap-12 overflow-auto py-10 lg:mt-0 lg:max-h-screen lg:gap-16 lg:px-[10vw]">
      <div className="animate-fadein relative mx-10 flex flex-col gap-4 border-2 border-white bg-slate-900 p-4 text-white shadow-3xl md:mx-20 md:p-8 lg:mx-0 lg:p-12">
        <div className="animate-sliderightdown absolute -left-2 -top-2 -z-10 h-full w-full border-2 border-white animation-delay-[300]"></div>
        <div className="animate-fadein relative mb-6 h-[270px] w-[270px] self-center transition-all duration-150 ease-out animation-delay-[200] hover:rotate-3 hover:scale-105 2xl:h-[320px] 2xl:w-[320px]">
          <Image fill alt="" src="/code1.svg"></Image>
        </div>
        <div className="animate-fadein text-lg font-bold animation-delay-[100] lg:text-2xl">
          Who am I?
        </div>
        <div className="animate-fadein text-base font-semibold animation-delay-[200] lg:text-lg">
          I&apos;m more than just a developer - I love creating artistic,
          aesthetically pleasing, modern and cutting-edge designs.
        </div>
        <div className="animate-fadein text-sm animation-delay-[300] lg:text-base">
          I design user interfaces, create graphics, illustrations and put it
          all into practice, creating functional web applications made for
          humans.
        </div>
      </div>
      <div className="animate-fadein relative mx-10 flex flex-col gap-4 border-2 border-white bg-slate-900 p-4 text-white shadow-3xl md:mx-20 md:p-8 lg:mx-0 lg:p-12">
        <div className="animate-sliderightdown absolute -left-2 -top-2 -z-10 h-full w-full border-2 border-white animation-delay-[300]"></div>
        <div className="animate-fadein relative mb-6 h-[270px] w-[340px] self-center transition-all duration-150 ease-out animation-delay-[200] hover:-rotate-3 hover:scale-105 2xl:h-[320px] 2xl:w-[370px]">
          <Image fill alt="" src="/code2.svg"></Image>
        </div>
        <div className="animate-fadein text-lg font-bold animation-delay-[400] lg:text-2xl">
          What do I do?
        </div>
        <div className="animate-fadein text-base font-semibold animation-delay-[500] lg:text-lg">
          I create digital symphonies for the eyes - aesthetic compositions with
          functional notes.
        </div>
        <div className="animate-fadein text-sm animation-delay-[600] lg:text-base">
          I handle the entire software development process - from graphic
          design, programming and implementation, to maintaining the finished,
          published product.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
