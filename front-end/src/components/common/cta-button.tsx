"use client";
import { cn } from "@/utils/cn";
import React from "react";

export default function CtaButton({ children, className, type = "button", classNameContainer }: { children: string; className?: string; type: any; classNameContainer?: string }) {
  return (
    <button type={type} className={cn("pl-4 group pr-2 py-2 bg-primary-pink rounded-[100px] justify-start items-center gap-2 inline-flex", classNameContainer)}>
      <div className={cn("text-center text-white capitalize sm:!text-xl !font-medium leading-normal", className)}>{children}</div>
      <div className="w-9 h-9 relative">
        <div className="w-9 h-9 left-0 top-0 absolute bg-white rounded-[100px]" />
        <div className="w-3 h-3 left-[12px] top-[12px] absolute justify-center items-center inline-flex">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="group-hover:rotate-45 absolute duration-300 inset-0 m-auto flex items-center justify-center"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_10_39)">
              <path
                d="M11.227 0H2.15898C1.73242 0 1.38555 0.346875 1.38555 0.773438C1.38555 1.2 1.73242 1.54688 2.15898 1.54688H9.35664L0.227734 10.6781C-0.0746094 10.9805 -0.0746094 11.4703 0.227734 11.7727C0.530078 12.075 1.01992 12.075 1.32227 11.7727L10.4512 2.64141V9.83906C10.4512 10.2656 10.798 10.6125 11.2246 10.6125C11.6512 10.6125 11.998 10.2656 11.998 9.83906V0.773438C12.0004 0.346875 11.6535 0 11.227 0Z"
                fill="#FF3EA5"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_39">
                <rect width="12" height="12" fill="#FF3EA5" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </button>
  );
}
