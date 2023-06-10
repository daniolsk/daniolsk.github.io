/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["muscler.vercel.app", "guessthesong.vercel.app"],
  },
};

module.exports = nextConfig;
