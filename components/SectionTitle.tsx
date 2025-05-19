import React from "react";
import { TypographyH2 } from "./TypographyH2";
import { TypographyMuted } from "./TypographyMuted";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="space-y-2 my-10 md:mb-14">
      <TypographyH2 text={title} />
      <TypographyMuted className="md:text-base" text={subtitle} />
    </div>
  );
};

export default SectionTitle;
