import React from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/lib/features/cart/cartSlice";

const CartCard = ({ cartData }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    if (!cartData) return;
    dispatch(removeFromCart({ id: cartData?.id }));
  };

  return (
    <div className='px-5 w-full flex flex-col sm:flex-row justify-between  items-center gap-5 p-3 h-full bg-white/50 rounded-lg backdrop-blur-3xl transition-all duration-500 hover:bg-white/75'>
      <div
        className={`w-[5rem] h-[5rem] ${
          cartData?.product?.image ? "" : "bg-white/80 rounded-lg  "
        }`}
      >
        <Image
          src={
            cartData?.product?.image
              ? cartData?.product?.image
              : "/products/default-img.png"
          }
          className='w-full h-full object-contain object-center'
          alt='Product Image'
          width={300}
          height={300}
        />
      </div>
      <div className='w-[80%] flex justify-around gap-5 items-center  '>
        {cartData?.product?.name && (
          <h1 className='sm:w-[20rem] text-sm font-bold capitalize gap-2'>
            {cartData?.product?.name}
          </h1>
        )}
        {cartData?.product?.price && (
          <p className='text-sm font-medium'>${cartData?.product?.price}</p>
        )}
        {cartData?.quantity && (
          <p className='text-sm font-medium'>Qty: {cartData?.quantity}</p>
        )}
        {cartData?.quantity && (
          <p className='text-sm font-medium'>
            {cartData?.quantity * cartData?.product?.price}
          </p>
        )}
      </div>
      <div
        onClick={handleRemoveItem}
        className='w-fit bg-white/50  flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-white/95 rounded-full p-1.5  '
      >
        <IoClose className='text-2xl' color='black' />
      </div>
    </div>
  );
};

export default CartCard;
