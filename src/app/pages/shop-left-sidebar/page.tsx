import React from "react";
import TitleHeader from "@/components/common/header/TitleHeader";

import { SortAndFilter } from "@/components/common/shop/SortAntFilter";
import { SidebarFilterOption } from "@/components/common/shop/SidebarFilterOption";
import { ShopListCard } from "@/components/common/shop/ShopListCard";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";
import { fetchProducts } from "@/app/utils/helper/product_methods";
import { Product } from "@/types/product";

const ShopLeftSidebar = async () => {
  const products = await fetchProducts();
  return (
    <>
      <TitleHeader title="Shop Left Sidebar" />
      <div className="flex flex-col items-center mx-5">
        <SortAndFilter />
        <div className="flex  mt-4">
          <div>
            <SidebarFilterOption />
          </div>
          <div className="ms-16">
            {products.map((product: Product, index: number) => (
              <ShopListCard {...product} key={index} />
            ))}
          </div>
        </div>
        <BrandsHeader />
      </div>
    </>
  );
};

export default ShopLeftSidebar;
