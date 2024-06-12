import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";
import Banner from "/public/get-in-touch.png";
import CtaButton from "@/components/common/cta-button";

export default function SecondCTA() {
  return (
    <div className="py-32 pb-[10.75rem] bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-[4.75rem]">
          <span className="text-black-base text-6xl font-extrabold leading-[72px]">THIS IS THINGS </span>
          <span className="text-primary-pink text-6xl font-extrabold leading-[72px]">WE OFFER</span>
        </div>
        <div className="space-y-[3.125rem]">
          <div className="flex flex-col justify-center duration-300 relative transition-all">
            <div className="max-w-[1444px] w-full mx-auto h-[300px] relative">
              <div className="w-full min-h-[400px] lg:min-h-[300px] md:max-h-[300px] absolute inset-0 bg-gradient-to-r rounded-[32px] from-black-base from-40% to-transparent" />
              <Image
                src={Banner}
                className="rounded-[32px] min-h-[400px] lg:min-h-[300px] md:h-[300px] object-cover bg-gradient-to-r from-black to-black"
                width={1444}
                placeholder="blur"
                height={300}
                alt={"Get in touch"}
              />
              <div className="flex-col absolute top-10 left-10 justify-start items-start gap-10 inline-flex max-w-[760px]">
                <p className="text-primary-pink text-3xl sm:text-5xl font-extrabold !leading-[62.40px] tracking-wide">
                  LET US <span className="text-white">HELP YOU TO BE A “PURE”</span> CONTENT CREATOR
                </p>
                <CtaButton>Get in touch</CtaButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
