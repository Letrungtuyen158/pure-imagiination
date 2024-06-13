"use client";
import CtaButton from "@/components/common/cta-button";
import React, { useState } from "react";
import Container from "../common/container";

const FormContactSection = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, phoneNumber, channel, message });
  };

  return (
    <div id="contact-us" className="bg-[url('/Contact.png')] bg-cover bg-no-repeat w-full h-[433px] lg:h-[866px]">
      <Container>
        <form onSubmit={handleSubmit} className="bg-black bg-opacity-75 p-8 rounded-lg shadow-lg w-full">
          <div className="flex flex-col justify-start items-start gap-8">
            <div className="self-stretch">
              <span className="text-white text-5xl font-extrabold leading-[62.40px]">
                READY TO <br />
                USE YOUR{" "}
              </span>
              <span className="text-fuchsia-600 text-5xl font-extrabold leading-[62.40px]">IMAGINATION?</span>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white text-lg font-medium leading-[27px] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 border-b border-fuchsia-600 bg-transparent text-white focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="text-slate-300 text-lg font-medium leading-[27px] mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="p-3 border-b border-white bg-transparent text-white focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="channel" className="text-slate-300 text-lg font-medium leading-[27px] mb-2">
                  Your channel
                </label>
                <input
                  type="text"
                  id="channel"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="p-3 border-b border-white bg-transparent text-white focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-slate-300 text-lg font-medium leading-[27px] mb-2">
                  How can I help you
                </label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="p-3 border-b border-white bg-transparent text-white focus:outline-none" required />
              </div>
            </div>
            <CtaButton>Get in touch</CtaButton>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default FormContactSection;
