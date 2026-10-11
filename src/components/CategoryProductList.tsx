"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ProductTypes } from "@/types/productTypes";

const CategoryProductList = ({ products }: { products: ProductTypes[] }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "low-to-high") {
      return a.today - b.today;
    }

    if (sortBy === "high-to-low") {
      return b.today - a.today;
    }

    return a.id - b.id;
  });

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
        <p className="text-gray-500">মোট {products.length}টি পণ্য</p>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm">
            সাজান:
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered select-sm"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">দাম: কম থেকে বেশি</option>
            <option value="high-to-low">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default CategoryProductList;
