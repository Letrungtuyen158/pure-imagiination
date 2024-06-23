import React from "react";
import Container from "../common/container";
import Google from "../common/icon/Google";
import Facebook from "../common/icon/Facebook";
import Instagram from "../common/icon/Instagram";
import Tiktok from "../common/icon/Tiktok";
import Discord from "../common/icon/Discord";
import Logo from "../common/icon/Logo";
import LogoFooter from "../common/icon/LogoFooter";
import HoverText from "../common/ui/HoverText";

const Footer = () => {
  return (
    <footer className="bg-[#FF3EA5]  text-white pt-10 pb-20">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-14 lg:gap-8 text-center  md:text-left">
          <div>
            <h2 className="flex cursor-default min-w-[135.555px] h-6 flex-col justify-center text-white  text-[20px] font-bold uppercase mb-[24px]">
              <HoverText classTextNormal="text-center sm:text-left sm:inline sm:w-fit block w-full" text={"CONTACT US"} />
            </h2>
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="flex w-[282.26px] h-6 flex-col justify-center text-[var(--Gray-Gray-01)]  text-[16px] font-medium">hello@pureimagination.asia</p>
              <p className="flex w-[124.422px] h-6 flex-col justify-center text-[var(--Gray-Gray-01)]  text-[16px] font-medium">0928280899</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold  cursor-default text-xl mb-4">
              <HoverText classTextNormal="text-center sm:text-left sm:inline sm:w-fit block w-full" text={"POWERED BY"} />
            </h2>
            <div className="flex md:justify-start justify-center">
              <Google />
            </div>
          </div>
          <div>
            <h2 className="font-bold cursor-default text-xl mb-4">
              <HoverText classTextNormal="text-center sm:text-left sm:inline sm:w-fit block w-full" text={"FOLLOW US"} />
            </h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/pureimagination.network" target="_blank">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/pureimagination.network" target="_blank">
                <Instagram />
              </a>
              <a href="https://www.tiktok.com/@pureimagination.network" target="_blank">
                <Tiktok />
              </a>
              <a href="https://discord.gg/hac3YwhGds" target="_blank">
                <Discord />
              </a>
            </div>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="font-bold text-xl cursor-default mb-4">
              <HoverText text={"PURE IMAGINATION"} />
            </h2>
            <p>Headquarter: Pure Imagination Studio,</p>
            <p>395 Lac Long Quan Street, Nghia Do, Cau Giay District, Hanoi.</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center md:text-left">
          <div className="flex justify-center md:justify-between items-center flex-col md:flex-row">
            <div className="text-white text-center md:text-left">
              <LogoFooter />
            </div>
            <div className="text-center mt-4 md:mt-0">
              <p className="text-white  text-[16px] font-semibold">Copyright © 2024 Pure Imagination Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        {}
        <div className="container hidden lg:block md:space-y-24  mx-auto text-center mt-6 md:mt-16   xl:mt-[50px]">
          <p className="flex flex-col sm:flex-row justify-center  space-x-[20px]">
            <span className=" cursor-default font-[monospace] text-center text-5xl sm:text-[96px] lg:text-[197.651px] text-[#FF3EA5] font-black custom-text-stroke  hover:custom-text-stroke-hover">
              DREAM
            </span>
            <span className="cursor-default text-[#FFF] text-center  text-5xl sm:text-[96px] lg:text-[197.651px] font-bold font-[monospace] hover:text-purple-300 transition duration-500">BIG</span>
          </p>
          <p className="flex flex-col sm:flex-row justify-center space-x-[20px] xl:space-x-[20px] lg:!mt-[30px]">
            <span className="cursor-default text-[#FFF] text-center  text-5xl sm:text-[96px] lg:text-[164.945px] font-black font-[monospace] hover:text-purple-300 transition duration-500">EARN</span>
            <span className="cursor-default text-center  text-5xl sm:text-[96px] lg:text-[164.945px]  font-black font-[monospace] custom-text-stroke2 hover:custom-text-stroke2-hover text-[#FF3EA5]">
              BIGGER
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
