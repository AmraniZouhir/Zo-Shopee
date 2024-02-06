import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImageProdact, imageprodactt } from "../assets";
import CarteItems from "../commponents/CarteItems";

export default function Carte() {
  const prodactData = useSelector((state) => state.ZshopeeSlic.prodactData);
  const [totalAmt,setTotalAmt] = useState("");

  useEffect(()=>{
    let price = 0;
    prodactData.map((item)=>{
      price += item.price * item.quantity
      return price

    });
    setTotalAmt(price.toFixed(2))
  })
  return (
    <div>
      <img
        className="w-full  h-60 object-cover"
        src={imageprodactt}
        alt="image"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CarteItems />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6"> 
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-TitelFont font-bold text-lg">$ {totalAmt}</span>
              <span></span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                ssssss ssss sssssss ssssssssss ssssssssssssssss ssssssssssssss ssssssss ssssssss
                sssss ssss ssss sssssssssss sssssssssssss sssssssssssssss
                sssss sssssss sssssss
              </span>
            </p>
          </div>
          <p className="font-TitelFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-100">proceed to checkout</button>
        </div>
      </div>
      
    </div>
  );
}
