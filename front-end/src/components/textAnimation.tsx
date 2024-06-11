"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-genneratte-effecct";
import DreamAnimation from "./ui/test";
const words = ["D", "R", "E", "A", "M"];
const TextAnimation = () => {
  return (
    <div
      style={{
        textShadow: "8px 8px 16px rgba(19, 30, 47, 0.20)",
      }}
      className=" text-center mx-auto text-white text-[40px] mb-6 lg:text-[90px]  xl:text-[120px] font-bold leading-[120%] "
    >
      <p>IT ALL STARTS</p>
      <div className="text-[#FFF500]">
        WITH <DreamAnimation />
      </div>
    </div>
  );
};

export default TextAnimation;

