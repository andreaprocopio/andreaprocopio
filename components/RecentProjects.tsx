"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Technologies from "./Technologies";

export function RecentProjects() {
  return (
    <div
      className="max-w-7xl mx-auto w-full p-8 pt-32 scroll-mt-24"
      id="recent-work"
    >
      <SectionTitle
        title="Recent Projects"
        subtitle="A glimpse into some of the most impactful work I've done lately"
      />
      <div className="my-20 md:my-24"></div>
      <div className="flex flex-wrap gap-32 justify-center p-4">
        <PinContainer
          title="ClarityFlow"
          href="https://clarity-flow-seven.vercel.app/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] md:w-[25rem]  h-[25rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              ClarityFlow
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Transform your problems into clarity. ClarityFlow helps you
                create targeted tasks that really solve your problems.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4">
              <Image
                src="/clarity-flow-table.png"
                width={500}
                height={700}
                alt="Code screenshot"
                className="object-cover rounded-2xl"
              />
            </div>
            <Technologies
              technologies={[
                {
                  alt: "Next.js",
                  img: "/Next.js.svg",
                },
                {
                  alt: "React.js",
                  img: "/React.svg",
                },
                {
                  alt: "Tailwind CSS",
                  img: "/Tailwind CSS.svg",
                },
              ]}
            />
          </div>
        </PinContainer>
        <PinContainer
          title="Garden of Gethsemane"
          href="https://garden-of-gethsemane.vercel.app/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] md:w-[25rem] h-[25rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Garden of Gethsemane
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Plug in your headphones, press play and let your brain enter in
                whatever state you desire, in any moment you want.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4">
              <Image
                src="/garden-of-gethsemane-play-area.png"
                width={500}
                height={700}
                alt="Code screenshot"
                className="object-contain rounded-2xl"
              />
            </div>
            <Technologies
              technologies={[
                {
                  alt: "Next.js",
                  img: "/Next.js.svg",
                },
                {
                  alt: "React.js",
                  img: "/React.svg",
                },
                {
                  alt: "Tailwind CSS",
                  img: "/Tailwind CSS.svg",
                },
              ]}
            />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
