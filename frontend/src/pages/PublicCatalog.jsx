import { useState } from "react";
import BookList from "../components/books/bookList";
import PublicLayout from "../../layouts/PublicLayout";

const PublicCatalog = () => {
  // 🔹 State for category (default = All Categories)
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <PublicLayout>
      {/* HERO SECTION */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Welcome to the City Library
        </h1>
        <p className="text-gray-500 mt-2">
          Find and discover your next read
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="flex justify-center mt-8">
        <div className="flex bg-white rounded-xl shadow-md w-1/3 overflow-hidden">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-6 py-2 outline-none"
          />

          {/* Category select */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-2 border-l border-[#6d707444] text-gray-600 outline-none me-3 rounded-md"
          >
            <option value="" >
              All Categories
            </option>

            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="technology">Technology</option>
            <option value="computer-science">Computer Science</option>
            <option value="science">Science</option>
            <option value="mathematics">Mathematics</option>
            <option value="business">Business</option>
            <option value="self-help">Self-Help</option>
            <option value="history">History</option>
            <option value="biography">Biography</option>
            <option value="medical">Medical</option>
            <option value="law">Law</option>
            <option value="children">Children</option>
            <option value="romance">Romance</option>
            <option value="comics">Comics</option>
          </select>
        </div>

        {/* Search button */}
     
      </div>

      {/* BOOK LIST */}
      <BookList search={search} category={category} />

      {/* INFO CARDS */}
      <div className="grid grid-cols-3 gap-6 mt-16">
        {/* Library Hours */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-blue-700 mb-2">
            Library Hours
          </h3>
          <p className="text-gray-600">Mon–Fri: 9am – 6pm</p>
          <p className="text-gray-600">Sat: 10am – 4pm</p>
        </div>

        {/* Need Help */}
        <div className="bg-green-50 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-green-700 mb-2">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact our support team for assistance.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Get in Touch
          </button>
        </div>

        {/* Image Card */}
        <div className="rounded-xl h-28 overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PublicLayout>
  );
};

export default PublicCatalog;
