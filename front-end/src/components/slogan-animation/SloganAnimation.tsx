import { SLOGAN_ICONS } from "@/components/slogan-animation/slogan.constanst";
import React from "react";
import Marquee from "react-fast-marquee";

export default function SloganAnimation() {
  return (
    <div className=" h-[248px] rotate-[2.37deg] relative w-full py-14 bg-zinc-900 before:content-[''] before:bg-zinc-900 before:absolute before:top-0 before:left-0 before:-translate-x-9 before:w-[120%] before:h-[248px]">
      <div className="space-y-6">
        <Marquee direction="right" pauseOnHover autoFill>
          <div className="flex items-center gap-[3.75rem] ml-[3.75rem]">
            {SLOGAN_ICONS.SLOGAN_1.map((item, i) => (
              <div key={i + "SLOGAN_1"} className="flex items-center gap-[3.75rem]">
                <span className="">{item.icon}</span>
                <span className="text-white text-[40px] font-bold leading-[52px]">{item.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee direction="left" pauseOnHover autoFill>
          <div className="flex items-center gap-[3.75rem] ml-[3.75rem]">
            {SLOGAN_ICONS.SLOGAN_2.map((item, i) => (
              <div key={i + "SLOGAN_2"} className="flex items-center gap-[3.75rem]">
                <span className="">{item.icon}</span>
                <span className="text-white text-[40px] font-bold leading-[52px]">{item.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
