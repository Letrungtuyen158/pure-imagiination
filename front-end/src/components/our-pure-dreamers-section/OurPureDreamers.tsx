"use client";
import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowProps, DotProps } from "react-multi-carousel/lib/types";
import "./style.css";
import Image from "next/image";
import creators from "./creators.constanst";
import Tiktok from "@/components/common/icon/Tiktok";
import Instagram from "@/components/common/icon/Instagram";
import Youtube from "@/components/common/icon/Youtube";
const CustomLeftArrow = ({ onClick }: ArrowProps) => (
  <button onClick={onClick} className="custom-left-arrow hidden sm:block">
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62.5 75L37.5 50L62.5 25" stroke="#65758B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);
const CustomRightArrow = ({ onClick }: ArrowProps) => (
  <button onClick={onClick} className="custom-right-arrow hidden sm:block">
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5 25L62.5 50L37.5 75" stroke="#CC3284" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);
const CustomDot = ({ onClick, active }: DotProps) => (
  <li className={`custom-dot ${active ? "active" : ""}`} onClick={onClick}>
    {active ? <div className="w-3.5 h-3.5 bg-pink-600 rounded-[100px]" /> : <div className="w-3.5 h-3.5 bg-slate-300 rounded-[100px]" />}
  </li>
);
export default function CarouselSlide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="our-dreamers" className="bg-white relative py-10">
      <div className="absolute -top-1 right-0">
        <svg width="1920" height="88" viewBox="0 0 1920 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1920 88V0H0Z" fill="#FFECF6" />
        </svg>
      </div>
      <div className="max-w-[1920px] mx-auto px-[35px]  lg:px-[100px]  xxl:px-[20px]">
        <div className="mt-28 mb-4 text-center">
          <span className="text-black-base text-6xl  font-extrabold tracking-wide leading-[72px]">OUR </span>
          <span className="text-primary-pink text-6xl  font-extrabold tracking-wide leading-[72px]">PURE DREAMERS</span>
        </div>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          customDot={<CustomDot />}
          dotListClass="custom-dot-list-style">
          {creators.map((creator, i) => {
            return (
              <div key={i} className="py-8 justify-center flex flex-col lg:flex-row items-center gap-10 lg:h-[400px] h-full sm:px-28 xl:px-48">
                <Image
                  className="rounded-full min-w-20 select-none min-h-20 max-w-[400px] max-h-[400px] sm:mt-0"
                  layout="responsive"
                  width={400}
                  height={400}
                  quality={100}
                  draggable={false}
                  placeholder="blur"
                  priority
                  src={creator.avatar}
                  alt={creator.name + "," + creator.position}
                />
                <div className="flex flex-col lg:items-start gap-6">
                  <div className="flex flex-col lg:items-start max-w-[768px] gap-2">
                    <p className="text-center text-primary-pink text-[24px] sm:text-[32px] font-bold tracking-wide leading-[28px] sm:leading-[38.40px]">{creator.name}</p>
                    <p className="text-center text-gray-700 mb-4 text-lg sm:text-2xl font-medium leading-[24px] tracking-wide sm:leading-[28.80px]">{creator.position}</p>
                    <p className="text-slate-500 text-base sm:text-lg font-normal leading-[24px] tracking-wide xl:leading-[28.80px]">{creator.introduce}</p>
                  </div>
                  <div className="flex justify-start items-center gap-4">
                    <a href={creator.href_fb} target="_blank" className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full relative">
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1_253)">
                            <path
                              d="M13.8587 24V13.0533H17.5316L18.0826 8.78588H13.8587V6.06176C13.8587 4.82664 14.2003 3.98492 15.9734 3.98492L18.2313 3.98399V0.167076C17.8408 0.116334 16.5005 0 14.9405 0C11.683 0 9.45282 1.98836 9.45282 5.63912V8.78588H5.7688V13.0533H9.45282V24H13.8587Z"
                              fill="#E63895"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_253">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </a>
                    <a href={creator.href_ins} target="_blank" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-500 relative">
                      <span className="absolute left-1/2 top-1/2 *:*:fill-[#15191E] -translate-x-1/2 -translate-y-1/2">
                        <Instagram />
                      </span>
                    </a>
                    <a href={creator.href_tik} target="_blank" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-500 relative">
                      <span className="absolute left-1/2 top-1/2 *:*:fill-[#15191E] -translate-x-1/2 -translate-y-1/2">
                        <Tiktok />
                      </span>
                    </a>
                    <a href={creator.href_ytb} target="_blank" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-500 relative">
                      <span className="absolute left-1/2 top-1/2 *:*:fill-[#15191E] -translate-x-1/2 -translate-y-1/2">
                        <Youtube />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
