import { SECTOR_ICONS } from "@/components/sector-animation/sector.constanst";
import React from "react";
import Marquee from "react-fast-marquee";

export default function SectorAnimation() {
  return (
    <div className="overflow-hidden h-[248px] relative w-full py-14 z-[2] -rotate-[2.37deg]  bg-zinc-900">
      {/* <div className="after:content-[''] after:w-full after:bg-red-500 after:absolute after:h-[300px] after:z-50 after:rotate-[-2.37deg] after:top-[10%] after:*:hidden" /> */}
      <div className="space-y-6">
        <Marquee direction="right" pauseOnHover autoFill>
          <div className="flex items-center gap-[3.75rem] ml-[3.75rem] justify-center">
            {SECTOR_ICONS.SECTOR_1.map((item, i) => (
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
        <Marquee direction="left" pauseOnHover autoFill>
          <div className="flex items-center  gap-[3.75rem] ml-[3.75rem] justify-center">
            {SECTOR_ICONS.SECTOR_2.map((item, i) => (
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
