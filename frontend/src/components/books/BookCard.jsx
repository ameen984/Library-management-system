const BookCard = ({ book }) => {
  const isAvailable = book.availableCopies > 0;

  return (
    <div className="w-45 bg-white rounded-xl shadow-md hover:shadow-lg transition p-3">
      {/* Image */}
      <div className="relative">
        <img
          src={book.image || "/placeholder.png"}
          alt={book.title}
          className="w-full h-50 object-cover rounded-lg"
        />

        {/* Availability badge on image */}
        <span
          className={`absolute bottom-2 left-2 text-xs px-2 py-1 rounded-full font-medium ${
            isAvailable ? "bg-[#28be3cb4] text-white" : "bg-[#c02d2dce] text-white"
          }`}
        >
          {isAvailable ? "Available" : "Out of Stock"}
        </span>
      </div>

      {/* Content */}
      <div className="mt-3 space-y-1">
        <p className="font-semibold text-sm leading-tight line-clamp-2">
          {book.title}
        </p>

        <p className="text-xs text-gray-500">by {book.author}</p>

        {/* Copy count */}
        {isAvailable ? (
          <p className="text-xs font-medium inline-flex items-center gap-1">
            <span className="text-green-600 inline-flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              Available:
            </span>

            <span className="text-black">
              {book.availableCopies} / {book.totalCopies}
            </span>
          </p>
        ) : (
          <p className="text-xs font-medium inline-flex items-center gap-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
            Out of Stock
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
