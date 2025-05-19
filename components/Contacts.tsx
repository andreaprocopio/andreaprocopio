import React from "react";
import SectionTitle from "./SectionTitle";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import CopyEmail from "./CopyEmail";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/yourusername",
    icon: <Twitter className="w-6 h-6" />,
    label: "Twitter",
  },
  {
    href: "mailto:your@email.com",
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
  },
];

const Contacts = () => {
  return (
    <div
      className="max-w-7xl mx-auto w-full p-8 pt-20 md:pt-32 scroll-mt-24"
      id="contacts"
    >
      <SectionTitle
        title="My contacts"
        subtitle="Essential details to get in touch with me"
      />
      <CopyEmail />
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
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
