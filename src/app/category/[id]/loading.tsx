const Loading = () => {
  return (
    <div className="container mx-auto mt-5 animate-pulse px-4">
      <div className="rounded-xl bg-gray-200 p-6">
        <div className="h-8 w-40 rounded bg-gray-300" />
        <div className="mt-3 h-4 w-64 rounded bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="rounded-xl border p-5">
            <div className="h-16 rounded bg-gray-200" />
            <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />
            <div className="mt-5 h-8 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
