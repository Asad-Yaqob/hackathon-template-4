import TitleHeader from "@/components/common/header/TitleHeader";
import { SortAndFilter } from "@/components/common/shop/SortAntFilter";
import React from "react";

const ShopLeftSidebar = () => {
  return (
    <>
      <TitleHeader title="Shop Left Sidebar" />
      <div className="flex items-center justify-center">
        <SortAndFilter />
      </div>
    </>
  );
};

export default ShopLeftSidebar;
