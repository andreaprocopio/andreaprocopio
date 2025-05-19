import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function HeroSection() {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Andrea!",
    },
  ];

  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <TypewriterEffectSmooth words={words} />{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-indigo-500 via-violet-500 to-indigo-600 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Senior Front-end developer.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 py-4">
            <span className="">Senior Front-end developer.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
