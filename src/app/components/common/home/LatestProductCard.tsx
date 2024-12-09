import React from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
}

export function LatestProductCard({
  image,
  name,
  price,
  originalPrice,
}: ProductCardProps) {
  return (
    <div className="group relative w-[360px] h-[306px]">
      <div className="bg-[#F6F7FB] rounded-lg p-8 transition-all duration-300 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-[223px] h-[229px] object-contain mb-4 md:w-[123px] md:h-[123px] "
        />
        <div className="flex flex-col absolute bottom-[90px] md:bottom-[120px] left-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className=" p-2 rounded-full ">
            <Heart size={20} />
          </button>
          <button className=" p-2 rounded-full ">
            <ShoppingCart size={20} />
          </button>
          <button className=" p-2 rounded-full ">
            <Search size={20} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 space-y-1 font-josefin">
        <h3 className="text-[#151875] text-[16px] underline decoration-[#EEEFFB] ">
          {name}
        </h3>
        <div className="flex justify-center gap-2">
          <span className="text-[14px]">${price}</span>
          {originalPrice && (
            <span className="text-[#FB2448] text-[12px] line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
