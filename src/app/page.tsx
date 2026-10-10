
import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import PriceDownProducts from "@/components/PriceDownProducts";
import PriceRiseProducts from "@/components/PriceRiseProducts";


export default function Home() {
  return (
    <div>
      <div>
        <Marquee/>
        <Banner/>
        <PriceRiseProducts/>
        <PriceDownProducts/>
        <AllProducts/>
      </div>
    </div>
  );
}
