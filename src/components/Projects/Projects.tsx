import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = ({
  handleChangeTab,
}: {
  handleChangeTab: (id: number) => void;
}) => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center overflow-auto px-5 py-2 pb-4 md:py-8 lg:mt-0 lg:max-h-screen lg:px-[8vw] lg:py-12">
      <div className="animate-fadein relative m-auto flex-col p-4 text-white sm:flex md:mx-20 md:p-8 lg:mx-0 lg:p-10">
        <div className="animate-fadein text-3xl font-bold leading-[1.2] tracking-tighter animation-delay-[200] lg:text-5xl">
          #1 &quot;MUSCLER&quot;
        </div>
        <div className="mb-4 text-2xl">GYM TRACKING APP</div>
        <div className="mb-8 mt-4 text-2xl">a</div>
        <div className="animate-fadein mb-4 font-semibold leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          Next.js / React.js / Tailwind CSS / Framer Motion / Prisma /
          Planetscale MySQL DB / Verce
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
      <div className="animate-fadein relative m-auto flex-col p-4 text-white sm:flex md:mx-20 md:p-8 lg:mx-0 lg:p-10">
        <div className="animate-fadein text-3xl font-bold leading-[1.2] tracking-tighter animation-delay-[200] lg:text-5xl">
          #2 &quot;GUESS THE SONG&quot;
        </div>
        <div className="mb-4 text-2xl">SONG GUESSING WEB GAME</div>
        <div className="mb-8 mt-4 text-2xl">GIMG</div>
        <div className="animate-fadein mb-4 font-semibold leading-relaxed animation-delay-[300] lg:text-lg xl:text-xl">
          TypeScript / Next.js / React.js / Tailwind CSS / Spotify API / Genius
          Lyrics API / Vercel
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
