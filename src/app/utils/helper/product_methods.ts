import { client } from "@/sanity/lib/client";

export const getProducts = async () => {
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
