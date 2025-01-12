import React from 'react'
import { Star } from 'lucide-react';

export const CustomeRatingItem = ({title}:{title:string}) => {
  return (
    <div className='flex items-center'>
      <div className="flex">
        <Star color="#FFA500" fill="#FFA500" height={13.25} />
        <Star color="#FFA500" fill="#FFA500" height={13.25} />
        <Star color="#FFA500" fill="#FFA500" height={13.25} />
        <Star color="#FFA500" fill="#FFA500" height={13.25} />
        <Star color="#9295AA" fill="#9295AA" height={13.25} />
      </div>
      <div>
        <span className="text-[12px] font-josefin my-1 font-normal text-[#000000]">
          {title}
        </span>
      </div>
    </div>
  );
}

 
