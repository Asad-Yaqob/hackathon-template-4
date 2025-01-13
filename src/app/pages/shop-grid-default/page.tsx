import React from "react";
import ShopGridCard from "@/components/common/shop/ShopGridCard";
import TitleHeader from "@/components/common/header/TitleHeader";

import { shopGridProducts } from "@/app/data/sample_data";
import { SortAndFilter } from "@/components/common/shop/SortAntFilter";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";

const ShopGirdDefault = () => {
  return (
    <>
      <TitleHeader title="Shop Grid Default" />
      <div className="flex flex-col items-center justify-center">
        <SortAndFilter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shopGridProducts.map((product, index) => (
            <ShopGridCard {...product} key={index} />
          ))}
        </div>
        <BrandsHeader />
      </div>
    </>
  );
};

export default ShopGirdDefault;
