"use client";
import React from "react";
import DreamAnimation from "../common/ui/TextAnimationInfity";
const words = ["D", "R", "E", "A", "M"];
const TextAnimation = () => {
  return (
    <div
      style={{
        textShadow: "8px 8px 16px rgba(19, 30, 47, 0.20)",
      }}
      className=" text-center mx-auto text-white text-[30px] mb-6 lg:text-[70px]  xl:text-[90px] font-black leading-[120%] ">
      <p>IT ALL STARTS</p>
      <div className="text-[#FFF500]">
        WITH <DreamAnimation />
      </div>
    </div>
  );
};

export default TextAnimation;
