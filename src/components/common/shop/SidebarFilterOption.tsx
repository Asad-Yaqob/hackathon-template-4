import React from 'react'
import { SidebarFilter } from './SidebarFilter';
import { categoryItems, discountOffers, priceFilters, productBrands, ratingItems } from '@/app/data/sample_data';
import { FilterColor } from './FilterColor';

export const SidebarFilterOption = () => {
  return (
    <>
      <SidebarFilter
        filtersList={productBrands}
        title="Product Brand"
        bgColor="bg-[#E5E0FC]"
        borderColor="border-[#603EFF]"
        checkedBgColor="bg-[#603EFF]"
        checkmarkColor="bg-[#FFFFFF]"
        textColor="text-[#7E81A2]"
        isRating={true}
      />
      <SidebarFilter
        filtersList={discountOffers}
        title="Discount Offer"
        bgColor="bg-[#FFDBF1]"
        borderColor="border-[#FFDBF1]"
        checkedBgColor="bg-[#FF3EB2]"
        checkmarkColor="text-[#FF3EB2]"
        textColor="text-[#7E81A2]"
        isRating={true}
      />
      <SidebarFilter
        filtersList={ratingItems}
        title="Rating Item"
        bgColor="bg-[#FFF6DA]"
        borderColor="border-[#FFF6DA]"
        checkedBgColor="bg-[#FFCC2E]"
        checkmarkColor="text-[#FFCC2E]"
        textColor="text-[#7E81A2]"
        isRating={false}
      />
      <SidebarFilter
        filtersList={categoryItems}
        title="Categories"
        bgColor="bg-[#FFDBF1]"
        borderColor="border-[#FFDBF1]"
        checkedBgColor="bg-[#FF3EB2]"
        checkmarkColor="text-[#FF3EB2]"
        textColor="text-[#7E81A2]"
        isRating={true}
      />
      <SidebarFilter
        filtersList={priceFilters}
        title="Price Filter"
        bgColor="bg-[#FFDBF1]"
        borderColor="border-[#FFDBF1]"
        checkedBgColor="bg-[#FF3EB2]"
        checkmarkColor="text-[#FF3EB2]"
        textColor="text-[#7E81A2]"
        isRating={true}
      />
      <FilterColor />
    </>
  );
}


