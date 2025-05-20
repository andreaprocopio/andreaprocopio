"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { containerSpacingClassnames, cn } from "@/lib/utils";

export function AboutMe() {
  return (
    <div
      className={cn("max-w-7xl mx-auto w-full", containerSpacingClassnames)}
      id="about-me"
    >
      <SectionTitle
        title="About me"
        subtitle="A quick glance into who I am and what drives me"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] bg-blue-800"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              3+ Years of work Experience
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              I specialize in building responsive, user-centric web applications
              using modern technologies like <b>Next.js</b>, <b>React</b>,{" "}
              <b>TypeScript</b>, and <b>Tailwind CSS</b>. Over the past three
              years, I’ve collaborated with startups and teams to create clean
              and scalable code. I’m always striving to stay on the cutting edge
              of front-end development.
            </p>
          </div>
          <Image
            src="/code-screenshot.png"
            width={500}
            height={500}
            alt="Code screenshot"
            className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-emerald-800">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Based in Milan 🇮🇹🍝 Open to Relocation.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            I currently live in <b>Milan, Italy</b> — home of great espresso,
            better pasta, and questionable Wi-Fi. While I enjoy life here, I’m
            also <b>open to relocation</b> opportunities across{" "}
            <b>Europe and beyond</b>. I believe great challenges know no
            borders, and I’m excited to see where my skills can take me next.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-cyan-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Fueled by Passion
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              My journey into coding began as a <b>self-taught</b> passion and
              quickly became a work career. Since I was a child, I’ve spent{" "}
              <b>countless hours</b> in front of a computer, exploring,
              experimenting, and learning. That <b>early exposure</b> allowed me
              to truly understand how computers work and nurtured a deep
              curiosity that still drives me today. Whether it&apos;s solving
              complex problems or refining a single line of code, I bring
              <b>enthusiasm and dedication</b> to everything I build.
            </p>
          </div>
          <Image
            src="/programmer-image.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 hidden lg:block md:-right-[10%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
