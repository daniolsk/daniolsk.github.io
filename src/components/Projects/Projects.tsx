import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Projects = ({
  handleChangeTab,
}: {
  handleChangeTab: (id: number) => void;
}) => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center overflow-auto px-5 py-2 pb-4 md:py-8 lg:mt-0 lg:max-h-screen lg:px-[8vw] lg:py-12">
      <div className="animate-fadein relative m-auto mb-12 flex-col border-2 border-white bg-slate-900 p-4 text-white sm:flex md:mx-20 md:p-8 lg:mx-0 lg:p-10">
        <div className="animate-sliderightdown absolute -left-3 -top-3 -z-10 hidden h-full w-full border-2 border-white animation-delay-[700] md:block"></div>
        <div className="animate-fadein text-3xl font-bold leading-[1.2] tracking-tighter animation-delay-[200] lg:text-5xl">
          #1 &quot;MUSCLER&quot;
        </div>
        <div className="mb-4 text-sm lg:text-2xl">GYM TRACKING APP</div>
        <div className="mb-4 flex space-x-4 overflow-x-scroll">
          <img src="21shots_so.webp" alt="" />
          <img src="Muscler (1).png" alt="" />
          <img src="33shots_so.webp" alt="" />
        </div>
        <div className="animate-fadein mb-4 font-semibold leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Next.js
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            React.js
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Tailwind CSS
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Framer Motion
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Prisma
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Planetscale MySQL DB
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Vercel
          </div>
        </div>
        <div className="animate-fadein mb-4 font-medium leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          An application that allows tracking fitness progress, recording and
          planning workout sessions (including sets, repetitions, and weights).
        </div>
        <div className="animate-fadein font-medium leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          WEBSITE:{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://muscler.vercel.app/"
          >
            https://muscler.vercel.app/
          </Link>
        </div>
        <div className="animate-fadein font-medium leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          CODE:{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://github.com/daniolsk/muscler-web-app"
          >
            https://github.com/daniolsk/muscler-web-app
          </Link>
        </div>
      </div>
      <div className="animate-fadein relative m-auto flex-col border-2 border-white bg-slate-900 p-4 text-white sm:flex md:mx-20 md:p-8 lg:mx-0 lg:p-10">
        <div className="animate-sliderightdown absolute -left-3 -top-3 -z-10 hidden h-full w-full border-2 border-white animation-delay-[700] md:block"></div>
        <div className="animate-fadein text-3xl font-bold leading-[1.2] tracking-tighter animation-delay-[200] lg:text-5xl">
          #2 &quot;GUESS THE SONG&quot;
        </div>
        <div className="mb-4 text-sm lg:text-2xl">SONG GUESSING WEB GAME</div>
        <div className="mb-4 flex space-x-4 overflow-x-scroll">
          <img src="767shots_so.png" alt="" />
          <img src="886shots_so.png" alt="" />
          <img src="310shots_so.png" alt="" />
          <img src="552shots_so.png" alt="" />
        </div>
        <div className="animate-fadein mb-4 font-semibold leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            TypeScript
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Next.js
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            React.js
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Tailwind CSS
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Genius Lyrics API
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Spotify API
          </div>
          <div className="m-1 inline-block rounded-lg bg-sky-900 px-2 py-1">
            Vercel
          </div>
        </div>
        <div className="animate-fadein mb-4 font-medium leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          A browser-based game that involves guessing the name of a song or
          album based on a partial lyric and the artist&apos;s name or a list of
          songs.
        </div>
        <div className="animate-fadein font-medium leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          WEBSITE:{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://guessthesong.vercel.app/"
          >
            https://guessthesong.vercel.app/
          </Link>
        </div>
        <div className="animate-fadein font-medium leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          CODE:{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://github.com/daniolsk/lyrics-guesser"
          >
            https://github.com/daniolsk/lyrics-guesser
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
