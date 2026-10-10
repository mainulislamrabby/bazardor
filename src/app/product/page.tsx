import ProductCard from '@/components/ProductCard';
import { ProductTypes } from '@/types/productTypes';
import React from 'react';

const Product = async () => {
const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const products: ProductTypes[] = await res.json();

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;