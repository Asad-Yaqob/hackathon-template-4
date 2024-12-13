"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Sortableproducts as initialProducts } from "../data/sample_data";

export default function ProductGrid() {
  const [sortOption, setSortOption] = useState("Best Match");
  const [perPage, setPerPage] = useState(12);
  const [view, setView] = useState("grid");

  // Sorting logic
  const sortedProducts = [...initialProducts].sort((a, b) => {
    switch (sortOption) {
      case "Price: Low to High":
        return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
      case "Price: High to Low":
        return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
      case "Newest First":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    (<section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-24 pt-24">
        {/* Sorting and Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex flex-col mb-4 lg:mb-0">
            <h2 className="josefin text-2xl font-bold text-[#151875] mr-4">
              Ecommerce Accessories & Fashion Item
            </h2>
            <span className="lato text-[#8A8FB9] text-sm">
              About 9,620 results (0.62 seconds)
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Per Page Input */}
            <div className="flex items-center">
              <label htmlFor="perPage" className="text-[#3F509E] mr-2 font-medium">
                Per Page:
              </label>
              <input
                id="perPage"
                type="number"
                className="w-16 border border-[#E7E6EF] text-[#8A8FB9] rounded p-1 focus:outline-none"
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                min={1}
                max={initialProducts.length}
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center">
              <label htmlFor="sortBy" className="text-[#3F509E] mr-2 font-medium">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="border border-[#E7E6EF] text-[#8A8FB9] rounded p-2 focus:outline-none"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            {/* View Toggle Buttons */}
            <div className="flex items-center">
              <span className="text-[#3F509E] mr-2 font-medium">View:</span>
              <button className={`mr-2 ${view === "grid" ? "text-blue-500" : ""}`} onClick={() => setView("grid")}>
                <Image
                  src="/images/products/grid-view.png"
                  alt="Grid View"
                  width={20}
                  height={20}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </button>
              <button className={`${view === "list" ? "text-blue-500" : ""}`} onClick={() => setView("list")}>
                <Image
                  src="/images/products/solid-list.png"
                  alt="List View"
                  width={20}
                  height={20}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </button>
              <input
                id="perPage"
                type="number"
                className="w-32 border ml-4 border-[#E7E6EF] text-[#8A8FB9] rounded p-1 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" : "grid-cols-1 gap-4"}`}>
          {sortedProducts.slice(0, perPage).map((product) => (
            <div
            key={product.id}
            className="group flex flex-col justify-center items-center bg-white overflow-hidden p-2"
          >
            <div className="relative h-64 w-full">
              {/* Image with hover effect */}
              <Image
                src={product.image}
                alt={product.name}
                className="object-contain p-8 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] transition-all duration-300"
                fill
                sizes="100vw" />
          
              {/* Icons to appear on hover */}
              <div className="absolute bottom-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-transparent rounded-full hover:bg-white">
                  <Image
                    src="/images/products/cart.png"
                    alt="Favorite"
                    width={16}
                    height={16}
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </button>
                <button className="p-2 bg-transparent rounded-full hover:bg-white">
                  <Image
                    src="/images/products/search-plus1.png"
                    alt="View"
                    width={16}
                    height={16}
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </button>
                <button className="p-2 bg-transparent rounded-full hover:bg-white">
                  <Image
                    src="/images/products/heart.png"
                    alt="Add to Cart"
                    width={16}
                    height={16}
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </button>
              </div>
            </div>
          
            {/* Product details */}
            <div className="p-4 flex flex-col gap-2 text-center w-full">
              <h3 className="josefin font-semibold text-[#151875]">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-[#DE9034]"></div>
                <div className="h-3 w-3 rounded-full bg-[#EC42A2]"></div>
                <div className="h-3 w-3 rounded-full bg-[#8568FF]"></div>
              </div>
              <div className="josefin flex justify-center items-center gap-2">
                <span className="text-[#151875] font-bold">{product.price}</span>
                <span className="text-[#FB2E86] line-through">{product.oldPrice}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>)
  );
}
