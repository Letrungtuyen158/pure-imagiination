import { SLOGAN_ICONS } from "@/components/slogan-animation/slogan.constanst";
import React from "react";
import Marquee from "react-fast-marquee";

export default function SloganAnimation() {
  return (
    <div className="sm:h-[248px] h-[144px] relative w-full py-6 sm:py-14 z-[2] before:content-[''] before:bg-zinc-900 before:absolute before:top-0 before:left-0 before:-translate-x-9 before:w-[120%] sm:before:h-[248px] before:h-[154px] rotate-[2.37deg] bg-zinc-900">
      <div className="sm:space-y-6 space-y-4">
        <Marquee direction="right" pauseOnHover autoFill>
          <div className="flex items-center gap-[3.75rem] ml-[3.75rem]">
            {SLOGAN_ICONS.SLOGAN_1.map((item, i) => (
              <div key={i + "SLOGAN_1"} className="flex items-center gap-[3.75rem]">
                <span className="">{item.icon}</span>
                <span className="text-white sm:text-[40px] text-2xl leading-normal font-bold sm:leading-[52px]">{item.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee direction="left" pauseOnHover autoFill>
          <div className="flex items-center gap-[3.75rem] ml-[3.75rem]">
            {SLOGAN_ICONS.SLOGAN_2.map((item, i) => (
              <div key={i + "SLOGAN_2"} className="flex items-center gap-[3.75rem]">
                <span className="">{item.icon}</span>
                <span className="text-white sm:text-[40px] text-2xl leading-normal font-bold sm:leading-[52px]">{item.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
