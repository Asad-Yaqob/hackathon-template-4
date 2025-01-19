import ShopGridCard from "@/components/common/shop/ShopGridCard";
import TitleHeader from "@/components/common/header/TitleHeader";

import { SortAndFilter } from "@/components/common/shop/SortAntFilter";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";
import { Product } from "@/types/product";
import { getProducts } from "@/app/utils/helper/product_methods";


const ShopGirdDefault = async () => {
  const products = await getProducts();
  return (
    <>
      <TitleHeader title="Shop Grid Default" />
      <div className="flex flex-col items-center justify-center">
        <SortAndFilter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: Product, index: number) => (
            <ShopGridCard {...product} key={index} />
          ))}
        </div>
        <BrandsHeader />
      </div>
    </>
  );
};

export default ShopGirdDefault;
