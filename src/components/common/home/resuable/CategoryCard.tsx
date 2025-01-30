import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  image: string;
  name: string;
  price: string;
}

const CategoryCard = ({image,name,price}:CategoryCardProps) => {
   return (
     <div className="w-full max-w-[269px] h-auto mx-3 flex flex-col items-center">
       <div className="relative bg-[#F6F7FB] rounded-full px-10 py-10 md:px-14 md:py-14 lg:px-16 lg:py-16 shadow-sm group">
         <Image
           src={image}
           width={178}
           height={178}
           alt="Category Image"
           className="mx-auto"
         />
         <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[94px] h-[29px] bg-[#08D15F] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <p className="text-[12px] text-center text-[#FFFFFF]">View Shop</p>
         </button>
       </div>
       <div className="mt-4 text-center">
         <p className="font-josefin font-normal text-[#151875] text-[18px] md:text-[20px]">
           {name}
         </p>
         <p className="font-josefin font-normal text-[#151875] text-[14px] md:text-[16px] mt-2">
           {price}
         </p>
       </div>
     </div>
   );
};

export default CategoryCard;
