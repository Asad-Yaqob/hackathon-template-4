import React from 'react'
import CategoryCard from '../resuable/CategoryCard';
import { categories } from '@/app/data/sample_data';

const TopCategories = () => {
  return (
    <>
      <div className="text-center mt-[200px] mb-[100px]">
        <h1 className="font-josefin text-[42px] text-[#000000]">
          Top Categories
        </h1>
      </div>
      <div className="flex items-center justify-center   mb-[100px]">
        <div className="mx-10 flex">
          {categories.map((category, index) => (
            <CategoryCard {...category} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopCategories
