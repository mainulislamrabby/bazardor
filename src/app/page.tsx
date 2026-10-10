
import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import PriceDownProducts from "@/components/PriceDownProducts";
import PriceRiseProducts from "@/components/PriceRiseProducts";



export default async function Home() {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
  const data = await res.json();
  const products = data;
  return (
    <div>
      <div>
        <Marquee/>
        <Banner/>
        <PriceRiseProducts products={products}/>
        <PriceDownProducts products={products}/>
        <AllProducts/>
      </div>
    </div>
  );
}
