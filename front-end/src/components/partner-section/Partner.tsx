import { PARTNER_ICONS_1, PARTNER_ICONS_2 } from "@/components/partner-section/partner-icons.constants";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Partner() {
  return (
    <div className="w-full h-[618px] overflow-hidden py-[6.25rem] relative bg-[#FF3EA5]">
      <div>
        <div className="text-center text-white text-[40px] lg:text-5xl font-bold tracking-wide leading-[57.60px]">OUR AMAZING CUSTOMERS & PARTNERS</div>
        <div className="xl:py-[7.625rem] flex flex-col xl:mt-0 mt-[3.75rem] gap-[3.75rem]">
          <Marquee pauseOnHover>
            <div className="flex items-center gap-16 justify-center">
              {PARTNER_ICONS_1.map((item, idx) => (
                <Image key={idx} src={item.icon} alt={item.name} width={157} className="max-h-[64.6px] max-w-[157px]" quality={100} height={64.6} />
              ))}
            </div>
          </Marquee>
          <Marquee direction="right" pauseOnHover>
            <div className="flex items-center gap-16 justify-center">
              {PARTNER_ICONS_2.map((item, idx) => (
                <Image key={idx} src={item.icon} alt={item.name} width={157} className="max-h-[64.6px]" quality={100} height={64.6} />
              ))}
            </div>
          </Marquee>
        </div>
        <div className="absolute bottom-0 right-0">
          <svg width="1920" height="88" viewBox="0 0 1920 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 88L1920 0V88H0Z" fill="#FFECF6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
