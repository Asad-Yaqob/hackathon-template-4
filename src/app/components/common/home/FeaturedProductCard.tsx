import React from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";
interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  code: string;
}

export function ProductCard({ image, name, price, code }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col items-center justify-center w-[270px] h-[361px] shadow-lg rounded ">
      <div className="flex items-center justify-center bg-[#F6F7FB]  w-[270px] h-[236px]">
        <img
          src={image}
          alt={name}
          className=" h-[179px] w-[178px] object-contain mb-4 "
        />

        <div className="absolute top-4 left-0 space-y-2 ps-3 opacity-0 group-hover:opacity-100 transition-opacity ">
          <button className="p-2 rounded-full  hover:bg-[#FB2E86] hover:text-white transition-colors ">
            <Heart size={20} />
          </button>
          <button className="p-2 rounded-full  hover:bg-[#FB2E86] hover:text-white transition-colors ms-2">
            <ShoppingCart size={20} />
          </button>
          <button className="p-2 rounded-full  hover:bg-[#FB2E86] hover:text-white transition-colors ms-2">
            <Search size={20} />
          </button>
        </div>

        <div className="group-hover:block bg-[#08D15F] w-[94px] h-[29px] absolute bottom-[120px] flex items-center justify-center p-2 rounded  hover:bg-[#06B14C] transition-all duration-300 hidden">
          <p className="text-white font-josefin text-[12px]">View Details</p>
        </div>
      </div>

      <div className="text-center py-3 text-[14px] font-lato space-y-1 group-hover:bg-[#2F1AC4] group-hover:text-white w-full ">
        <h3 className="text-[#FB2E86] font-josefin text-[18px] ">{name}</h3>
        {/* Sliding Dots */}
        <div className="flex justify-center space-x-2 mt-16 ">
          <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-full"></div>
          <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-full"></div>
          <div className="w-[14px] h-[4px] bg-[#00009D] rounded-full"></div>
        </div>
        <p className=" ">Code - {code}</p>
        <p className="font-semibold ">${price}</p>
      </div>
    </div>
  );
}
