import React from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";
import Image from "next/image";

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
    <div className="group relative w-full max-w-[360px] h-auto">
      <div className="bg-[#F6F7FB] rounded-lg p-4 md:p-6 lg:p-8 transition-all duration-300">
        <div className="relative aspect-square flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={223}
            height={229}
            className="object-contain w-full h-full max-w-[223px] max-h-[229px] transition-transform duration-300 group-hover:scale-95"
          />
          <div className="absolute right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <button className="p-2 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white transition-colors">
              <Heart size={18} />
            </button>
            <button className="p-2 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white transition-colors">
              <ShoppingCart size={18} />
            </button>
            <button className="p-2 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white transition-colors">
              <Search size={18} />
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
    </div>
  );
}
