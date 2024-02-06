import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../Redux/Z-shopeeSlice";
import { ToastContainer, toast } from "react-toastify";

export default function DetailsProduct() {
  const despatche = useDispatch();
  const [ZshopeeQuantity, setZshopeeQuantity] = useState(1);
  const [prodactDetails, setProdactDetails] = useState({});
  const Location = useLocation();
  console.log(Location.state);
  useEffect(() => {
    setProdactDetails(Location.state.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[680px]  object-cover"
            src={prodactDetails.image}
          />
          <div className="absolute top-4 right-0">
            {prodactDetails.isNew && (
              <p className="bg-black text-white font-semibold font-TitelFont px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col gap-12 justify-center">
          <div>
            <h2 className="text-4xl font-semibold">{prodactDetails.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">
                ${prodactDetails.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${prodactDetails.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">
            {prodactDetails.description}
          </p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setZshopeeQuantity(
                      ZshopeeQuantity === 1 ? 1 : ZshopeeQuantity - 1
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{ZshopeeQuantity}</span>
                <button
                  onClick={() => setZshopeeQuantity(ZshopeeQuantity + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                despatche(
                  addToCart({
                    _id: prodactDetails._id,
                    image: prodactDetails.image,
                    title: prodactDetails.title,
                    price: prodactDetails.price,
                    description: prodactDetails.description,
                    quantity: ZshopeeQuantity,
                  })
                ) & toast.success(`${prodactDetails.title} is added`)
              }
              className="bg-black text-white py-3 px-3 active:bg-gray-800"
            >
              Add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            category :{" "}
            <span className="font-medium capitalize">
              {prodactDetails.category}
            </span>
          </p>
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
