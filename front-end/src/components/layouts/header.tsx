import React from "react";
import Container from "../common/container";
import Logo from "../common/icon/Logo";
import HoverText from "../common/ui/HoverText";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div
        style={{
          background: "linear-gradient(180deg, #FF3EA5 46.5%, rgba(255, 62, 165, 0.00) 100%)",
        }}
        className="z-1 w-full absolute ">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <Link href="/" aria-label="logo" className="flex space-x-2 items-center">
                <Logo />
              </Link>
              <div className="relative flex items-center lg:hidden max-h-10">
                <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                  <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                  <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"></div>
            <div
              className="flex flex-col flex-1 z-20 flex-wrap gap-6 p-8 rounded-3xl border  bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                        lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0  lg:flex-row lg:items-center lg:gap-0 lg:p-0  lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                        peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                        dark:shadow-none dark:bg-gray-800 border-gray-700  lg:!bg-transparent ">
              <div className="text-gray-600 lg:text-[18px] lg:font-normal lg:text-white lg:pr-4 lg:max-w-full w-full lg:pt-0">
                <div className="w-full tracking-wide font-medium lg:text-sm flex-col flex items-center justify-end lg:flex-row gap-6 lg:gap-0">
                  <div className=" flex flex-col items-center gap-4 lg:gap-0 lg:flex-row justify-end w-full">
                    <div className="w-[100px] leading-[23px]">
                      <Link href={"#about"}>
                        <HoverText text="ABOUT PI" />
                      </Link>
                    </div>
                    <div className="w-[150px] leading-[23px]">
                      <Link href={"#our-dreamers"}>
                        <HoverText text="OUR DREAMERS" />
                      </Link>
                    </div>
                    <div className="w-[130px] leading-[23px]">
                      <Link href={"#our-support"}>
                        <HoverText text="OUR SUPPORT" />
                      </Link>
                    </div>
                    <div className="w-[110px] leading-[23px]">
                      <Link href={"#contact-us"}>
                        <HoverText text="CONTACT US" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="flex group min-w-[220px] cursor-pointer items-center h-[36px] rounded-full gap-[8px] text-white  bg-gray-300 bg-opacity-30"
                    style={{
                      backdropFilter: "blur(10px)",
                      padding: "8px 8px 8px 16px",
                    }}>
                    <div>START YOUR DREAM</div>
                    <div className=" relative w-[26px] h-[26px]  bg-[#FF3EA5] rounded-[100px]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="group-hover:rotate-45 absolute duration-300 inset-0 m-auto flex items-center justify-center"
                        xmlns="http://www.w3.org/2000/svg">
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
                </div>

                {/* <ul className=" tracking-wide font-medium lg:text-sm flex-col flex items-center lg:flex-row gap-6 lg:gap-0">
                  <div className="w-fulll">
                    <a href="#features" className="block md:px-4 w-full text-white transition hover:text-primary">
                      <HoverText text="ABOUT PI" />
                    </a>
                  </div>
                  <li>
                    <a href="#solution" className="block md:px-4  text-white transition hover:text-primary">
                      <span>OUR DREAMERS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="block md:px-4  text-white transition hover:text-primary">
                      <span>OUR SUPPORT</span>
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="block md:px-4 text-white transition hover:text-primary">
                      <span>CONTACT US</span>
                    </a>
                  </li>
            
                </ul> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
