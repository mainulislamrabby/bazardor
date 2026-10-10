import { ProductTypes } from "@/types/productTypes";
import React from "react";
import ProductCard from "./ProductCard";

const PriceDownProducts = ({
  products = [],
}: {
  products?: ProductTypes[];
}) => {
  const priceDown = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
      if (priceDown.length === 0) return null;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 py-2">
        <p className="text-2xl text-green-700">▼</p>
        <h2 className="text-2xl font-bold">আজ দাম কমেছে</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {priceDown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceDownProducts;
