import CtaButton from "@/components/common/cta-button";
import React from "react";

const FormContactSection = () => {
  return (
    <div id="contact-us" className="relative bg-[url('/Contact.png')] bg-cover bg-no-repeat h-[433px] lg:h-[866px]">
      <div>123123</div>
      <div className="Fw-[706px] h-[606px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="Rself-stretch">
          <span className="text-white text-5xl font-extrabold leading-[62.40px]">
            READY TO <br />
            USE YOUR{" "}
          </span>
          <span className="text-fuchsia-600 text-5xl font-extrabold leading-[62.40px]">IMAGINATION?</span>
        </div>
        <div className="justify-start items-start gap-8 inline-flex">
          <div className="h-[51px] pr-3 py-3 border-b border-fuchsia-600 justify-start items-center gap-[92px] flex">
            <div className="text-white text-lg font-medium leading-[27px]">Email</div>
          </div>
          <div className="h-[51px] pr-3 py-3 border-b border-white justify-start items-center gap-[92px] flex">
            <div className="text-slate-300 text-lg font-medium leading-[27px]">Phone number</div>
          </div>
        </div>
        <div className="w-[706px] justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 h-[51px] pr-3 py-3 border-b border-white justify-start items-center gap-[92px] flex">
            <div className="text-slate-300 text-lg font-medium leading-[27px]">Your chanel</div>
          </div>
        </div>
        <div className="w-[706px] h-[200px] pr-3 py-3 border-b border-white justify-start items-start gap-[92px] inline-flex">
          <div className="text-slate-300 text-lg font-medium leading-[27px]">How can i help you</div>
        </div>
        <CtaButton>Get in touch</CtaButton>
      </div>
    </div>
  );
};

export default FormContactSection;
