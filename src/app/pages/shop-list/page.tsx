import React from "react";
import TitleHeader from "@/components/common/header/TitleHeader";
import { SortAndFilter } from "@/components/common/shop/SortAntFilter";
import { ShopListCard } from "@/components/common/shop/ShopListCard";
import { shopList } from "@/app/data/sample_data";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";

const ShopList = () => {
  return (
    <>
      <TitleHeader title="Shop List" />
      <div className="flex flex-col items-center justify-center">
        <SortAndFilter />
        {shopList.map((product, index) => (
          <ShopListCard
           {...product} key={index}
          />
        ))}
        <BrandsHeader />
      </div>
    </>
  );
};

export default ShopList;
