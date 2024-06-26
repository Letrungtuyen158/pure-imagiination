"use client";
import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";
import arrow from "./arrow.png";

export default function CtaButton({
  children,
  className,
  type = "button",
  classNameContainer,
  svgClass,
  fill = "#FF3EA5",
}: {
  children: string;
  className?: string;
  type?: any;
  classNameContainer?: string;
  svgClass?: string;
  fill?: string;
}) {
  return (
    <button
      type={type}
      className={cn("pl-4 group pr-2 py-2 bg-primary-pink border-primary-pink hover:bg-sky-400 hover:border-sky-400 rounded-[100px] justify-start items-center gap-2 inline-flex", classNameContainer)}>
      <div className={cn("text-center text-white capitalize sm:!text-xl !font-medium leading-normal", className)}>{children}</div>
      <div className="w-9 h-9 relative">
        <div className={cn("w-9 h-9 left-0 top-0 absolute bg-white rounded-[100px]", svgClass)} />
        <div className="w-3 h-3 left-[12px] top-[12px] absolute justify-center items-center inline-flex">
          <Image src={arrow} alt={"sads"} className="absolute group-hover:rotate-[135deg] duration-300 w-[14px] h-[14px]" />
        </div>
      </div>
    </button>
  );
}
