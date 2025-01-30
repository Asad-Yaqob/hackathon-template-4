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
     <div className="w-full max-w-sm shadow-lg mx-auto sm:mx-4 md:mx-6 lg:mx-8">
       <Image
         src={image}
         width={370}
         height={255}
         alt="Image Blog"
         className="h-64 w-full rounded object-cover"
       />
       <div className="p-5">
         <div className="flex gap-5 text-sm">
           <div className="flex gap-2 items-center">
             <FaPenNib color="#FB2E86" size={14} />
             <span className="text-[#151875] font-medium">{writerName}</span>
           </div>
           <div className="flex gap-2 items-center">
             <CalendarDays color="#FB2E86" size={14} />
             <span className="text-[#151875] font-medium">{date}</span>
           </div>
         </div>

         <h1
           className={`text-lg font-bold mt-4 ${
             isActive ? "text-[#FB2E86]" : "text-[#72718F]"
           }`}
         >
           {name}
         </h1>

         <p className="text-base text-[#72718F] mt-4">{description}</p>

         <div className="mt-4">
           <p
             className={`text-base font-medium underline cursor-pointer ${
               isActive ? "text-[#FB2E86]" : "text-[#151875]"
             }`}
           >
             Read More
           </p>
         </div>
       </div>
     </div>
   );
}
