import React from "react";
import TitleHeader from "@/components/common/header/TitleHeader";

import { SortAndFilter } from "@/components/common/shop/SortAntFilter";
import { SidebarFilterOption } from "@/components/common/shop/SidebarFilterOption";
import { shopLeftList } from "@/app/data/sample_data";
import { ShopListCard } from "@/components/common/shop/ShopListCard";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";

const ShopLeftSidebar = () => {
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
            {shopLeftList.map((product, index) => (
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
