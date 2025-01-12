import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface RelatedProductCardProps {
  image: string;
  name: string;
  price: number;
}

export const RelatedProductCard = ({
  image,
  name,
  price,
}: RelatedProductCardProps) => {
  return (
    <div className="flex flex-col">
      <Image src={image} width={270} height={340} alt="Image" />
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-josefin text-[#151875]">
          {name}
        </p>
        <div className="flex items-center ">
          <Star color="#FFC416" fill="#FFC416" height={9.48} />
          <Star color="#FFC416" fill="#FFC416" height={9.48} />
          <Star color="#FFC416" fill="#FFC416" height={9.48} />
          <Star color="#FFC416" fill="#FFC416" height={9.48} />
          <Star color="#FFC416" fill="#FFC416" height={9.48} />
        </div>
      </div>

      <div className="mt-3">
        <p className="text-[13px] font-josefin text-[#151875] ">${price}</p>
      </div>
    </div>
  );
};
