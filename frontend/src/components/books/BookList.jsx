// import { useState } from "react";
import { useGetBooksQuery } from "../../services/bookApi";
import BookCard from "./BookCard";




const BookList = ({search,category}) => {
 
 const { data, isLoading, isError } = useGetBooksQuery({
  category,
  search,
   limit: 10,  
});

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error</p>;

 
const books=data?.result ||[]
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