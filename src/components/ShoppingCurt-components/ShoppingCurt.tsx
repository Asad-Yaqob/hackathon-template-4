import Image from "next/image";
import React from "react";

export default function ShoppingCurt() {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto py-24 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Product Table */}
            <div className="col-span-3">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-xl text-[#1D3178] font-bold">
                      Product
                    </th>
                    <th className="text-xl text-[#1D3178] font-bold">Price</th>
                    <th className="text-xl text-[#1D3178] font-bold">
                      Quantity
                    </th>
                    <th className="text-xl text-[#1D3178] font-bold">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    {
                      unlist: "/images/products/unlist-product-icon.png",
                      image: "/images/products/products-1.png",
                      name: "Ut diam consequat",
                      color: "Brown",
                      size: "XL",
                      price: "$32.00",
                      total: "$64.00",
                    },
                    // Add more products here
                  ].map((product, i) => (
                    <tr key={i} className="align-middle">
                      <td className="py-4 flex items-center gap-4">
                        <div className="relative w-[84px] h-[84px]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full rounded-md object-cover"
                            width={1000}
                            height={1000}
                          />
                          <Image
                            src={product.unlist}
                            alt="Remove product"
                            className="absolute -top-1 -right-1 w-4 h-4 cursor-pointer"
                            width={16}
                            height={16}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-[#A1A8C1] text-sm">
                            Color: {product.color}
                          </p>
                          <p className="text-[#A1A8C1] text-sm">
                            Size: {product.size}
                          </p>
                        </div>
                      </td>
                      <td className="text-[#15245E] font-medium">
                        {product.price}
                      </td>
                      <td>
                        <input
                          type="number"
                          defaultValue="1"
                          className="w-16 border rounded-md text-center"
                        />
                      </td>
                      <td className="text-[#15245E]">{product.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 flex justify-between">
                <button className="bg-pink-500 text-white px-6 py-2 rounded-sm hover:bg-pink-600">
                  Update Cart
                </button>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-sm hover:bg-pink-600">
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Totals and Calculate Shipping */}
            <div className="space-y-8 col-span-2">
              {/* Cart Totals */}
              <h3 className="text-xl text-center text-[#1D3178] font-bold mb-4">
                Cart Totals
              </h3>
              <div className="p-6 py-8 bg-[#E8E6F1] rounded-md">
                <div className="flex justify-between mb-6 border-b-2 border-[#dedaec] pb-1">
                  <span className="text-[#1D3178] font-medium text-lg">
                    Subtotals:
                  </span>
                  <span className="text-[#1D3178]">$325.00</span>
                </div>
                <div className="flex justify-between mb-6 border-b-2 border-[#dedaec] pb-1">
                  <span className="text-[#1D3178] font-medium">Totals:</span>
                  <span className="text-[#1D3178] font-bold">$500.00</span>
                </div>
                <p className="text-[#8A91AB] text-sm mb-4">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full bg-[#19D16F] text-white py-2 rounded-md hover:bg-[#16ab58]">
                  Proceed to Checkout
                </button>
              </div>

              {/* Calculate Shipping */}
              <h3 className="text-xl text-center text-[#1D3178] font-bold mb-4">
                Calculate Shipping
              </h3>
              <div className="p-6 bg-[#E8E6F1] rounded-md">
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    className="w-full bg-[#E8E6F1] rounded-md py-2 border-b-2 border-[#dedaec]"
                  />
                  <input
                    type="text"
                    placeholder="Mirpur Dhaka - 1900"
                    className="w-full bg-[#E8E6F1] rounded-md py-2 border-b-2 border-[#dedaec]"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full bg-[#E8E6F1] rounded-md py-2 border-b-2 border-[#dedaec]"
                  />
                </div>
                <button className="w-1/2 mt-4 bg-pink-500 text-white py-2 rounded-sm hover:bg-pink-600">
                  Calculate Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
