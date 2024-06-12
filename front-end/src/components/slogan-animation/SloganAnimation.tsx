import { SLOGAN_ICONS } from "@/components/slogan-animation/slogan.constanst";
import React from "react";
import Marquee from "react-fast-marquee";

export default function SloganAnimation() {
  return (
    <div className="overflow-hidden h-[312px] relative w-full xl:py-24 py-16 md:py-20  bg-zinc-900">
      <div className="absolute top-0 -right-[8.75rem] w-full overflow-hidden">
        <svg style={{ transform: "rotateX(180deg)" }} width="1920" height="88" viewBox="0 0 1920 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 88L1920 0V88H0Z" fill="#FFF" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0  w-full overflow-hidden">
        <svg style={{ transform: "rotateY(180deg)" }} width="1920" height="88" viewBox="0 0 1920 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 88L1920 0V88H0Z" fill="#FFF" />
        </svg>
      </div>
      <div className="space-y-6 -mt-2 rotate-[2.37deg]">
        <Marquee direction="right" pauseOnHover>
          <div className="flex items-center gap-[3.75rem] ml-[3.75rem]">
            {SLOGAN_ICONS.SLOGAN_1.map((item, i) => (
              <div key={i} className="flex items-center gap-[3.75rem]">
                <span className="" key={i}>
                  {item.icon}
                </span>
                <span className="text-white text-[40px] font-bold leading-[52px]" key={i}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee direction="left" pauseOnHover>
          <div className="flex items-center gap-[3.75rem] ml-[3.75rem]">
            {SLOGAN_ICONS.SLOGAN_2.map((item, i) => (
              <div key={i} className="flex items-center gap-[3.75rem]">
                <span className="" key={i}>
                  {item.icon}
                </span>
                <span className="text-white text-[40px] font-bold leading-[52px]" key={i}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
