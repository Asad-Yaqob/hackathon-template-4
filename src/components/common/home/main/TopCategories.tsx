import React from 'react'
import CategoryCard from '../resuable/CategoryCard';
import { categories } from '@/app/data/sample_data';

const TopCategories = () => {
 return (
   <>
     <div className="text-center mt-[100px] mb-[50px] md:mt-[150px] md:mb-[75px] lg:mt-[200px] lg:mb-[100px]">
       <h1 className="font-josefin text-[32px] md:text-[36px] lg:text-[42px] text-[#000000]">
         Top Categories
       </h1>
     </div>
     <div className="flex justify-center mb-[50px] md:mb-[75px] lg:mb-[100px]">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
         {categories.map((category, index) => (
           <CategoryCard {...category} key={index} />
         ))}
       </div>
     </div>
   </>
 );
}

export default TopCategories
