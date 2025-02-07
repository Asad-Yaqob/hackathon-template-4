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
      <div className="group flex flex-col items-center w-full max-w-[270px] h-[363px] gap-3 mx-3 transition-all duration-300">
        <div className="relative bg-[#F6F7FB] w-full h-[280px] flex justify-center items-center">
          <Image src={imageUrl} alt={name} width={169} height={169} />
          <div className="absolute left-4 bottom-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {[Heart, ShoppingCart, Search].map((Icon, i) => (
              <button
                key={i}
                className="p-2 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white transition-colors"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-[16px] sm:text-[18px] text-[#151875] font-bold">
            {name}
          </p>
          <div className="flex justify-center space-x-2 my-2">
            {["#DE9034", "#EC42A2", "#8568FF"].map((color, i) => (
              <div
                key={i}
                className="w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
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
