import React from "react";
import Image from "next/image";

interface TechnologiesProps {
  technologies: { alt: string; img: string }[];
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className="flex items-center space-x-[-10px] my-8">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="w-10 h-10 rounded-full overflow-hidden border border-slate-500 shadow-md relative"
        >
          <Image
            src={tech.img}
            alt={tech.alt}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
