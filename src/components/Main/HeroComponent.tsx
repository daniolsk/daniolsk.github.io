import React from "react";
import Image from "next/image";
import ImageOfMe from "@/../public/me.jpg";

export default function HeroComponent() {
  return (
    <div className="relative aspect-square max-h-[450px] w-full overflow-hidden rounded-xl">
      <Image
        alt="Daniel"
        src={ImageOfMe}
        fill
        className="object-cover transition-all duration-200 ease-out group-hover:scale-105"
        placeholder="blur"
        loading="eager" 
      />
    </div>
  );
}