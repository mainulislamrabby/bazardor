const Footer = () => {
  return (
    <div className="py-3 mb-2">
      <div className="container mx-auto px-4 ">
        <footer className="border-t border-gray-200 bg-white">
          <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-center sm:flex-row sm:text-left">
            {/* Left */}
            <p className="text-sm font-medium text-gray-700">
              বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </p>

            {/* Right */}
            <p className="text-xs leading-relaxed text-gray-500 sm:text-right sm:text-sm">
              সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
