"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { Github, Linkedin } from "lucide-react";
import CopyEmail from "./CopyEmail";
import DownloadCV from "./DownloadCV";
import { containerSpacingClassnames, cn } from "@/lib/utils";

const socialLinks = [
  {
    href: "https://github.com/andreaprocopio",
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/andrea-procopio-79a11b180/",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
  },
];

const Contacts = () => {
  return (
    <div
      className={cn("max-w-7xl mx-auto w-full", containerSpacingClassnames)}
      id="contacts"
    >
      <SectionTitle
        title="My contacts"
        subtitle="Essential details to get in touch with me"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center">
        <CopyEmail />
        <DownloadCV />
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-slate-50 hover:text-blue-500 transition-colors"
          >
            {link.icon}
            <span className="mt-2 text-sm">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
