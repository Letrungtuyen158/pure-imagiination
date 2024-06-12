import Container from "@/components/common/container";
import { REASON_DATA } from "@/components/reason-section/reason.constanst";
import React from "react";

export default function ReasonSection() {
  return (
    <Container>
      <div className="max-w-[1920px] min-h-[933px] pt-[7rem] pb-[8.5rem] flex flex-col items-center relative">
        <div className="flex-col justify-start items-start gap-6 inline-flex mb-[5.625rem]">
          <div className="max-w-[1444px] text-center">
            <span className="text-primary-pink text-6xl font-extrabold leading-[78px]">MORE REASONS </span>
            <span className="text-zinc-900 text-6xl font-extrabold leading-[78px]">TO JOIN US</span>
          </div>
          <div className="max-w-[1444px] text-center text-gray-700 text-lg font-medium leading-[28.80px]">
            Your creative vision, our business expertise. Leave the negotiations, deals, and revenue optimization to us. <br />
            We’ll ensure you get the most out of your talent while you focus on what you do best
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {REASON_DATA.map((item, idx) => {
            return (
              <div key={idx} className="px-[50px] pt-14 pb-[56.80px] rounded-3xl border border-[#FFE2F2] hover:border-primary-pink justify-center items-center inline-flex group">
                <div className="self-stretch justify-start items-center gap-8 inline-flex">
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
                    <div className="w-[144.54px] h-6 text-black-base transition-all duration-300 group-hover:text-primary-pink text-xl font-extrabold uppercase">{item.title}</div>
                    <div className="w-[268.23px] h-[51.20px] text-slate-500 transition-all duration-300 group-hover:text-pink-950 text-base font-normal leading-relaxed">{item.description}</div>
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
