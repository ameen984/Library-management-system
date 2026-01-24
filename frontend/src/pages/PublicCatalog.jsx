import { useState } from "react";
import BookList from "../components/books/bookList";
// import PublicLayout from "../layouts/PublicLayout";

const PublicCatalog = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      {/* HERO SECTION */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Welcome to the City Library
        </h1>
        <p className="text-gray-500 mt-2">Find and discover your next read</p>
      </div>

      {/* SEARCH BAR */}
      <div className="flex justify-center mt-8">
        <div className="flex bg-white rounded-xl shadow-md w-1/3 overflow-hidden">
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-6 py-2 outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-2 border-l border-[#6d707444] text-gray-600 outline-none me-3 rounded-md"
          >
            <option value="">All Categories</option>
            <option value="Fiction">Fiction</option>
            <option value="Self Help">Self Help</option>
            <option value="Biography">Biography</option>
            <option value="Science">Science</option>
            <option value="Technology">Technology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Business">Business</option>
            <option value="History">History</option>
            <option value="Medical">Medical</option>
            <option value="Law">Law</option>
            <option value="Children">Children</option>
            <option value="Romance">Romance</option>
            <option value="Comics">Comics</option>
          </select>
        </div>
      </div>

      <BookList search={search} category={category} />

      {/* INFO CARDS */}
      <div className="grid grid-cols-3 gap-6 mt-16">
        {" "}
        {/* Library Hours */}{" "}
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          {" "}
          <h3 className="font-semibold text-blue-700 mb-2">
            {" "}
            Library Hours{" "}
          </h3>{" "}
          <p className="text-gray-600">Mon–Fri: 9am – 6pm</p>{" "}
          <p className="text-gray-600">Sat: 10am – 4pm</p>{" "}
        </div>{" "}
        {/* Need Help */}{" "}
        <div className="bg-green-50 rounded-xl p-6 shadow-sm">
          {" "}
          <h3 className="font-semibold text-green-700 mb-2">
            {" "}
            Need Help?{" "}
          </h3>{" "}
          <p className="text-gray-600 mb-4">
            {" "}
            Contact our support team for assistance.{" "}
          </p>{" "}
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            {" "}
            Get in Touch{" "}
          </button>{" "}
        </div>{" "}
        {/* Image Card */}{" "}
        <div className="rounded-xl h-28 overflow-hidden shadow-sm">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Library"
            className="w-full h-full object-cover"
          />{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default PublicCatalog;
