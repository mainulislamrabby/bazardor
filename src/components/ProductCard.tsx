import Link from "next/link";
import React from "react";



const ProductCard = async () => {


  return (
    <div>
      <Link href={`/product/${product.slug}`}>

      </Link>
    </div>
  );
};

export default ProductCard;
