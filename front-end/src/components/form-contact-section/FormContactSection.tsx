"use client";
import React, { useState } from "react";
import Container from "../common/container";
import emailjs from "emailjs-com";
import CtaButton from "@/components/common/cta-button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContactSection = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!email || !phoneNumber || !channel || !message || !name) {
      toast.error("Please fill out all fields.");
      return;
    }
    setIsSubmitting(true);
    const templateParams = {
      email,
      phone: phoneNumber,
      chanel: channel,
      message,
      name,
    };

    try {
      await emailjs.send("service_5en9z2y", "template_1pw8mkq", templateParams, "FgssFyOf00ue4XRgJ");
      setEmail("");
      setPhoneNumber("");
      setChannel("");
      setMessage("");
      setName("");
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-us" className="bg-[url('/Contact.png')] bg-cover bg-no-repeat w-full h-[700px] lg:h-[866px]">
      <Container>
        <form onSubmit={handleSubmit} className=" pt-8 lg:p-8 rounded-lg shadow-lg flex flex-col justify-center lg:justify-end lg:items-end gap-8">
          <div className="lg:w-[706px] lg:mt-[100px] h-[400px] lg:h-[606px] bg-opacity-75">
            <div className="self-stretch lg:mb-[32px]">
              <span className="text-white text-2xl lg:text-5xl font-extrabold lg:leading-[62.40px]">
                READY TO <br />
                USE YOUR{" "}
              </span>
              <span className="text-fuchsia-600 text-2xl lg:text-5xl font-extrabold lg:leading-[62.40px] gradient-text">IMAGINATION?</span>
            </div>
            <div className="flex flex-col lg:gap-y-[32px] gap-4 lg:w-full lg:mb-[32px]">
              <div className="flex flex-col lg:flex-row lg:gap-[32px] lg:w-full">
                <div className="flex flex-col lg:w-full">
                  <label htmlFor="Name" className="text-slate-300 text-lg font-medium leading-[27px] mb-2">
                    Name
                  </label>
                  <input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 border-b border-white bg-transparent text-white focus:outline-none" required />
                </div>
                <div className="flex flex-col lg:w-full">
                  <label htmlFor="email" className="text-white text-lg font-medium leading-[27px] mb-2">
                    Email
                  </label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 border-b border-white bg-transparent text-white focus:outline-none" required />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-[32px] lg:w-full">
                <div className="flex flex-col lg:w-full">
                  <label htmlFor="email" className="text-white text-lg font-medium leading-[27px] mb-2">
                    Channel link
                  </label>
                  <input
                    type="chanel"
                    id="chanel"
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    className="p-3 border-b border-white bg-transparent text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col lg:w-full">
                  <label htmlFor="phone" className="text-slate-300 text-lg font-medium leading-[27px] mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="p-3 border-b border-white bg-transparent text-white focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-slate-300 text-lg font-medium leading-[27px] mb-2">
                  How can we help you?
                </label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="p-3 border-b border-white bg-transparent text-white focus:outline-none" required />
              </div>
            </div>
            <CtaButton classNameContainer="mt-6" type="submit">
              Submit Contact
            </CtaButton>
          </div>
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default FormContactSection;
