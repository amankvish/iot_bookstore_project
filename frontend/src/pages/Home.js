import React, { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Welcome to IoT Bookstore</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
