import React from "react";
import Container from "../common/container";

const Footer = () => {
  return (
    <footer className="bg-[#FF3EA5]  text-white py-10">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8  md:text-left">
          <div>
            <h2 className="font-bold text-xl mb-4">CONTACT US</h2>
            <p>hello@pureimagination.asia</p>
            <p>0928280899</p>
          </div>
          <div className="flex justify-center md:justify-start">
            {/* <img
              src="/path-to-your-logo.png"
              alt="Pure Imagination"
              className="h-16"
            /> */}
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">POWERED BY</h2>
            <p>Google</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">FOLLOW US</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center md:text-left">
          <div className="flex justify-center md:justify-between items-center flex-col md:flex-row">
            <div className="text-white text-center md:text-left">
              <h2 className="font-bold text-xl mb-4">PURE IMAGINATION</h2>
              <p>Headquarter: Pure Imagination Studio,</p>
              <p>
                395 Lac Long Quan Street, Nghia Do, Cau Giay District, HN City.
              </p>
            </div>
            <div className="text-center mt-4 md:mt-0">
              <p>Copyright © 2024 Pure Imagination Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center mt-12">
          <h1 className="text-5xl font-bold text-yellow-300 mb-2">DREAM BIG</h1>
          <h1 className="text-5xl font-bold text-yellow-500">EARN BIGGER</h1>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

