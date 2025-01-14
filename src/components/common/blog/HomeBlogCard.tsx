import React from 'react'
import Image from 'next/image'

import { CalendarDays } from 'lucide-react'
import { FaPenNib } from 'react-icons/fa6'

interface HomeBlogCardProps {
    image:string; 
    writerName:string;
    date:string;
     name:string;
      description:string;
      isActive: boolean;
}

export const HomeBlogCard = ({image, writerName, date, name, description, isActive}:HomeBlogCardProps) => {
  return (
    <div className="w-[370px] shadow mx-5">
    <Image
      src={image}
      width={370}
      height={255}
      alt="Image Blog"
      className="h-[255px] w-full rounded"
    />
    <div className="p-5">
      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
          <FaPenNib color="#FB2E86" width={11.33} height={11.33} />
          <span className="text-[14px] text-[#151875] font-josefin">{writerName}</span>
        </div>
        <div className="flex gap-2 items-center">
          <CalendarDays color="#FB2E86" width={11.33} height={11.33} />
          <span className="text-[14px] text-[#151875] font-josefin">{date}</span>
        </div>
      </div>

      <h1 className={`font-josefin text-[18px] ${
    isActive ? "text-[#FB2E86]" : "text-[#72718F]"
  } mt-8`}>
       {name}
      </h1>

      <p className="font-lato font-normal text-[16px] text-[#72718F] mt-8">
      {description}
      </p>

      <div className="mt-8">
        <p className={`font-lato font-normal text-[16px] ${
    isActive ? "text-[#FB2E86]" : "text-[#151875]"
  } underline`}>
          Read More
        </p>
      </div>
    </div>
  </div>
  )
}
