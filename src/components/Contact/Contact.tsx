import Link from "next/link";

import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <h3 className="mb-4 text-sm text-neutral-300">Contact</h3>
      <h1 className="mb-4 text-2xl font-bold tracking-tighter lg:text-3xl">
        Let&apos;s create something amazing
      </h1>
      <div className="mb-4">
        <div className="mb-2 text-lg font-semibold">MAIL</div>
        <div className="text-lg">
          <Link
            href="mailto: danielskowron02@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <AiFillMail />
            danielskowron02@gmail.com
          </Link>
        </div>
      </div>
      <div>
        <div className="mb-2 text-lg font-semibold">ON THE WEB</div>
        <div className="flex flex-col gap-2 text-lg">
          <Link
            className="flex items-center gap-2 hover:underline"
            target="_blank"
            href="https://github.com/daniolsk"
          >
            <AiFillGithub /> GitHub
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline"
            target="_blank"
            href="https://www.linkedin.com/in/daniel-sk/"
          >
            <AiFillLinkedin />
            LinkedIn
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline"
            target="_blank"
            href="https://www.instagram.com/danielskowron_/"
          >
            <AiFillInstagram />
            Instagram
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
