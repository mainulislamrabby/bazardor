import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-green-600">404</h1>

        <h2 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
          পেজ খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। পেজটি মুছে ফেলা
          হয়েছে অথবা লিংকটি ভুল হতে পারে।
        </p>

        <Link
          href="/"
          className="btn mt-6 rounded-lg border-0 bg-green-600 text-white hover:bg-green-700"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
