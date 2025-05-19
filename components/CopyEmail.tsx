"use client";

import React, { useState } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "andreproco@gmail.com";

  const defaultOptions = {
    loop: false,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error while copying:", err);
    }
  };

  return (
    <TooltipProvider>
      <div className="relative inline-block">
        {/* Confetti overlay */}
        {copied && (
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
            <Lottie options={defaultOptions} height={150} width={150} />
          </div>
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              onClick={handleCopy}
              className="relative z-20 !cursor-pointer"
            >
              Copy my email <Clipboard className="ml-2 h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? "Copied!" : "Click to copy"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
