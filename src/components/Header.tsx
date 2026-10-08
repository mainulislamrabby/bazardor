import Image from "next/image";
import Link from "next/link";


const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-3 ">
        <div className="justify-center flex items-center">
          <div className="flex items-center gap-2">
            <Link className="bg-green-700 rounded p-1" href="/">
              <Image
                src="/logo-icon.png"
                alt="বাজার দর"
                width={30}
                height={30}
                className="w-9 h-9 sm:w-11 sm:h-11 p-1.5 border border-white rounded-full bg-amber-400"
              />
            </Link>

            <div>
              <h2 className="text-lg sm:text-2xl md:text-2xl font-bold text-black">
                বাজার দর
              </h2>
              <p className="text-[14px] text-black">{date}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          <button className="btn hover:text-green-700">সাইন ইন</button>
          <button className="btn bg-green-700 text-white">সাইন আপ</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
