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
        <div className="lg:py-20 xl:py-40 py-0 xl:flex-row flex-col mx-auto lg:px-[100px] xl:px-0 flex gap-10 xl:gap-[5.75rem] items-center justify-center relative">
          <VideoThumbnail />
          <div className="space-y-3 w-full xl:w-[50rem]">
            <div className="">
              <span className="text-primary-pink text-4xl sm:text-6xl font-extrabold tracking-wide leading-normal sm:leading-[72px]">WHO </span>
              <span className="text-black-base text-4xl sm:text-6xl font-extrabold tracking-wide leading-normal sm:leading-[72px]">ARE WE?</span>
            </div>
            <div className="text-black-base text-xl font-extrabold  leading-[25px]">{CTA_DATA.title}</div>
            <div className="max-w-[737px] py-3">
              <div className="text-black-base text-base font-semibold  leading-relaxed">
                {CTA_DATA.description}
                <br />
              </div>
            </div>
            <div className="flex flex-col sm:gap-x-[4.25rem] mt-2 2xl:gap-y-5 space-y-2 sm:space-y-0 flex-wrap">
              <div className="space-y-2 sm:space-y-0">
                <div className="h-6 items-center gap-3 flex sm:inline-flex min-w-56">
                  <Star className="w-6 h-6" />
                  <div className=" text-black-base text-lg font-bold  leading-normal tracking-wide">{CTA_DATA.positions[0]}</div>
                </div>
                <div className="h-6 items-center gap-3 flex sm:inline-flex min-w-56">
                  <Star className="w-6 h-6" />
                  <div className=" text-black-base text-lg font-bold   leading-normal tracking-wide">{CTA_DATA.positions[1]}</div>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-0">
                <div className="h-6 items-center gap-3 flex sm:inline-flex min-w-56">
                  <Star className="w-6 h-6" />
                  <div className=" text-black-base text-lg font-bold   leading-normal tracking-wide">{CTA_DATA.positions[2]}</div>
                </div>
                <div className="h-6 items-center gap-3 flex sm:inline-flex min-w-56">
                  <Star className="w-6 h-6" />
                  <div className=" text-black-base text-lg font-bold   leading-normal tracking-wide">{CTA_DATA.positions[3]}</div>
                </div>
              </div>
            </div>
            <div className="pt-7 pb-4 mb-11">
              <CtaButton className="text-base leading-normal  tracking-wide">{CTA_DATA.buttonLabel}</CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
