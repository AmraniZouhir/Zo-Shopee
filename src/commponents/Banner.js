import React, { useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";

export default function Banner() {
  const [currentSlaider, setCurrentSlaider] = useState(0);
  const Data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const privSlider = () => {
    setCurrentSlaider(currentSlaider === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlider = () => {
    setCurrentSlaider(currentSlaider === 3 ? 0 : (prev) => prev + 1);
  };

  // console.log(currentSlaider);
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-full relative">
        <div style={{transform: `translateX(-${currentSlaider * 100}vw)`}}
         className="w-[500vw] h-full flex transition-transform duration-1000">
          <img
            src={Data[0]}
            alt="imageOne"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={Data[2]}
            alt="imageOne"
            className="w-screen h-full object-cover"
          />
          <img
            src={Data[3]}
            alt="imageOne"
            className="w-screen h-full object-cover"
          />
          <img
            src={Data[1]}
            alt="imageOne"
            className="w-screen h-full object-cover"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={privSlider}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <MdOutlineChevronLeft />
          </div>
          <div
            onClick={nextSlider}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <MdOutlineChevronRight />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
