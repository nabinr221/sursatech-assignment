"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "@/lib/features/cart/cartSlice";
import { RootState } from "@/lib/store";
import CartCard from "@/components/card/cartCart/CartCard";

const AddToCart: React.FC = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  // Calculate total price using reduce
  const totalPrice = cartData.reduce((acc: number, cartItem: any) => {
    // Multiply price by quantity for each cart item and add to accumulator
    return acc + cartItem.product.price * cartItem.quantity;
  }, 0);

  const handleCheckOut = () => {
    console.log("handleCheckOut");
    dispatch(checkout());
    router.push("/");
  };

  return (
    <div className='my-5 '>
      <div className=' space-y-2'>
        {cartData.length === 0 && (
          <h1 className='text-center my-20 text-2xl font-bold text-white/40'>
            Cart is empty
          </h1>
        )}
        {cartData.map((cartItem: any) => (
          <CartCard cartData={cartItem} key={cartItem.id} />
        ))}
      </div>

      {totalPrice > 0 && (
        <div className='w-fit mt-10 space-y-2 bg-white/30 backdrop-blur-md  p-5 rounded-2xl'>
          <h1 className='capitalize font-bold'>
            total items:<span className='ms-2'>{cartData.length}</span>
          </h1>
          <h1 className='capitalize font-bold'>
            total price:<span className='ms-2'>${totalPrice}</span>
          </h1>
          <button
            onClick={handleCheckOut}
            className='p-2 bg-white text-sm font-semibold rounded-md mt-5'
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
