import React, { ReactNode } from "react";
import Marquee from "react-fast-marquee";

export default function CustomMarquee({
  items,
  direction = "left",
  onlyIcon = false,
}: {
  items: { name: string; icon: ReactNode }[];
  direction?: "left" | "right" | "up" | "down";
  onlyIcon?: boolean;
}) {
  return (
    <Marquee autoFill pauseOnHover direction={direction} className="">
      <div className="flex items-center gap-16 justify-center rotate-[-2.37]">
        {items.map((item, i) => (
          <div key={i} className="flex gap-[60px]">
            <span className="">{item.icon}</span>
            {!onlyIcon && <span className=" text-center text-white text-[40px] font-bold leading-[52px]">{item.name}</span>}
          </div>
        ))}
      </div>
    </Marquee>
  );
}
