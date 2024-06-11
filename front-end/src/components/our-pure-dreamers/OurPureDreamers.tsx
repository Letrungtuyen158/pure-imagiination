"use client";
import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowProps, DotProps } from "react-multi-carousel/lib/types";
import "./style.css";
import Container from "@/components/common/container";
import Image from "next/image";

const CustomLeftArrow = ({ onClick }: ArrowProps) => (
  <button onClick={onClick} className='custom-left-arrow '>
    <svg
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M62.5 75L37.5 50L62.5 25'
        stroke='#65758B'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }: ArrowProps) => (
  <button onClick={onClick} className='custom-right-arrow '>
    <svg
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M37.5 25L62.5 50L37.5 75'
        stroke='#CC3284'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  </button>
);

const CustomDot = ({ onClick, active }: DotProps) => (
  <li className={`custom-dot ${active ? "active" : ""}`} onClick={onClick}>
    {active ? (
      <div className='w-3.5 h-3.5 bg-pink-600 rounded-[100px]' />
    ) : (
      <div className='w-3.5 h-3.5 bg-slate-300 rounded-[100px]' />
    )}
  </li>
);

export default function CarouselSlide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='bg-white relative py-10'>
      <div className='absolute top-0 right-0'>
        <svg
          width='1920'
          height='88'
          viewBox='0 0 1920 88'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 0L1920 88V0H0Z' fill='#FFECF6' />
        </svg>
      </div>

      <Container>
        <div className='mt-28 mb-4 text-center'>
          <span className="text-zinc-900 text-6xl font-extrabold font-['Montserrat'] leading-[72px]">
            OUR{" "}
          </span>
          <span className="text-pink-500 text-6xl font-extrabold font-['Montserrat'] leading-[72px]">
            PURE DREAMERS
          </span>
        </div>

        <Carousel
          responsive={responsive}
          // autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          customDot={<CustomDot />}
          dotListClass='custom-dot-list-style'
        >
          <div className='px-4 py-8 flex items-center gap-10 sm:h-[400px] sm:px-10 xl:px-60'>
            <Image
              className='rounded-full'
              width={400}
              height={400}
              src='https://via.placeholder.com/400x400'
              alt='Elly Image'
            />
            <div className='flex flex-col items-start gap-6'>
              <div className='flex flex-col items-start gap-2'>
                <div className="text-center text-pink-500 text-[24px] sm:text-[32px] font-bold font-['Montserrat'] leading-[28px] sm:leading-[38.40px]">
                  Elly
                </div>
                <div className="text-center text-gray-700 text-lg sm:text-2xl font-medium font-['Montserrat'] leading-[24px] sm:leading-[28.80px]">
                  Staff of Pure
                </div>
              </div>
              <div className="text-slate-500 text-base sm:text-lg font-medium font-['Montserrat'] leading-[24px] sm:leading-[28.80px]">
                Ely It Clean aka Ely Nguyen is a beloved creator known for her
                captivating charm and innovative culinary content. Her
                delightful personality and fresh approach to cooking have
                resonated with a wide audience. We have proudly supported Ely
                since her early days, and in just one year, she has achieved
                remarkable success with 1 million followers, while making a
                positive impact on her community.
              </div>
              <div className='flex justify-start items-center gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full relative'>
                  <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_1_253)'>
                        <path
                          d='M13.8587 24V13.0533H17.5316L18.0826 8.78588H13.8587V6.06176C13.8587 4.82664 14.2003 3.98492 15.9734 3.98492L18.2313 3.98399V0.167076C17.8408 0.116334 16.5005 0 14.9405 0C11.683 0 9.45282 1.98836 9.45282 5.63912V8.78588H5.7688V13.0533H9.45282V24H13.8587Z'
                          fill='#E63895'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_1_253'>
                          <rect width='24' height='24' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-500 relative'>
                  <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 8.33203C9.97603 8.33203 8.33203 9.97603 8.33203 12C8.33203 14.024 9.97603 15.672 12 15.672C14.024 15.672 15.672 14.024 15.672 12C15.672 9.97603 14.024 8.33203 12 8.33203Z'
                        fill='#15191E'
                      />
                      <path
                        d='M17.536 2H6.464C4.004 2 2 4.004 2 6.464V17.536C2 20 4.004 22 6.464 22H17.536C20 22 22 20 22 17.536V6.464C22 4.004 20 2 17.536 2ZM12 18.48C8.428 18.48 5.52 15.572 5.52 12C5.52 8.428 8.428 5.524 12 5.524C15.572 5.524 18.48 8.428 18.48 12C18.48 15.572 15.572 18.48 12 18.48ZM18.616 6.7C17.86 6.7 17.244 6.088 17.244 5.332C17.244 4.576 17.86 3.96 18.616 3.96C19.372 3.96 19.988 4.576 19.988 5.332C19.988 6.088 19.372 6.7 18.616 6.7Z'
                        fill='#15191E'
                      />
                    </svg>
                  </span>
                </div>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-500 relative'>
                  <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18.3263 1.90393H21.6998L14.3297 10.3274L23 21.7899H16.2112L10.894 14.838L4.80995 21.7899H1.43443L9.31743 12.78L1 1.90393H7.96111L12.7674 8.25826L18.3263 1.90393ZM17.1423 19.7707H19.0116L6.94539 3.81706H4.93946L17.1423 19.7707Z'
                        fill='#15191E'
                      />
                    </svg>
                  </span>
                </div>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-500 relative'>
                  <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M21.3904 4.1119C22.4184 4.38867 23.2289 5.19921 23.5057 6.22721C24.0197 8.10529 23.9999 12.0196 23.9999 12.0196C23.9999 12.0196 23.9999 15.9142 23.5057 17.7922C23.2289 18.8202 22.4184 19.6308 21.3904 19.9076C19.5123 20.4018 11.9999 20.4018 11.9999 20.4018C11.9999 20.4018 4.50739 20.4018 2.60954 19.8878C1.58154 19.611 0.771002 18.8005 0.494232 17.7725C0 15.9142 0 11.9998 0 11.9998C0 11.9998 0 8.10529 0.494232 6.22721C0.771002 5.19921 1.60131 4.3689 2.60954 4.09213C4.48763 3.5979 11.9999 3.5979 11.9999 3.5979C11.9999 3.5979 19.5123 3.5979 21.3904 4.1119ZM15.8547 11.8626L9.60764 15.4606V8.26461L15.8547 11.8626Z'
                        fill='#15191E'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </Container>
    </div>
  );
}
