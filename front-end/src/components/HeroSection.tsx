import React from "react";
import Container from "./common/container";
import Image from "next/image";
import banner from "../../public/banner.png";
const HeroSection = () => {
  return (
    <div className="relative  h-[400px] lg:h-[670px] " id="home">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={banner}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          quality={100}
          alt="Background Image"
          priority
          className="absolute inset-0"
        />
      </div>
      <Container>
        <div className="relative pt-32 lg:pt-36 ml-auto ">
          <div
            style={{
              textShadow: "8px 8px 16px rgba(19, 30, 47, 0.20)",
            }}
            className=" text-center mx-auto text-white text-[45px] leading-[120%] lg:text-[120px] font-bold lg:leading-[120%] "
          >
            IT ALL STARTS <p>WITH A DREAM</p>
          </div>
          <button type="button" className="flex px-[8px] py-[16px]">
            <p>STAR YOUR DREAM</p>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;

