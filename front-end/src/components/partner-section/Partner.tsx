"use client";
import { PARTNER_ICONS, PARTNER_ICONS2 } from "@/components/partner-section/partner-icons.constants";
import useDeviceDetect from "@/utils/isMobiClient";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Partner() {
  const isMobile = useDeviceDetect();
  return (
    <div className="w-full h-[450px] lg:h-[618px] overflow-hidden sm:py-[6.25rem] py-12 relative bg-[#FF3EA5]">
      <div className="overflow-hidden">
        <div className="text-center text-white text-3xl sm:text-5xl font-bold tracking-wide leading-normal sm:leading-[57.60px]">OUR AMAZING CUSTOMERS & PARTNERS</div>
        <div className="xl:py-[7.625rem] flex flex-col overflow-hidden xl:mt-0 mt-[3.75rem] lg:gap-[3.75rem] gap-[1.5rem]">
          <Marquee pauseOnHover autoFill speed={isMobile ? 75 : 60}>
            <div className="flex items-center gap-8 lg:gap-16 justify-center">
              {PARTNER_ICONS2.map((item, idx) => (
                <Image
                  key={idx + "partner_1"}
                  src={item.icon}
                  priority
                  alt={item.name}
                  width={isMobile ? 50 : 157}
                  className="max-h-[64.6px] max-w-[157px] font-bold"
                  quality={100}
                  height={isMobile ? 50 : 157}
                />
              ))}
            </div>
          </Marquee>
          <Marquee direction="right" pauseOnHover autoFill speed={isMobile ? 75 : 60}>
            <div className="flex items-center gap-8 lg:gap-16 justify-center">
              {PARTNER_ICONS.map((item, idx) => (
                <Image
                  key={idx + "partner_2"}
                  src={item.icon}
                  priority
                  alt={item.name}
                  width={isMobile ? 50 : 157}
                  className="max-h-[64.6px] max-w-[157px] font-bold"
                  quality={100}
                  height={isMobile ? 50 : 157}
                />
              ))}
            </div>
          </Marquee>
        </div>
        <div className="absolute -bottom-1 right-0">
          <svg width="1920" height="88" viewBox="0 0 1920 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 88L1920 0V88H0Z" fill="#FFECF6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
