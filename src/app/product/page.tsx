"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define a TypeScript interface for products
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string; // Optional because the image might not always be available
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product type here
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const query = `*[_type == "product" && !(_id in path("drafts.**"))] {
          _id,
          name,
          description,
          price,
          "image": image.asset->url
        }`;

        const result: Product[] = await client.fetch(query);
        setProducts(result);
        console.log(result);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto">
      <div>
        <h2>Explore Products</h2>
      </div>
      <div>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.image && (
                <Image
                  src={product.image}
                  height={100}
                  width={100}
                  alt="Product Image"
                />
              )}
              <p>Price: ${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
