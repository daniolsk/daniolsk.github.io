"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageOfMe from "@/assets/me.webp";

export default function HeroComponent() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="animate-fadein relative aspect-square max-h-[450px] w-full overflow-hidden rounded-xl bg-neutral-900">
      <Image
        alt="Daniel"
        src={ImageOfMe}
        fill
        priority
        className={`object-cover transition-[scale,filter] duration-200 ease-out group-hover:scale-105 ${
          isLoaded ? "blur-0" : "blur-xl"
        }`}
        placeholder="blur"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
