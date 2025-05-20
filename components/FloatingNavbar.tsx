"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  ArrowUpToLine,
  UserRound,
  FolderKanban,
  Mail,
  Cpu,
} from "lucide-react";

export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: (
        <ArrowUpToLine className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About me",
      link: "#about-me",
      icon: <UserRound className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tech stack",
      link: "#tech-stack",
      icon: <Cpu className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Recent work",
      link: "#recent-work",
      icon: (
        <FolderKanban className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contacts",
      link: "#contacts",
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
