"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductCard from "@/components/card/productCard/ProductCard";
import useFetchData from "@/hooks/useFetchData";
import { LuPlus } from "react-icons/lu";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useDispatch } from "react-redux";

// to deploy to vercel import form data.js file
import { products as data } from "@/data/data";
interface Product {
  id: any;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // custom hooks for fetching data
  const { data: products } = useFetchData("products");

  useEffect(() => {
    if (products && products.length > 0) {
      setActiveProduct(products[0]); // Set the active product to the first product initially
      setActiveProduct(products[activeIndex]); // Set the active product based on activeIndex
    }
  }, [activeIndex, products]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    afterChange: (index: number) => setActiveIndex(index), // Update activeIndex state
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjusted breakpoint
        settings: {
          slidesToShow: 2, // Show 2 items on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 item on even smaller screens
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className='w-full h-full mt-10 relative'>
      <Slider {...settings} className=''>
        {products && products.length > 0
          ? /* data fetch from data.json server  for development  */
            data?.map((product: Product, index: number) => (
              <ProductCard
                key={product.id}
                product={product}
                isActive={index === activeIndex}
              />
            ))
          : /* data  import from data.ts file for deploy  */
            data?.map((product: Product, index: number) => (
              <ProductCard
                key={product.id}
                product={product}
                isActive={index === activeIndex}
              />
            ))}
      </Slider>
      {activeProduct && <ProductInfo activeProduct={activeProduct} />}
    </div>
  );
};

interface ProductInfoProps {
  activeProduct: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ activeProduct }) => {
  const dispatch = useDispatch();
  const addData = () => {
    dispatch(addToCart({ product: activeProduct }));
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-fit px-6 py-3 absolute -bottom-16 sm:-bottom-12 bg-slate-300 backdrop-blur-2xl flex gap-5 items-center justify-center rounded-full'>
        <div className='flex-1 text-white brightness-50'>
          <p>{activeProduct.name}</p>
          <p className='text-lg font-bold'>${activeProduct.price}</p>
        </div>
        <button
          onClick={addData}
          className='w-fit  py-2 px-3 bg-white capitalize text-xs font-semibold flex gap-2 items-center justify-center rounded-full'
        >
          <LuPlus className='hidden sm:block' />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
