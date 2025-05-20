"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import SectionTitle from "./SectionTitle";

export function TechStack() {
  return (
    <div id="tech-stack" className="scroll-mt-24 my-20 md:my-28">
      <div className="flex flex-col gap-12 antialiased border-y bg-black/20 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-12">
        <div className="max-w-7xl mx-auto w-full px-8">
          <SectionTitle
            title="Tech Stack"
            subtitle="A quick overview of the technologies I work with"
          />
        </div>
        <InfiniteMovingCards items={techStack} direction="right" speed="fast" />
      </div>
    </div>
  );
}

const techStack = [
  {
    name: "Next.js",
    imgSrc: "/Next.js.svg",
  },
  {
    name: "React.js",
    imgSrc: "/React.svg",
  },
  {
    name: "Tailwind CSS",
    imgSrc: "/Tailwind CSS.svg",
  },
  {
    name: "Typescript",
    imgSrc: "/icons8-typescript.svg",
  },
  {
    name: "JavaScript",
    imgSrc: "/icons8-javascript.svg",
  },
  {
    name: "Python",
    imgSrc: "/icons8-python.svg",
  },
  {
    name: "Postgre SQL",
    imgSrc: "/icons8-postgresql.svg",
  },
  {
    name: "REST API",
    imgSrc: "/icons8-api-48.png",
  },
  {
    name: "Docker",
    imgSrc: "/icons8-docker.svg",
  },
  {
    name: "Git",
    imgSrc: "/icons8-git.svg",
  },
  {
    name: "Sass/Scss",
    imgSrc: "/icons8-sass.svg",
  },
  {
    name: "CSS",
    imgSrc: "/icons8-css.svg",
  },
  {
    name: "HTML",
    imgSrc: "/icons8-html5.svg",
  },
  {
    name: "npm",
    imgSrc: "/icons8-npm.svg",
  },
  {
    name: "Figma",
    imgSrc: "/icons8-figma.svg",
  },
];
