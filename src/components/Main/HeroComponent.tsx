"use client";

import React, { useState } from "react";

import Image from "next/image";
import ImageOfMe from "@/../public/me.jpg";
import { Loader2 } from "lucide-react";

export default function HeroComponent() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className={`relative aspect-square max-h-[450px] w-full overflow-hidden rounded-xl`}
    >
      {isLoading ? (
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full animate-pulse items-center justify-center rounded-xl bg-gray-300/20">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : null}
      <Image
        alt="Daniel"
        src={ImageOfMe}
        fill
        quality={100}
        className="object-cover transition-all duration-200 ease-out group-hover:scale-105"
        priority
        onLoad={() => setIsLoading(false)}
        placeholder="blur"
      ></Image>
    </div>
  );
}
