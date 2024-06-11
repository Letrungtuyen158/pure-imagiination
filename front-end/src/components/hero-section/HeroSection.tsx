import React from "react";
import Image from "next/image";
import banner from "../../../public/banner.png";
import Container from "../common/container";
import TextAnimation from "./TextAnimation";
const HeroSection = () => {
  return (
    <div className="relative  h-[400px] lg:h-[670px] " id="home">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image src={banner} fill style={{ objectFit: "cover" }} placeholder="blur" quality={100} alt="Background Image" priority className="absolute inset-0" />
      </div>
      <Container>
        <div className="relative pt-32 lg:pt-36 ml-auto ">
          <TextAnimation />
          <button type="button" className="flex p-2 text-center mx-auto items-center gap-2 rounded-full bg-opacity-30 backdrop-blur-md">
            <p className="text-white text-center  text-2xl font-bold leading-normal capitalize">START YOUR DREAM</p>
            <div className="w-9 h-9 relative">
              <div className="w-9 h-9 left-0 top-0 absolute bg-[#FF3EA5] rounded-[100px]" />
              <div className="w-3 h-3 left-[12px] top-[12px] absolute justify-center items-center inline-flex">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:rotate-45 duration-300" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_10_39)">
                    <path
                      d="M11.227 0H2.15898C1.73242 0 1.38555 0.346875 1.38555 0.773438C1.38555 1.2 1.73242 1.54688 2.15898 1.54688H9.35664L0.227734 10.6781C-0.0746094 10.9805 -0.0746094 11.4703 0.227734 11.7727C0.530078 12.075 1.01992 12.075 1.32227 11.7727L10.4512 2.64141V9.83906C10.4512 10.2656 10.798 10.6125 11.2246 10.6125C11.6512 10.6125 11.998 10.2656 11.998 9.83906V0.773438C12.0004 0.346875 11.6535 0 11.227 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_39">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
