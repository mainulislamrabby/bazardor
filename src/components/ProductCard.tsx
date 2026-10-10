import { ProductTypes } from "@/types/productTypes";
import Link from "next/link";
import React from "react";

interface ProductProps {
  product: ProductTypes;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="rounded-[22px] border border-[#dce5dc] bg-[#fbfdfb] p-5 shadow-sm transition hover:shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-3xl">
            {product.image}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold text-[#202b22]">
              {product.nameBn}
            </h2>

            <p className="mt-0.5 text-sm text-[#59635a]">
              {`প্রতি ${
                {
                  kg: "কেজি",
                  litre: "লিটার",
                  dozen: "ডজন",
                  piece: "পিস",
                }[product.unit] || product.unit
              }`}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-[#59635a]">আজকের দাম</p>

            <p className="mt-1 text-xl font-bold text-[#202b22]">
              {Number(product.today).toLocaleString("bn-BD")} টাকা
            </p>
          </div>

          <span
            className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold ${
              product.change.pct > 0
                ? "bg-[#f0f5f0] text-red-600"
                : product.change.pct < 0
                  ? "bg-[#f0f5f0] text-green-600"
                  : "bg-gray-100 text-gray-500"
            }`}
          >
            {product.change.pct > 0 ? "▲" : product.change.pct < 0 ? "▼" : "—"}{" "}
            {Math.abs(Number(product.change.pct)).toLocaleString("bn-BD", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
            %
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
