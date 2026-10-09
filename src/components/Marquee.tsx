import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface ProductProps {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const products: ProductProps[] = await res.json();

  return (
    <div className="my-2">
      <div className="container mx-auto px-4">
        <MarqueeText className="py-1" direction="right" duration={9}>
          {products.map((product) => (
            <div className="border-l border-gray-500" key={product.id}>
              <div className="mx-1.5">
                <span className="mx-1">{product.image}</span>
                <span className="mx-0.5">{product.nameBn}</span>
                <span className="mx-0.5">
                  {`${Number(product.today).toLocaleString("bn-BD")} টাকা/${
                    {
                      kg: "কেজি",
                      litre: "লিটার",
                      dozen: "ডজন",
                      piece: "পিস",
                    }[product.unit] || product.unit
                  }`}
                </span>
                <span
                  className={
                    product.change.dir === "up"
                      ? "text-green-600"
                      : product.change.dir === "down"
                        ? "text-red-600"
                        : "text-gray-500"
                  }
                >
                  {product.change.dir === "up"
                    ? "▲"
                    : product.change.dir === "down"
                      ? "▼"
                      : "▬▬"}
                  <span className="mx-0.5">
                    {`${Number(product.change.pct).toLocaleString("bn-BD")}%`}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
