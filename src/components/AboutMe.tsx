import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-4 flex h-full w-full flex-1 flex-col items-center justify-start overflow-auto md:justify-center md:px-[5vw] xl:gap-6 xl:px-[10vw]">
      <div className="flex flex-col gap-2 p-6 sm:px-14">
        <div className="animate-fadein text-xl font-bold animation-delay-[100] xl:text-3xl">
          Who am I?
        </div>
        <div className="animate-fadein text-base font-semibold animation-delay-[200] xl:text-lg">
          I&apos;m more than just a developer - I love creating artistic,
          aesthetically pleasing, modern and cutting-edge designs.
        </div>
        <div className="animate-fadein text-sm animation-delay-[300] xl:text-base">
          I design user interfaces, create graphics, illustrations and put it
          all into practice, creating functional web applications made for
          humans.
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6 sm:px-14">
        <div className="animate-fadein text-xl font-bold animation-delay-[400] xl:text-3xl">
          What do I do?
        </div>
        <div className="animate-fadein text-base font-semibold animation-delay-[500] xl:text-lg">
          I create digital symphonies for the eyes - aesthetic compositions with
          functional notes.
        </div>
        <div className="animate-fadein text-sm animation-delay-[600] xl:text-base">
          I handle the entire software development process - from graphic
          design, programming and implementation, to maintaining the finished,
          published product.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
