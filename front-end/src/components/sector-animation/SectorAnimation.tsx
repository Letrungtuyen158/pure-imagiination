import { SECTOR_ICONS } from "@/components/sector-animation/sector.constanst";
import React from "react";
import Marquee from "react-fast-marquee";

export default function SectorAnimation() {
  return (
    <div className="h-[248px] relative w-full py-14 z-[2] before:content-[''] before:bg-zinc-900 before:absolute before:top-0 before:left-0 before:-translate-x-9 before:w-[120%] before:h-[248px] -rotate-[2.37deg] bg-zinc-900">
      <div className="space-y-6">
        <Marquee direction="right" pauseOnHover autoFill>
          <div className="flex items-center gap-[3.75rem] ml-[3.75rem] justify-center">
            {SECTOR_ICONS.SECTOR_1.map((item, i) => (
              <div key={i + "SECTOR_1"} className="flex items-center gap-[3.75rem]">
                <span className="">{item.icon}</span>
                <span className="text-white text-[40px] font-bold leading-[52px]">{item.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee direction="left" pauseOnHover autoFill>
          <div className="flex items-center  gap-[3.75rem] ml-[3.75rem] justify-center">
            {SECTOR_ICONS.SECTOR_2.map((item, i) => (
              <div key={i + "SECTOR_2"} className="flex items-center gap-[3.75rem]">
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
