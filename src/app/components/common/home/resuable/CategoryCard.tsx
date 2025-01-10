import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  image: string;
  name: string;
  price: string;
}

const CategoryCard = ({image,name,price}:CategoryCardProps) => {
  return (
    <div className="w-full max-w-[269px] h-[345px] mx-3">
      <div className="relative bg-[#F6F7FB] rounded-full px-16 py-16 shadow-sm group">
        <Image src={image} width={178} height={178} alt="Category Image" />
        <button className="absolute bottom-6 right-[90px] w-full max-w-[94px] h-[29px] bg-[#08D15F] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[12px] text-center text-[#FFFFFF]">View Shop</p>
        </button>
      </div>
      <div className="mt-5 text-center">
        <p className="font-josefin font-normal text-[#151875] text-[20px]">
          {name}
        </p>
        <p className="font-josefin font-normal text-[#151875] text-[16px] mt-[16px]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
