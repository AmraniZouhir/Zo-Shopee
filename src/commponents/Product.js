import React, { useState } from "react";
import ProdactCard from "./ProdactCard";

export default function Product({ products }) {
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // const filteredProducts = selectedCategory
  //   ? products.filter((item) => item.category === selectedCategory)
  //   : products;
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          At Z-shopee, we've redefined the art of purchasing. Experience the
          ease of finding and ordering your favorite products with just a few
          clicks. Our user-friendly interface ensures a smooth and stress-free
          shopping journey. Embrace the convenience of swift transactions,
          secure payments, and doorstep delivery. Elevate your shopping
          experience — it's simplicity and satisfaction, all in one place. Shop
          smarter, shop easier, shop at Z-shopee today!"
        </p>
        {/* <button onClick={() => setSelectedCategory("women")}>Women</button>
          <button onClick={() => setSelectedCategory("men")}>Men</button>
          <button onClick={() => setSelectedCategory(null)}>All</button> */}

      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProdactCard key={item.id} prodact={item}/>
        ))}
      </div>
    </div>
  );
}
