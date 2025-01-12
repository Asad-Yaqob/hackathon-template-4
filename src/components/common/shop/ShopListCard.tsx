import { Heart, Search, ShoppingCart, Star,} from "lucide-react";
import Image from "next/image";
import React from "react";

interface ShopListCardProps {
  image: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
}

export const ShopListCard = ({
  image,
  title,
  originalPrice,
  discountedPrice,
  description,
}: ShopListCardProps) => {
  return (
    <div className="flex items-center w-full max-w-[1141px] h-[254px] gap-3 mx-5 mb-16">
      <div>
        <Image src={image} alt="kamzor" width={313.63} height={217.56} className="object-cover" />
      </div>
      <div className="ms-5">
        <div className="flex justify-start items-center space-x-2 mb-2 mt-2 ">
          <p className="text-[19.88px] text-[#111C85] font-josefin me-4">
            {title}
          </p>
          <div className="w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full"></div>
          <div className="w-[12.15px] h-[12.15px] bg-[#EC42A2] rounded-full"></div>
          <div className="w-[12.15px] h-[12.15px] bg-[#8568FF] rounded-full"></div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div>
            <span className="text-[15.46px] font-josefin text-[#111C85] me-3">
              ${discountedPrice}
            </span>
            {originalPrice && (
              <span className="text-[#FF2AAA] text-[15.46px] font-josefin line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <div className="flex ms-6">
            <Star color="#FFA500" fill="#FFA500" height={13.25} />
            <Star color="#FFA500" fill="#FFA500" height={13.25} />
            <Star color="#FFA500" fill="#FFA500" height={13.25} />
            <Star color="#FFA500" fill="#FFA500" height={13.25} />
            <Star color="#9295AA" fill="#9295AA" height={13.25} />
          </div>
        </div>
        <div className="w-full max-w-[591.93px] h-[46.38px] mb-5">
          <p className="text-[17.67px] font-lato text-[#9295AA]">
            {description}
          </p>
        </div>
        <div className=" flex  gap-2">
          <button className="p-2 rounded-full bg-white hover:bg-[#FB2E86] hover:text-white transition-colors">
            <Heart size={15.3} />
          </button>
          <button className="p-2 rounded-full bg-white hover:bg-[#FB2E86] hover:text-white transition-colors">
            <ShoppingCart size={15.3} />
          </button>
          <button className="p-2 rounded-full bg-white hover:bg-[#FB2E86] hover:text-white transition-colors">
            <Search size={15.3} />
          </button>
        </div>
      </div>
    </div>
  );
};
