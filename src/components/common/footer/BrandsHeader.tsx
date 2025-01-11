import Image from 'next/image';
import React from 'react'

export const BrandsHeader = () => {
  return (
    <div className="my-12">
      <Image
        src={"/images/products/brands-section.png"}
        alt="Something"
        height={93}
        width={904}
      />
    </div>
  );
}


