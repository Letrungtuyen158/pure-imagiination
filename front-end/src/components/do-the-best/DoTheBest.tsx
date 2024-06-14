import React from "react";
import Marquee from "react-fast-marquee";

export default function DoTheBest() {
  return (
    <div className="overflow-hidden relative w-full py-6 sm:py-[3.125rem]  bg-black">
      <Marquee direction="left" pauseOnHover autoFill>
        <div className="flex items-center gap-6 sm:gap-[6.25rem] ml-6 sm:ml-[6.25rem]">
          <svg width="40" className="sm:size-10 size-6" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#FF3EA5" />
          </svg>
          <p className="sm:leading-[62.40px] text-white sm:text-[40px] text-2xl leading-normal font-bold sm:leading-[52px]font-bold">JUST DO YOUR BEST </p>
        </div>
        <div className="flex items-center gap-6 sm:gap-[6.25rem] ml-6 sm:mx-[6.25rem]">
          <svg width="40" className="sm:size-10 size-6" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#FF3EA5" />
          </svg>
          <p className="sm:leading-[62.40px] text-white sm:text-[40px] text-2xl leading-normal font-bold sm:leading-[52px]font-bold">WE&apos;LL HANDLE THE REST</p>
        </div>
      </Marquee>
    </div>
  );
}
