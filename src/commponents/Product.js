import React from "react";
import ProdactCard from "./ProdactCard";

export default function Product() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          At Z-shopee, we've redefined the art of purchasing.
          Experience the ease of finding and ordering your favorite products
          with just a few clicks. Our user-friendly interface ensures a smooth
          and stress-free shopping journey. Embrace the convenience of swift
          transactions, secure payments, and doorstep delivery. Elevate your
          shopping experience — it's simplicity and satisfaction, all in one
          place. Shop smarter, shop easier, shop at Z-shopee today!"
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProdactCard/>
      </div>
    </div>
  );
}
