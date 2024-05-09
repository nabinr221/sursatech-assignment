"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductCard from "@/components/card/productCard/ProductCard";
import useFetchData from "@/hooks/useFetchData";
import { LuPlus } from "react-icons/lu";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetchData<Product[]>("products");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (products && products.length > 0) {
      setActiveProduct(products[0]); // Set the active product to the first product initially
      setActiveProduct(products[activeIndex]); // Set the active product based on activeIndex
    }
  }, [activeIndex, products]);

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    afterChange: (index: number) => setActiveIndex(index), // Update activeIndex state
  };

  return (
    <div className='w-full h-full mt-10 relative'>
      <Slider {...settings} className=''>
        {products?.map((product, index) => (
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
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-fit px-6 py-3 absolute -bottom-12 bg-slate-300 backdrop-blur-2xl flex gap-5 items-center justify-center rounded-full'>
        <div className='text-white brightness-50'>
          <p>{activeProduct.name}</p>
          <p className='text-lg font-bold'>${activeProduct.price}</p>
        </div>
        <button className='w-fit py-2 px-3 bg-white capitalize text-xs font-semibold flex gap-2 items-center justify-center rounded-full'>
          <LuPlus />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
