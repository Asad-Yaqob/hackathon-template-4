import React from "react";

export function TrendingProductCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src="/images/products/image-10.png"
          alt="Cantilever chair"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium text-indigo-900">Cantilever chair</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm font-semibold">$39.99</span>
      </div>
    </div>
  );
}
