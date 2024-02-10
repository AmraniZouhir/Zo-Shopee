import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImageProdact, imageprodactt } from "../assets";
import CarteItems from "../commponents/CarteItems";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";


export default function Carte() {
  const prodactData = useSelector((state) => state.ZshopeeSlic.prodactData);
  const userInfo = useSelector((state) => state.ZshopeeSlic.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    prodactData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price.toFixed(2));
  }, [prodactData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign in to checkout");
    }
  };

  const handlePayment = async (token) => {
    try {
      // Send the token and other information to the server
      const response = await fetch('http://localhost:3001/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          amount: totalAmt,
          email: userInfo.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Payment success logic
        console.log('Payment successful!', result.charge);
      } else {
        // Handle payment failure
        console.error('Payment failed:', result.error);
      }
    } catch (error) {
      console.error('An error occurred during payment processing:', error);
    }
    toast.success('Payment successful!');

  };
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
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
              <span className="font-TitelFont font-bold text-lg">
                $ {totalAmt}
              </span>
              <span></span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                ssssss ssss sssssss ssssssssss ssssssssssssssss ssssssssssssss
                ssssssss ssssssss sssss ssss ssss sssssssssss sssssssssssss
                sssssssssssssss sssss sssssss sssssss
              </span>
            </p>
          </div>
          <p className="font-TitelFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-100"
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                token={handlePayment}
                stripeKey="pk_test_51OhtyxGZFYUu1l1uyikGUIJbzlh04ByNRCoiCpZz45fdu97P1r0tLs9fLIRvXjL5KOyTJCd98Q5bfTgDBkmmVJfC00aBzPHvmj"
                name="Z-shopee Online Shopping"
                amount={parseFloat(totalAmt) * 100}
                label="Pay to Z-shopee"
                description={`Your Payment amount is $${totalAmt}`}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
