"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";

interface HoverTextProps {
  text: string;
  classTextNormal?: string;
  classTextHover?: string;
}
const HoverText = ({ text, classTextNormal, classTextHover }: HoverTextProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="relative w-full h-6 overflow-hidden cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`absolute w-full transition-transform duration-300 ${hovered ? "-translate-y-full" : "translate-y-0"}`}>
        <span className={cn("text-white", classTextNormal)}>{text}</span>
      </div>
      <div className={`absolute w-full transition-transform duration-300 ${hovered ? "translate-y-0" : "translate-y-full"}`}>
        <span className={cn("text-white", classTextHover)}>{text}</span>
      </div>
    </div>
  );
};

export default HoverText;
