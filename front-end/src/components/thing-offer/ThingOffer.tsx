import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";
import Banner from "/public/cta-banner.png";
import { THING_OFFER } from "./thing-offer.constanst";

export default function ThingOffer() {
  return (
    <div className="py-32 pb-[10.75rem] bg-rose-50 overflow-hidden">
      <Container>
        <div className="text-center mb-[4.75rem]">
          <span className="text-black-base text-6xl font-extrabold leading-[72px]">THIS IS THINGS </span>
          <span className="text-primary-pink text-6xl font-extrabold leading-[72px]">WE OFFER</span>
        </div>
        <div className="space-y-[3.125rem]">
          {THING_OFFER.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-col justify-center group duration-300 relative transition-all">
                <div className="max-w-[1444px] mx-auto min-h-[300px] px-10 sm:px-[60px] bg-white rounded-[32px] relative border border-gray-300 justify-center items-center gap-6 inline-flex duration-500 transition-all  group-hover:border-none bg-transparent xl:gap-[200px] sm:gap-10 lg:flex-row flex-col">
                  <Image
                    src={Banner}
                    className="absolute opacity-0 group-hover:opacity-100 z-[3] w-full h-full rounded-[32px] duration-500 transition-all object-cover"
                    width={200}
                    placeholder="blur"
                    height={200}
                    alt={item.title}
                  />
                  <div className="absolute opacity-0 group-hover:shadow-purple-rgba z-[10] group-hover:bg-[#d400ffca] group-hover:opacity-100 inset-0 w-full h-full rounded-[32px] duration-300 transition-all " />
                  <div className="max-w-[368px] w-full z-20 text-zinc-900 text-2xl sm:text-4xl xl:text-6xl font-extrabold xl:leading-[72px] duration-300 transition-all group-hover:text-[#FFF500]">
                    {item.title}
                  </div>
                  <div className="max-w-[756px] w-full ml-auto z-20 text-gray-700 group-hover:text-white text-sm sm:text-lg xl:text-lg font-medium md:leading-[28.80px] duration-300 transition-all">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
