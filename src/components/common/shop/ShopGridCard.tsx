import { Product } from "@/types/product";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const ShopGridCard = ({
  _id,
  name,
  imageUrl,
  price,
  discountPercentage,
}: Product) => {
  return (
    <Link href={`/pages/product-detail/${_id}`}>
      <div className="group flex flex-col items-center w-full max-w-[270px] h-[363px] gap-3 mx-5 mb-16  transition-all duration-300">
        <div className="relative bg-[#F6F7FB] w-[270px] h-[280px] flex justify-center items-center">
          <Image src={imageUrl} alt="kamzor" width={169} height={169} />
          <div className="absolute left-4 bottom-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <button className="p-2 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white transition-colors">
              <Heart size={16} />
            </button>
            <button className="p-2 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white transition-colors">
              <ShoppingCart size={16} />
            </button>
            <button className="p-2 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>
        <div>
          <p className="text-[18px] text-[#151875] font-bold font-josefin">
            {name}
          </p>
          <div className="flex justify-center space-x-2 mb-2 mt-2">
            <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></div>
            <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm md:text-base font-medium">${price}</span>
            {discountPercentage > 0 && (
              <span className="text-[#FB2448] text-xs md:text-sm line-through">
                $
                {(parseFloat(price) / (1 - discountPercentage / 100)).toFixed(
                  2
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopGridCard;
