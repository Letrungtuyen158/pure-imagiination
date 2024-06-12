import { SECTOR_ICONS } from "@/components/sector-animation/sector.constanst";
import React from "react";
import Marquee from "react-fast-marquee";

export default function SectorAnimation() {
  return (
    <div className="overflow-hidden h-[312px] relative w-full py-24  bg-zinc-900">
      <div className="absolute top-0 left-0">
        <svg width="1920" height="78" viewBox="0 0 1920 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1920.59 -0.0415578L3.98921e-06 77.5L5.03717e-05 -21.5L1920.59 -0.0415578Z" fill="#FF3EA5" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg width="1920" height="88" viewBox="0 0 1920 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 88L1920 0V88H0Z" fill="#FFECF6" />
        </svg>
      </div>
      <div className="space-y-6 -mt-2 -rotate-[2.37deg]">
        <Marquee direction="right" pauseOnHover>
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
        <Marquee direction="left" pauseOnHover>
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
