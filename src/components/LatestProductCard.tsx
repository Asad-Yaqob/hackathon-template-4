import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  isOnSale?: boolean; // Add this prop
}

export function LatestProductCard({
  image,
  name,
  price,
  originalPrice,
  isOnSale, // Destructure the new prop
}: ProductCardProps) {
  return (
    (<div className="group relative w-full max-w-[370px] h-auto">
      <div className="bg-[#F6F7FB] rounded-lg p-4 md:p-6 lg:p-8 transition-all duration-300">
        <div className="relative aspect-square flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
          {/* Conditionally render the sale image */}
          {isOnSale && (
            <Image
              src={'/images/products/sale.png'}
              alt="Sale"
              width={223}
              height={229}
              className="absolute top-10 -left-7 object-contain max-w-[100px] max-h-[100px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          )}

          <Image
            src={image}
            alt={name}
            width={223}
            height={229}
            className="object-contain w-full h-full max-w-[223px] max-h-[229px]"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <div className="absolute right-[258px] top-52 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <button className="p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors">
              <Image
                src={'/images/products/Shopping-cart.png'}
                width={18}
                height={18}
                alt="Shopping Cart logo"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </button>
            <button className="p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors">
              <Image
                src={'/images/products/Dark-blue-heart.png'}
                width={18}
                height={18}
                alt="Shopping Cart logo"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </button>
            <button className="p-2 rounded-full bg-[#F6F7FB] shadow-md hover:bg-[#EEEFFB] flex justify-center items-center hover:text-white transition-colors">
              <Image
                src={'/images/products/Dark-blue-search-plus.png'}
                width={18}
                height={18}
                alt="Shopping Cart logo"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 space-y-2 font-josefin">
        <h3 className="text-[#151875] text-sm md:text-base hover:text-[#FB2E86] transition-colors cursor-pointer">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base font-medium">${price}</span>
          {originalPrice && (
            <span className="text-[#FB2448] text-xs md:text-sm line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>)
  );
}
