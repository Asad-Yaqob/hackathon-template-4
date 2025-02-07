import { Product } from "@/types/product";
import { Heart, Search, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ShopListCard = ({
  _id,
  name,
  imageUrl,
  price,
  description,
  discountPercentage,
}: Product) => {
  return (
    <Link href={`/pages/product-detail/${_id}`} className="w-full">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl md:max-w-[1141px] gap-4 p-4 bg-white shadow-lg rounded-lg transition-transform hover:scale-105 mx-auto overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={313.63}
            height={217.56}
            className="object-cover w-full h-auto rounded-md"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/3 space-y-3 overflow-hidden">
          <div className="flex items-center space-x-3 flex-wrap">
            <p className="text-lg md:text-xl font-semibold text-[#111C85] truncate w-full md:w-auto">
              {name}
            </p>
            <div className="w-3 h-3 bg-[#DE9034] rounded-full"></div>
            <div className="w-3 h-3 bg-[#EC42A2] rounded-full"></div>
            <div className="w-3 h-3 bg-[#8568FF] rounded-full"></div>
          </div>

          {/* Price & Rating */}
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <span className="text-lg font-semibold text-[#111C85]">
                ${discountPercentage}
              </span>
              {price && (
                <span className="text-red-500 text-lg line-through ml-2">
                  ${price}
                </span>
              )}
            </div>
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} color="#FFA500" fill="#FFA500" size={16} />
              ))}
              <Star color="#9295AA" fill="#9295AA" size={16} />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-500 line-clamp-2 overflow-hidden">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap">
            <button className="p-3 rounded-full bg-gray-100 hover:bg-[#FB2E86] hover:text-white transition-all">
              <Heart size={18} />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-[#FB2E86] hover:text-white transition-all">
              <ShoppingCart size={18} />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-[#FB2E86] hover:text-white transition-all">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
