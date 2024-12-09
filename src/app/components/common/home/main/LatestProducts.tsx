"use client"
import React, { useState } from "react";
import { ProductTabs } from "../resuable/ProductTabs";
import { LatestProductCard } from "../resuable/LatestProductCard";
import { latestProducts } from "../../../../data/sample_data";
import { ShopexOffer } from "./ShopexOffer";

export function LatestProducts() {
  const tabs = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-16 px-4  mx-auto">
      <h2 className="text-[42px] text-[#151875] font-josefin font-bold text-center mb-8">
        Latest Products
      </h2>
      <ProductTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestProducts.map((product, index) => (
          <LatestProductCard key={index} {...product} />
        ))}
      </div>

      <div>
        <ShopexOffer />
      </div>
    </section>
  );
}
