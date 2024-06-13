"use client";
import Carousel, { ArrowProps, DotProps } from "react-multi-carousel";

import React from "react";
import "./style.css";
import { REASON_DATA } from "@/components/reason-section/reason.constanst";
import Container from "@/components/common/container";

const CustomLeftArrow = ({ onClick }: ArrowProps) => (
  <button onClick={onClick} className="custom-left-arrow hidden">
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62.5 75L37.5 50L62.5 25" stroke="#65758B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);
const CustomRightArrow = ({ onClick }: ArrowProps) => (
  <button onClick={onClick} className="custom-right-arrow hidden">
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

export default function ReasonSlide() {
  return (
    <Container>
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
        {REASON_DATA.map((item, idx) => {
          return (
            <div
              key={"slide" + idx}
              className="xl:px-[50px] p-6 xl:pt-14 xl:pb-[56.80px] rounded-3xl border border-[#FFE2F2] hover:border-primary-pink justify-center items-center inline-flex group w-full">
              <div className="self-stretch lg:flex-row flex-col justify-start items-center gap-8 inline-flex">
                <div className="h-20 w-20 relative">
                  <svg
                    className="absolute top-1/2 scale-0 group-hover:scale-100 group-hover:opacity-100 opacity-0  transition-all duration-300 -z-10 left-1/2 -translate-x-[50%] -translate-y-[40%]"
                    width="117"
                    height="118"
                    viewBox="0 0 117 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M106.358 19.8141L82.8368 19.3636L78.5784 2.47505L64.6889 12.6637L55.3243 0L47.6583 14.1034L38.4442 2.00614L31.7776 25.4976L11.0644 4.72028L22.1296 37.7668L5.53181 33.0461L16.597 47.2086L0 56.65L22.1296 61.3709L5.53181 84.9752L33.1943 66.0924V94.4168L49.7925 70.8119L55.3243 89.6957L63.3998 77.8904L96.2286 118L86.3626 74.1812L102.417 73.9415L88.5195 61.3709L117 46.0452L88.2624 36.1613L106.358 19.8141Z"
                      fill="#FF3EA5"
                    />
                  </svg>
                  <div className="*:group-hover:stroke-white *:group-hover:scale-75 *:transition-all *:duration-300 stroke-black">{item.icon}</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <div className="min-w-[144.54px] w-full text-center lg:text-left min-h-6 text-black-base transition-all duration-300 group-hover:text-primary-pink text-xl font-extrabold uppercase">
                    <p>{item.title}</p>
                  </div>
                  <div className="max-w-[268.23px] w-full text-center lg:text-left min-h-[51.20px] text-slate-500 transition-all duration-300 group-hover:text-pink-950 text-base font-normal leading-relaxed">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
}
