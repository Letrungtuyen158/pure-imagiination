import Container from "@/components/common/container";
import CtaButton from "@/components/common/cta-button";
import { CTA_DATA } from "@/components/cta-section/data";
import Play from "@/components/common/icon/Play";
import Star from "@/components/common/icon/Star";
import Image from "next/image";
import React from "react";
import VideoThumbnail from "../common/Video-thumnail";

export default function CtaSection() {
  return (
    <div id="about" className="w-full bg-[#FFECF6]">
      <Container>
        <div className="lg:py-40 py-0 lg:flex-row flex-col mx-auto flex gap-10 lg:gap-[5.75rem] items-center justify-center relative">
          <VideoThumbnail />
          <div className="space-y-3 lg:w-[50rem]">
            <div className="">
              <span className="text-primary-pink text-4xl sm:text-6xl font-extrabold tracking-wide leading-normal sm:leading-[72px]">WHO </span>
              <span className="text-black-base text-4xl sm:text-6xl font-extrabold tracking-wide leading-normal sm:leading-[72px]">ARE WE?</span>
            </div>
            <div className="text-black-base text-xl font-semibold  leading-[30px]">{CTA_DATA.title}</div>
            <div className="max-w-[737px] py-3">
              <p className="text-gray-700 text-base font-normal  leading-relaxed">
                {CTA_DATA.description}
                <br />
                <span className="text-2xl font-bold leading-[38.40px] text-black bg-gradient-to-r bg-clip-text">{CTA_DATA.callingText}</span>
              </p>
            </div>
            <div className="flex flex-col sm:gap-x-[4.25rem] mt-2 sm:gap-y-5 space-y-2 sm:space-y-0 flex-wrap">
              <div className="space-y-2 sm:space-y-0">
                <div className="h-6 items-center gap-3 flex sm:inline-flex min-w-56">
                  <Star className="w-6 h-6" />
                  <div className=" text-black-base text-lg font-medium  leading-normal tracking-wide">{CTA_DATA.positions[0]}</div>
                </div>
                <div className="h-6 items-center gap-3 flex sm:inline-flex min-w-56">
                  <Star className="w-6 h-6" />
                  <div className=" text-black-base text-lg font-medium  leading-normal tracking-wide">{CTA_DATA.positions[1]}</div>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-0">
                <div className="h-6 items-center gap-3 flex sm:inline-flex min-w-56">
                  <Star className="w-6 h-6" />
                  <div className=" text-black-base text-lg font-medium  leading-normal tracking-wide">{CTA_DATA.positions[2]}</div>
                </div>
                <div className="h-6 items-center gap-3 flex sm:inline-flex min-w-56">
                  <Star className="w-6 h-6" />
                  <div className=" text-black-base text-lg font-medium  leading-normal tracking-wide">{CTA_DATA.positions[3]}</div>
                </div>
              </div>
            </div>
            <div className="pt-7">
              <CtaButton className="text-base leading-normal tracking-wide">{CTA_DATA.buttonLabel}</CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
