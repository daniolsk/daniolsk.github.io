"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ImageOfMe from "@/../public/me.jpg";

export default function HeroComponent() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="relative aspect-square max-h-[450px] w-full overflow-hidden rounded-xl bg-neutral-900"
    >
      <Image
        alt="Daniel"
        src={ImageOfMe}
        fill
        priority
        className={`object-cover transition-all duration-200 ease-out group-hover:scale-105 ${
          isLoaded ? "blur-0" : "blur-xl"
        }`}
        placeholder="blur"
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}
