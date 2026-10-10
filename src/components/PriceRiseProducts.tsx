import { ProductTypes } from "@/types/productTypes";
import React from "react";
import ProductCard from "./ProductCard";

const PriceRiseProducts = ({
  products = [],
}: {
  products?: ProductTypes[];
}) => {
  const priceRise = products
    .filter((p) => p.change.dir === "up")
    .sort(
      (a, b) => a.change.pct - b.change.pct
    )
    .slice(0, 6);
  if (priceRise.length === 0) return null;
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 py-2">
            <p className="text-2xl text-red-700">▲</p>
            <h2 className="text-2xl font-bold">আজ দাম বেড়েছে</h2>
        </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {priceRise.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceRiseProducts;
