import { CategoryTypes } from "@/types/categoryTypes";
import Link from "next/link";


const Navbar = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const categories: CategoryTypes[] = await res.json();

  return (
    <div className="border bg-[#f0f5f0] shadow-sm py-1 border-gray-100">
      <div className="container mx-auto px-4 py-2 flex flex-wrap gap-2 justify-center sm:justify-start">
        {categories.map((category) => (
          <Link
            className="flex items-center gap-2 mx-1 sm:mx-2 text-sm sm:text-base"
            key={category.id}
            href={category.slug}
          >
            <p>{category.icon}</p>
            <p className="font-semibold"> {category.nameBn}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
