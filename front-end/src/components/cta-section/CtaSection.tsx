import Container from "@/components/common/container";
import CtaButton from "@/components/common/cta-button";
import { CTA_DATA } from "@/components/cta-section/data";
import Play from "@/components/icon/Play";
import Star from "@/components/icon/Star";
import Image from "next/image";
import React from "react";

export default function CtaSection() {
  return (
    <div className='w-full bg-[#FFECF6]'>
      <Container>
        <div className='lg:py-40 py-16 lg:flex-row flex-col mx-auto flex gap-10 lg:gap-[5.75rem] items-center justify-center relative'>
          <div className='relative rounded-[2rem]'>
            <Image
              alt={CTA_DATA.title}
              className='object-center'
              width={616}
              height={413}
              src={CTA_DATA.banner}
            />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Play />
            </div>
          </div>
          <div className='space-y-6 lg:w-[50rem]'>
            <div className=''>
              <span className="text-pink-500 text-6xl font-extrabold font-['Montserrat'] leading-[72px]">
                WHO{" "}
              </span>
              <span className="text-zinc-900 text-6xl font-extrabold font-['Montserrat'] leading-[72px]">
                WE ARE?
              </span>
            </div>
            <div className="text-zinc-900 text-xl font-semibold font-['Montserrat'] leading-[30px]">
              {CTA_DATA.title}
            </div>
            <div className='max-w-[737px]'>
              <p className="text-gray-700 text-base font-normal font-['Montserrat'] leading-relaxed">
                {CTA_DATA.description}
                <br />
                <span className="text-fuchsia-600 text-2xl font-bold font-['Montserrat'] leading-[38.40px]">
                  {CTA_DATA.callingText}
                </span>
              </p>
            </div>
            <div className='flex flex-col sm:gap-x-[4.25rem] sm:gap-y-5 space-y-2 sm:space-y-0 flex-wrap'>
              <div className='space-y-2 sm:space-y-0'>
                <div className='h-6 items-center gap-3 flex sm:inline-flex min-w-56'>
                  <Star className='w-6 h-6' />
                  <div className=" text-zinc-900 text-lg font-medium font-['Montserrat'] leading-normal">
                    {CTA_DATA.positions[0]}
                  </div>
                </div>
                <div className='h-6 items-center gap-3 flex sm:inline-flex min-w-56'>
                  <Star className='w-6 h-6' />
                  <div className=" text-zinc-900 text-lg font-medium font-['Montserrat'] leading-normal">
                    {CTA_DATA.positions[1]}
                  </div>
                </div>
              </div>
              <div className='space-y-2 sm:space-y-0'>
                <div className='h-6 items-center gap-3 flex sm:inline-flex min-w-56'>
                  <Star className='w-6 h-6' />
                  <div className=" text-zinc-900 text-lg font-medium font-['Montserrat'] leading-normal">
                    {CTA_DATA.positions[2]}
                  </div>
                </div>
                <div className='h-6 items-center gap-3 flex sm:inline-flex min-w-56'>
                  <Star className='w-6 h-6' />
                  <div className=" text-zinc-900 text-lg font-medium font-['Montserrat'] leading-normal">
                    {CTA_DATA.positions[3]}
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-4'>
              <CtaButton className='tracking-wide text-base leading-normal font-semibold'>
                {CTA_DATA.buttonLabel}
              </CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
