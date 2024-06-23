import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";
import Banner from "/public/get-in-touch.png";
import CtaButton from "@/components/common/cta-button";
import ReasonSlide from "@/components/reason-section/ReasonSlide";

export default function SecondCTA() {
  return (
    <div className=" pt-[3rem] lg:py-32 pb-[3.75rem] lg:pb-[10.75rem] bg-white overflow-hidden">
      <Container>
        <div className="space-y-[3.125rem]">
          <div className="flex flex-col justify-center duration-300 relative transition-all">
            <div className="max-w-[1444px] w-full mx-auto h-[300px] relative">
              <div className="w-full min-h-[300px] lg:min-h-[300px] md:max-h-[300px] absolute inset-0 bg-gradient-to-r rounded-[32px] from-black-base from-0% to-80%" />
              <Image
                src={Banner}
                className="rounded-[32px] min-h-[300px] lg:min-h-[300px] md:h-[300px] object-cover bg-gradient-to-r from-black to-black"
                width={1444}
                placeholder="blur"
                priority
                quality={100}
                height={200}
                alt={"Get in touch"}
              />
              <div className="flex-col absolute top-10 left-10 justify-start items-start gap-4 sm:gap-10 inline-flex max-w-[760px]">
                <p className="text-primary-pink text-[25px] sm:text-5xl font-extrabold leading-normal  sm:!leading-[62.40px] tracking-wide">
                  LET US <span className="text-white">HELP YOU TO BE A “PURE”</span> <p>CONTENT CREATOR</p>
                </p>
                <div className="mt-4 flex items-end h-[100px] lg:mt-[-35px] lg:h-full">
                  <CtaButton>Get in touch</CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
