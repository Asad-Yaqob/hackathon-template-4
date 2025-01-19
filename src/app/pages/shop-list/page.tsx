import React from "react";
import TitleHeader from "@/components/common/header/TitleHeader";

import { SortAndFilter } from "@/components/common/shop/SortAntFilter";
import { ShopListCard } from "@/components/common/shop/ShopListCard";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";
import { Product } from "@/types/product";
import { getProducts } from "@/app/utils/helper/product_methods";

const ShopList = async () => {
  const products = await getProducts();
  return (
    <>
      <TitleHeader title="Shop List" />
      <div className="flex flex-col items-center justify-center">
        <SortAndFilter />
        {products.map((product:Product, index: number) => (
          <ShopListCard {...product} key={index} />
        ))}
        <BrandsHeader />
      </div>
    </>
  );
};

export default ShopList;
