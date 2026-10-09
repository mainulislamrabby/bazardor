import Image from "next/image";
import React from "react";

const Banner = () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  console.log(date);

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="card bg-base-100 py-4 sm:py-6 px-4 sm:px-8 rounded-2xl shadow-sm">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
            <div className="w-full md:flex-1">
              <h2 className="bg-[#E1F0E7] text-center text-[#289958] inline-block px-3 py-1 rounded-md text-sm sm:text-base mb-3">
                {date}
              </h2>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-3">
                আজকের বাজারের দাম এক নজরে
              </h1>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক
                জায়গায়।
              </p>

              <button className="btn btn-success w-full sm:w-auto">
                সব পণ্য দেখুন
              </button>
            </div>

            <div className="w-full md:w-auto flex justify-center">
              <Image
                src="/bazar-hero.png"
                width={350}
                height={350}
                alt="আজকের বাজারের পণ্য"
                className="w-full max-w-60 sm:max-w-75 md:max-w-70 lg:max-w-87.5 h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;