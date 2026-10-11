import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold">৪০৪</h2>

      <h3 className="mt-3 text-xl font-semibold">
        ক্যাটাগরি খুঁজে পাওয়া যায়নি!
      </h3>

      <p className="mt-2 text-gray-500">
        দুঃখিত, এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="btn mt-6 bg-green-600 text-white hover:bg-green-700"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;
