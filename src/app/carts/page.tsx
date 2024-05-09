"use client";

import CartCard from "@/components/card/cartCart/CartCard";
import React from "react";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartData = useSelector((state: any) => state.cart);
  console.log(cartData);
  return (
    <div className='my-5 space-y-2'>
      {cartData.length === 0 && <h1 className="text-center my-20 text-2xl font-bold text-white/40">Cart is empty</h1>}
      {cartData.map((cartData: any) => (
        <CartCard cartData={cartData} key={cartData.id} />
      ))}
    </div>
  );
};

export default AddToCart;
