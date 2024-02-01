import React from "react";
import { logoFuter, logoPayment } from "../assets";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaGithub,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaPaypal ,
  FaHome 
} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";


export default function Foter() {
  return (
    <div className=" bg-black text-[#949494] py-20 font-TitelFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoFuter} alt="logo light" />
          <p className="text-white text-sm tracking-wide">© Z-shopee.com</p>
          <img className="w-56" src={logoPayment} alt="payment " />
          <div className="flex  gap-5 text-lg text-gray-400">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
          <p>ouarzazate HAY ESSALAM EL JADIDA</p>
          <p>Mobile: +212 695150242</p>
          <p>Phone: +212 695150242</p>
          <p>e-mail: zouhiramrani397@gmail.com</p>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><IoMdPerson/></span> my account</p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><FaPaypal /></span> checkout</p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><FaHome /></span> order tracking</p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><FaLocationDot/></span>help & support</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input className="bg-transparent border px-4  py-2 text-sm" placeholder="e-mail" type="text"/>
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>

      </div>
    </div>
  );
}
