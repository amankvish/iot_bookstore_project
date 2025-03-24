import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/bookService";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then((data) => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.cover_image} alt={book.title} />
      <p>Author: {book.author.name}</p>
      <p>Category: {book.category.name}</p>
      <p>Price: ${book.price}</p>
      <p>Description: {book.description}</p>
      <button onClick={() => (window.location.href = `/payment`)}>
        Buy Now
      </button>
    </div>
  );
}

export default BookDetail;
