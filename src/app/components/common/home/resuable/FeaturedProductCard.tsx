import React from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  code?: string;
  isFeature?: boolean;
}

export function ProductCard({
  image,
  name,
  price,
  code,
  isFeature,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col items-center justify-between w-[270px] h-[400px] shadow-lg rounded overflow-hidden">
      {/* Image Section */}
      <div className="flex items-center justify-center bg-[#F6F7FB] w-full h-[236px]">
        <Image
          src={image}
          alt={name}
          width={179}
          height={178}
          className="h-[179px] w-[178px] object-contain"
        />

        {/* Feature Buttons */}
        {isFeature && (
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity space-y-2">
            <button className="p-2 rounded-full hover:bg-[#FB2E86] hover:text-white transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-[#FB2E86] hover:text-white transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-[#FB2E86] hover:text-white transition-colors">
              <Search size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="text-center py-3 text-[14px] font-lato space-y-1 w-full group-hover:bg-[#2F1AC4] group-hover:text-white transition-colors">
        <h3 className="text-[#FB2E86] font-josefin text-[18px]">{name}</h3>

        {/* Feature-specific Content */}
        {isFeature && (
          <div className="space-y-2">
            <div className="flex justify-center space-x-2">
              <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-full"></div>
              <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-full"></div>
              <div className="w-[14px] h-[4px] bg-[#00009D] rounded-full"></div>
            </div>
            <p className="text-[12px]">Code - {code}</p>
          </div>
        )}

        {/* Price Section */}
        <p className="font-semibold text-lg">${price}</p>
      </div>

      {/* View Details Button */}
      {isFeature && (
        <div className="hidden group-hover:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08D15F] w-[94px] h-[29px] items-center justify-center rounded hover:bg-[#06B14C] transition-all duration-300">
          <p className="text-white font-josefin text-[12px]">View Details</p>
        </div>
      )}
    </div>
  );
}
