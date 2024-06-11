import { PARTNER_ICONS } from "@/components/partner/partner-icons.constants";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Partner() {
  return (
    <div className='w-full h-[618px] overflow-hidden py-[6.25rem] relative bg-[#FF3EA5]'>
      <div>
        <div className="text-center text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
          OUR AMAZING CUSTOMERS & PARTNERS
        </div>
        <div className='xl:py-[7.625rem] flex flex-col xl:mt-0 mt-[3.75rem] gap-[3.75rem]'>
          <Marquee pauseOnHover>
            <div className='flex items-center gap-8 justify-center'>
              {PARTNER_ICONS.map((icon, i) => (
                <span className='' key={i}>
                  {icon.icon}
                </span>
              ))}
            </div>
          </Marquee>
          <Marquee direction='right' pauseOnHover>
            <div className='flex items-center gap-8 justify-center'>
              {PARTNER_ICONS.map((icon, i) => (
                <span className='' key={i}>
                  {icon.icon}
                </span>
              ))}
            </div>
          </Marquee>
        </div>
        <div className='absolute bottom-0 right-0'>
          <svg
            width='1920'
            height='88'
            viewBox='0 0 1920 88'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 88L1920 0V88H0Z' fill='#FFECF6' />
          </svg>
        </div>
      </div>
    </div>
  );
}
