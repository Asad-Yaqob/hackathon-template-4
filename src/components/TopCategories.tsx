import React from "react";
import { categories } from "./data/sample_data";
import Image from "next/image";

export default function TopCategories() {
  return (
    (<section className="py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="font-josefin text-3xl sm:text-4xl font-bold text-[#151875] mb-8">
          Top Categories
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative group w-[250px] sm:w-[250px] h-[420px] sm:h-[440px] flex flex-col gap-2 items-center justify-center transition-all`}
            >
              {/* Product Image */}
              <Image
                src={category.image}
                alt={category.name}
                width={1000}
                height={1000}
                className="w-[120px] h-[120px] sm:w-[250px] sm:h-[250px] object-contain p-12 bg-[#F6F7FB] rounded-full transition-all group-hover:shadow-[-5px_5px_0px_#9877E7]"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />

              {/* Product Name and Price */}
              <div className="text-center font-josefin mt-2">
                <h3 className="text-[#151875] text-base sm:text-lg font-semibold">
                  {category.name}
                </h3>
                <p className="text-[#151875] text-sm">{category.price}</p>
              </div>

              {/* View Shop Button */}
              <button className="absolute bottom-[145px] opacity-0 group-hover:opacity-100 bg-[#08D15F] text-white px-4 py-1 rounded shadow-md text-sm hover:bg-[#06A94D] transition-all">
                View Shop
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-[#FB2E86]"></span>
          <span className="w-3 h-3 rounded-full bg-[#FB2E86] flex justify-center items-center"><div className="w-2 h-2 rounded-full bg-white"></div></span>
          <span className="w-3 h-3 rounded-full bg-[#FB2E86] flex justify-center items-center"><div className="w-2 h-2 rounded-full bg-white"></div></span>
        </div>
      </div>
    </section>)
  );
}
