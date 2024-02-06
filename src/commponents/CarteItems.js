import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import {
  DencreamentQuantity,
  IncreamentQuantity,
  deleteItems,
  resetCart,
} from "../Redux/Z-shopeeSlice";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function CarteItems() {
  const dispatche = useDispatch();
  const prodactData = useSelector((state) => state.ZshopeeSlic.prodactData);

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2>Shopping cart</h2>
      </div>
      <div>
        {prodactData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-3">
              <MdOutlineClose
                onClick={() =>
                  dispatche(deleteItems(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="image"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>

            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                  onClick={() =>
                    dispatche(
                      DencreamentQuantity({
                        _id: item._id,
                        image: item.image,
                        title: item.title,
                        price: item.price,
                        description: item.description,
                        quantity: 1,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  onClick={() =>
                    dispatche(
                      IncreamentQuantity({
                        _id: item._id,
                        image: item.image,
                        title: item.title,
                        price: item.price,
                        description: item.description,
                        quantity: 1,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </span>
              </div>
            </div>

            <p className="w-14 ">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatche(resetCart()) & toast.error("Your Cart is Empty !!")
        }
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
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
