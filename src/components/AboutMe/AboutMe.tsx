import Image from "next/image";
import React from "react";

const AboutMe = ({
  handleChangeTab,
}: {
  handleChangeTab: (id: number) => void;
}) => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center gap-12 overflow-auto px-5 py-2 pb-4 md:py-8 lg:mt-0 lg:max-h-screen lg:px-[8vw] lg:py-12">
      <div className="animate-fadein relative m-auto flex-col border-2 border-white bg-slate-900 p-4 text-white shadow-3xl sm:flex md:mx-20 md:p-8 lg:mx-0 lg:p-10">
        <div className="animate-sliderightdown absolute -left-3 -top-3 -z-10 hidden h-full w-full border-2 border-white animation-delay-[700] md:block"></div>
        <div className="animate-fadein text-3xl font-bold leading-[1.2] tracking-tighter animation-delay-[200] lg:text-5xl">
          I&apos;m Daniel, <br /> a web developer and designer <br /> based in
          Kraków, Poland.
        </div>
        <div className="animate-fadein my-4 h-[1px] w-full bg-white animation-delay-[250] lg:my-6"></div>
        <div className="animate-fadein mb-4 font-medium leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          As a passionate web developer, I specialize in creating exceptional
          websites by combining my skills in front-end and back-end development.
          Throughout my journey, I have dedicated myself to mastering various
          coding languages and staying updated with the latest technologies and
          trends in web development. Alongside HTML and CSS, I have gained
          proficiency in React and Next.js, which I frequently utilize in my
          projects. My commitment lies in delivering top-notch, user-friendly
          websites for my clients, handling everything from design and
          development to maintenance, enhancements, and adaptability to evolving
          market needs.
        </div>
        <div className="animate-fadein font-medium leading-relaxed animation-delay-[350] lg:text-lg xl:text-xl">
          In my free time, I enjoy taking on{" "}
          <button
            onClick={() => handleChangeTab(1)}
            className="bigButton inline-block h-[40px] w-[108px] rounded-3xl border-2 border-white px-2 py-1"
          >
            personal
          </button>{" "}
          projects that allow me to explore my creativity and tackle complex
          coding challenges, refining my problem-solving abilities and attention
          to detail.
        </div>
        <div className="animate-fadein my-4 h-[1px] w-full bg-white animation-delay-[400] lg:my-6"></div>
        <div className="animate-fadein flex justify-start animation-delay-[450]">
          <button
            onClick={() => handleChangeTab(2)}
            className="smallButton text-lg font-semibold underline"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
