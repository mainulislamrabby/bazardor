import CategoryProductList from "@/components/CategoryProductList";
import { ProductTypes } from "@/types/productTypes";
import { notFound } from "next/navigation";
type CategoryPageProps = {
  params: Promise<{ id: string }>;
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,
  );
  const products: ProductTypes[] = await res.json();

  if (!products.length) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 mt-5">
      <div>
        <div className="card bg-base-100 shadow-sm p-6">
          <div className="flex items-center gap-2">
            <p className="text-3xl">{products[0]?.categoryIcon}</p>
            <div>
              <h2 className="font-bold text-3xl">
                {products[0]?.categoryNameBn}
              </h2>
              <p className="text-gray-500">
                {Number(products.length).toLocaleString("bn-BD")} টি পণ্যের
                আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </div>
        <CategoryProductList products={products} />
      </div>
    </div>
  );
};

export default CategoryPage;
