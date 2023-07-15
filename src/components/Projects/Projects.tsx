import Link from "next/link";

const Projects = () => {
  return (
    <>
      <h3 className="mb-4 text-sm text-neutral-300">Projects</h3>
      <h1 className="mb-4 text-2xl font-bold tracking-tighter lg:text-3xl">
        My example personal projects. More on my{" "}
        <Link
          className="text-blue-400 hover:underline"
          href="https://github.com/daniolsk"
          target="_blank"
        >
          GitHub
        </Link>
        .
      </h1>
      <div className="flex flex-col gap-6">
        <Link
          href="https://muscler.vercel.app/"
          target="_blank"
          className="group relative flex flex-col justify-end overflow-hidden rounded-xl border-[1px] border-neutral-500 transition-all ease-out hover:border-neutral-400"
        >
          <div className="aspect-video w-full bg-[url('/21shots_so.webp')] bg-[length:102%] bg-top brightness-[0.9] transition-all ease-out group-hover:bg-[length:106%] group-hover:brightness-100"></div>
          <div className="bg-black p-4 transition-all ease-out group-hover:bg-[#0c0c0c]">
            <h1 className="mb-2 text-xl font-bold tracking-tighter">MUSCLER</h1>
            <h3 className="mb-2  text-neutral-300">
              An application that allows tracking fitness progress, recording
              and planning workout sessions (including sets, repetitions and
              weights).
            </h3>
            <div className="flex flex-wrap gap-1">
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                Next.js
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                React.js
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                Tailwind CSS
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                Framer Motion
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                Prisma
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                Planetscale MySQL DB
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                Vercel
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="https://guessthesong.vercel.app/"
          target="_blank"
          className="group relative flex flex-col justify-end overflow-hidden rounded-xl border-[1px] border-neutral-500 transition-all ease-out hover:border-neutral-400"
        >
          <div className="aspect-video w-full bg-[url('/767shots_so.png')] bg-[length:102%] bg-top brightness-[0.9] transition-all ease-out group-hover:bg-[length:106%] group-hover:brightness-100"></div>
          <div className="bg-black p-4 transition-all ease-out group-hover:bg-[#0c0c0c]">
            <h1 className="mb-2 text-xl font-bold tracking-tighter">
              GUESS THE SONG
            </h1>
            <h3 className="mb-2  text-neutral-300">
              A browser-based game that involves guessing the name of a song or
              album based on a partial lyric and the artist&apos;s name or a
              list of songs.
            </h3>
            <div className="flex flex-wrap gap-1">
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2  text-xs">
                TypeScript
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2  text-xs">
                Next.js
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                React.js
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                Tailwind CSS
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2 py-1 text-xs">
                Genius Lyrics API
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2  text-xs">
                Spotify API
              </div>
              <div className="flex items-center justify-center rounded-full bg-sky-900 px-2  text-xs">
                Vercel
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Projects;
