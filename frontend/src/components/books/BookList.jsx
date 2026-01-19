import { useGetBooksQuery } from "../../services/bookApi";
import BookCard from "./BookCard";

const normalize = (value = "") =>
  value.toLowerCase().replace(/[\s-]/g, "");

const BookList = ({ category = "", search = "" }) => {
  const { data, isLoading, isError } = useGetBooksQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error</p>;

  let books = data?.result || [];

  // 🏷️ CATEGORY FILTER (only if category exists)
  if (category.trim() !== "") {
    books = books.filter(
      (book) =>
        normalize(book.category) === normalize(category)
    );
  }

  // 🔍 SEARCH FILTER (only if search exists)
  if (search.trim() !== "") {
    const text = search.toLowerCase();

    books = books.filter(
      (book) =>
        book.title.toLowerCase().includes(text) ||
        book.author.toLowerCase().includes(text)
    );
  }

  return (
    <div className="grid grid-cols-5 gap-6 mt-10">
      {books.length ? (
        books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No books found
        </p>
      )}
    </div>
  );
};

export default BookList;