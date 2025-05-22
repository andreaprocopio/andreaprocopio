"use client";

import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const DownloadCV = () => {
  const handleDownload = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = "/andreaprocopio_curriculum_eng.pdf";
      link.download = "andreaprocopio_curriculum_eng.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleDownload}
      className="w-fit cursor-pointer"
    >
      Download CV <Download className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default DownloadCV;
