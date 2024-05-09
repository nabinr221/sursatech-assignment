import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  isActive?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  isActive,
}) => {
  return (
    <div className={` ${className} w-full h-full p-5 `}>
      <div
        className={`w-[14rem] h-[15rem] mx-auto ${
          isActive ? "zoom-effect" : ""
        }`}
      >
        <Image
          src={product.image}
          alt='product image'
          className={`w-full h-full object-contain object-center  `}
          width={300}
          height={300}
        />
      </div>
      {!isActive && (
        <div className='text-center mt-5 space-y-1 text-white'>
          <h1 className='text-base font-semibold capitalize line-clamp-2'>
            {product.name}
          </h1>
          <p className=''>${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
