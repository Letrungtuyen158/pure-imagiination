import React from "react";
import Image from "next/image";
import banner from "../../../public/banner.png";
import Container from "../common/container";
import TextAnimation from "./TextAnimation";
import CtaButton from "../common/cta-button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-t from-primary-pink from-0% to-30% to-transparent  h-[480px] lg:h-[670px] " id="home">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image src={banner} fill style={{ objectFit: "cover" }} placeholder="blur" quality={100} alt="Background Image" priority className="absolute inset-0" />
      </div>
      <Container>
        <div className="relative pt-32 lg:pt-36 ml-auto ">
          <TextAnimation />
          <CtaButton
            classNameContainer="flex px-2 py-1 text-center group mx-auto items-center gap-2 bg-transparent border-yellow-400 hover:bg-sky-400 hover:border-sky-400 border-[3px]  rounded-full"
            className="text-base leading-normal  tracking-wide">
            START YOUR DREAM
          </CtaButton>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
