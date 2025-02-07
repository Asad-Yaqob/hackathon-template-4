import Image from "next/image";
import React from "react";

export const BrandsHeader = () => {
  return (
    <div className="my-12 flex items-center justify-center px-4">
      <Image
        src="/images/products/brands-section.png"
        alt="Brands Section"
        height={93}
        width={904}
        className="w-full max-w-[904px] h-auto"
      />
    </div>
  );
};
