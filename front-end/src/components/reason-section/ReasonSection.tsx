"use client";
import Container from "@/components/common/container";
import { REASON_DATA } from "@/components/reason-section/reason.constanst";
import ReasonSlide from "@/components/reason-section/ReasonSlide";
import React from "react";

export default function ReasonSection() {
  return (
    <Container>
      <div className="max-w-[1920px] sm:min-h-[933px] pt-[3rem] lg:pt-[7rem] sm:pb-[8.5rem] flex flex-col items-center relative">
        <div className="flex-col justify-start items-center gap-6 inline-flex sm:mb-[5.625rem]">
          <div className="max-w-[1444px] text-center">
            <span className="text-primary-pink text-4xl sm:text-6xl font-extrabold tracking-wide leading-normal sm:leading-[72px]">MORE REASONS </span>
            <span className="text-zinc-900 text-4xl sm:text-6xl font-extrabold tracking-wide leading-normal sm:leading-[72px]">TO JOIN US</span>
          </div>
          <div className="max-w-[1444px] text-center text-black-base sm:text-lg font-semibold sm:leading-[28.80px]">
            As a rising star in the creator network space, we&apos;ve quickly attracted top talent. <br />
            We&apos;re seeking passionate individuals ready to create exceptional content. In return, we offer a supportive community and the tools to help you thrive.
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
          {REASON_DATA.map((item, idx) => {
            return (
              <div
                key={idx + "reason"}
                className="xl:px-[50px] p-6 xl:pt-14 xl:pb-[56.80px] rounded-3xl border border-[#FFE2F2] hover:border-primary-pink justify-center items-center inline-flex group">
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
                    <div className="max-w-[268.23px] w-full text-center lg:text-left min-h-[51.20px] text-black-base transition-all duration-300 group-hover:text-pink-950 text-base font-normal leading-relaxed">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
