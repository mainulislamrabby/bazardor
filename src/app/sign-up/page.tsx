import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-sm sm:max-w-md">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#25332b] sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            বিনামূল্যে সাইন আপ করে সব ফিচার ব্যবহার শুরু করুন
          </p>
        </div>

        {/* Sign Up Form */}
        <form className="rounded-2xl border border-[#e0e8e0] bg-white p-5 shadow-sm sm:p-7">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label text-sm font-medium text-[#25332b] sm:text-base">
              নাম
            </label>
            <input
              type="text"
              name="name"
              placeholder="যেমন: রহিম উদ্দিন"
              autoComplete="name"
              className="input h-11 min-h-11 w-full border-[#e0e8e0] bg-[#fafcfb] px-3 text-sm focus:border-[#078b43] focus:outline-none sm:h-12 sm:min-h-12 sm:text-base"
              required
            />

            {/* Email */}
            <label className="label mt-3 text-sm font-medium text-[#25332b] sm:text-base">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="input h-11 min-h-11 w-full border-[#e0e8e0] bg-[#fafcfb] px-3 text-sm focus:border-[#078b43] focus:outline-none sm:h-12 sm:min-h-12 sm:text-base"
              required
            />

            {/* Password */}
            <label className="label mt-3 text-sm font-medium text-[#25332b] sm:text-base">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              minLength={8}
              className="input h-11 min-h-11 w-full border-[#e0e8e0] bg-[#fafcfb] px-3 text-sm focus:border-[#078b43] focus:outline-none sm:h-12 sm:min-h-12 sm:text-base"
              required
            />

            {/* Confirm Password */}
            <label className="label mt-3 text-sm font-medium text-[#25332b] sm:text-base">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="আবার লিখুন"
              autoComplete="new-password"
              minLength={8}
              className="input h-11 min-h-11 w-full border-[#e0e8e0] bg-[#fafcfb] px-3 text-sm focus:border-[#078b43] focus:outline-none sm:h-12 sm:min-h-12 sm:text-base"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn mt-4 h-12 min-h-12 w-full border-none bg-[#078b43] text-base font-semibold text-white shadow-md hover:bg-[#067438]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </fieldset>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#e0e8e0]" />
            <span className="text-sm text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-[#e0e8e0]" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="btn btn-outline h-11 min-h-11 gap-2 border-[#e0e8e0] bg-white px-3 text-sm font-medium text-[#25332b] hover:bg-gray-50"
            >
              <span className="text-base font-bold text-[#4285F4]">G</span>
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="btn btn-outline h-11 min-h-11 gap-2 border-[#e0e8e0] bg-white px-3 text-sm font-medium text-[#25332b] hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.52-2.5-.29-5.12-1.25-5.12-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.62 5.26-5.13 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-5 text-center text-sm text-gray-500">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#078b43] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </form>

        {/* Home Link */}
        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 transition-colors hover:text-[#078b43]"
          >
            ← হোম পেইজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
