import { client } from "@/sanity/lib/client";

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
  _id,
  name,
  "imageUrl": image.asset->url,
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category
}`;

  const products = await client.fetch(query);
  return products;
}

export const fetchFeaturedProducts = async () => {
  const query = `*[_type == "product" && isFeaturedProduct == true] {
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  } [0...4]`;

  const products = await client.fetch(query);
  return products;
};

export const fetchProductById = async (id: string) => {
   const query = `
  *[_type == "product" && _id == "${id}"] {
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }
`;


  const products = await client.fetch(query);
  return products;
}