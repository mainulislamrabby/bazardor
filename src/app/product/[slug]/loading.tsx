const Loading = () => {
  return (
    <div className="min-h-screen animate-pulse bg-[#f3f7f3] py-5">
      <div className="container mx-auto space-y-3 px-4">
        {/* Product Header Skeleton */}
        <div className="rounded-xl border border-[#e5ebe5] bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 shrink-0 rounded-xl bg-gray-200" />

              <div className="space-y-2">
                <div className="h-5 w-36 rounded bg-gray-200" />
                <div className="h-3 w-32 rounded bg-gray-200" />
                <div className="h-3 w-44 rounded bg-gray-200" />
              </div>
            </div>

            <div className="space-y-2 rounded-xl bg-[#f0f5f0] p-3">
              <div className="h-3 w-14 rounded bg-gray-200" />
              <div className="h-7 w-16 rounded bg-gray-200" />
              <div className="h-3 w-14 rounded bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Price Summary and Market Table */}
        <div className="rounded-xl border border-[#e5ebe5] bg-white p-4">
          <div className="mb-3 h-4 w-32 rounded bg-gray-200" />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#e5ebe5] p-3"
              >
                <div className="h-3 w-20 rounded bg-gray-200" />
                <div className="mt-3 h-6 w-24 rounded bg-gray-200" />
                <div className="mt-2 h-3 w-28 rounded bg-gray-200" />
              </div>
            ))}
          </div>

          <div className="mb-3 mt-5 h-4 w-48 rounded bg-gray-200" />

          {/* Table Header */}
          <div className="overflow-hidden rounded-lg border border-[#e5ebe5]">
            <div className="grid grid-cols-5 gap-3 bg-[#f5f8f5] p-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="h-3 rounded bg-gray-200" />
              ))}
            </div>

            {/* Table Rows */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className={`grid grid-cols-5 gap-3 border-t border-[#e5ebe5] p-3 ${
                  item % 2 === 0 ? "bg-[#f3f7f3]" : "bg-white"
                }`}
              >
                {[1, 2, 3, 4, 5].map((col) => (
                  <div key={col} className="h-3 rounded bg-gray-200" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
