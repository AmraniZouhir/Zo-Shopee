import React from "react";
import {  logoFuter, logoPayment } from "../assets";
import { FaGithub,FaFacebookF,FaYoutube ,FaTwitter,FaInstagram  } from "react-icons/fa";



export default function Foter() {
  return (
    <div className=" bg-black text-[#949494] py-20 font-TitelFont">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-7">
          <img className="w-32"  src={logoFuter}  alt="logo light" />
          <p className="text-white text-sm tracking-wide">© Z-shopee.com</p>
          <img className="w-56"  src={logoPayment}  alt="payment " />
          <div className="flex  gap-5 text-lg text-gray-400">
            <FaGithub className="hover:text-white duration-300 cursor-pointer"/>
            <FaYoutube  className="hover:text-white duration-300 cursor-pointer"/>
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer"/>
            <FaTwitter className="hover:text-white duration-300 cursor-pointer"/>
            <FaInstagram className="hover:text-white duration-300 cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}
