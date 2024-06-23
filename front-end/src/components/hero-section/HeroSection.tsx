"use client";
import React from "react";
import Image from "next/image";
import banner from "../../../public/banner.png";
import Container from "../common/container";
import TextAnimation from "./TextAnimation";
import arrow from "./arrow2222.png";
import Link from "next/link";

const HeroSection = () => {
  const handleLinkClick = (e: any) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    // Đóng menu bằng cách bỏ chọn checkbox
    const checkbox = document.getElementById("toggle_nav") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  };
  return (
    <div className="relative bg-gradient-to-t from-primary-pink from-0% to-30% to-transparent  h-[480px] lg:h-[670px] " id="home">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image src={banner} fill style={{ objectFit: "cover" }} placeholder="blur" quality={100} alt="Background Image" priority className="absolute inset-0" />
      </div>
      <Container>
        <div className="relative pt-32 lg:pt-36 ml-auto ">
          <TextAnimation />
          <button type="button" className="text-center flex-center mx-auto">
            <Link
              href="#contact-us"
              onClick={handleLinkClick}
              className="w-full h-full pl-4 group pr-2 bg-transparent group justify-start items-center gap-2  flex px-2 py-1 text-center group mx-auto   border-yellow-400 hover:bg-sky-400 hover:border-sky-400 border-[3px]  rounded-full">
              <div className="text-center text-white capitalize sm:!text-xl !font-medium  text-base leading-normal tracking-wide"> START YOUR DREAM</div>
              <div className="w-9 h-9 relative">
                <div className="w-9 h-9 left-0 top-0 absolute  bg-primary-pink  rounded-[100px]" />
                <div className="w-3 h-3 left-[12px] top-[12px]  justify-center items-center inline-flex">
                  <Image src={arrow} alt={"sads"} className="absolute group-hover:rotate-[135deg] duration-300 top-[10px] w-[14px] h-[14px]" />
                </div>
              </div>
            </Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
