import React from "react";
import { TrendingProductCard } from "./TrendingProductCard";
import { PromotionsGrid } from "./PromotionsGrid";
import { ExecutiveChairList } from "./ExecutiveChairList";

export function TrendingProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <TrendingProductCard />
      <TrendingProductCard />
      <TrendingProductCard />
      <TrendingProductCard />

      <div className="">
        <PromotionsGrid />
      </div>
      <div>
        <ExecutiveChairList />
      </div>
    </div>
  );
}
