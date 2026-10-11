import { ProductTypes } from "@/types/productTypes";

type ProductDetailsProps = {
  params: Promise<{ slug: string }>;
};

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { slug } = await params;

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  const products: ProductTypes[] = await res.json();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-bold">পণ্য খুঁজে পাওয়া যায়নি</h2>
      </div>
    );
  }

  const difference = product.today - product.yesterday;

  const unitNames: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  const markets = product.markets ?? [];

  const minPrice = markets.length
    ? Math.min(...markets.map((market) => market.min))
    : product.today;

  const maxPrice = markets.length
    ? Math.max(...markets.map((market) => market.max))
    : product.today;

  const avgPrice = markets.length
    ? markets.reduce(
        (total, market) => total + (market.min + market.max) / 2,
        0,
      ) / markets.length
    : product.today;

  return (
    <div className="min-h-screen bg-[#f3f7f3] py-5">
      <div className="container mx-auto space-y-3 px-4">
        {/* Product Header */}
        <div className="rounded-xl border border-[#e5ebe5] bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
                {product.image}
              </div>

              <div className="min-w-0">
                <h1 className="text-2xl font-bold text-[#26352a]">
                  {product.nameBn}
                </h1>

                <p className="mt-1 text-xs text-[#59635a]">
                  প্রতি {unitNames[product.unit] ?? product.unit} ·{" "}
                  {product.categoryNameBn}
                </p>

                <p className="mt-1 text-xs text-[#59635a]">
                  {difference > 0
                    ? `গতকালের তুলনায় দাম বেড়েছে ${difference} টাকা`
                    : difference < 0
                      ? `গতকালের তুলনায় দাম কমেছে ${Number(Math.abs(difference)).toLocaleString("bn-BD")} টাকা`
                      : "গতকালের তুলনায় দামের পরিবর্তন নেই"}
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-xl bg-[#f0f5f0] px-4 py-3 text-center">
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="text-2xl font-bold text-[#26352a]">
                ৳{product.today}
              </p>
              <p className="text-xs text-gray-500">
                প্রতি {unitNames[product.unit] ?? product.unit}
              </p>
              <p
                className={`mt-1 text-xs font-semibold ${
                  product.change.dir === "up"
                    ? "text-red-600"
                    : product.change.dir === "down"
                      ? "text-green-600"
                      : "text-gray-500"
                }`}
              >
                {product.change.dir === "up"
                  ? "▲"
                  : product.change.dir === "down"
                    ? "▼"
                    : "—"}{" "}
                {Math.abs(product.change.pct)}%
              </p>
            </div>
          </div>
        </div>

        {/* Price Summary and Market Table */}
        <div className="rounded-xl border border-[#e5ebe5] bg-white p-4">
          <h2 className="mb-3 text-2xl font-bold text-[#26352a]">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e5ebe5] p-3">
              <p className="text-md text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-lg font-bold text-green-600">
                ৳{minPrice}
              </p>
              <p className="text-xs text-gray-500">বাজারের সর্বনিম্ন দাম</p>
            </div>

            <div className="rounded-xl border border-[#e5ebe5] p-3">
              <p className="text-md text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-lg font-bold text-red-500">৳{maxPrice}</p>
              <p className="text-xs text-gray-500">বাজারের সর্বোচ্চ দাম</p>
            </div>

            <div className="rounded-xl border border-[#e5ebe5] p-3">
              <p className="text-md text-gray-500">গড় দাম</p>
              <p className="mt-1 text-lg font-bold text-[#26352a]">
                ৳{avgPrice.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">বাজারের গড় মূল্য</p>
            </div>
          </div>

          <h2 className="mb-3 mt-5 text-md font-bold text-[#26352a]">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-lg border border-[#e5ebe5]">
            <table className="w-full border-collapse text-left text-xs">
              <thead className="bg-[#f5f8f5] text-[#59635a]">
                <tr>
                  <th className="whitespace-nowrap p-3">বাজার</th>
                  <th className="whitespace-nowrap p-3">বিভাগ</th>
                  <th className="whitespace-nowrap p-3">সর্বনিম্ন</th>
                  <th className="whitespace-nowrap p-3">সর্বোচ্চ</th>
                  <th className="whitespace-nowrap p-3 text-right">গড়</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className={`border-t border-[#e5ebe5] ${
                      index % 2 === 0 ? "bg-white" : "bg-[#f3f7f3]"
                    }`}
                  >
                    <td className="whitespace-nowrap p-3 font-medium">
                      {market.market}
                    </td>

                    <td className="whitespace-nowrap p-3">{market.division}</td>

                    <td className="whitespace-nowrap p-3">
                      ৳{Number(market.min).toLocaleString("bn-BD")}
                    </td>

                    <td className="whitespace-nowrap p-3">
                      ৳{Number(market.max).toLocaleString("bn-BD")}
                    </td>

                    <td className="whitespace-nowrap p-3 text-right font-semibold">
                      ৳
                      {Number(
                        ((market.min + market.max) / 2).toFixed(2),
                      ).toLocaleString("bn-BD")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
