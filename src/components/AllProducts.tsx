import { ProductTypes } from "@/types/productTypes";
import React from "react";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const products: ProductTypes[] = await res.json();

  return (
    <div id="সব-পণ্য" className="container mx-auto px-4">
      <div className="py-2">
        <h2 className="font-bold text-2xl">সব পণ্য</h2>
        <p className="text-gray-500">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 12).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
