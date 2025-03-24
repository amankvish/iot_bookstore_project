import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.cover_image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>${book.price}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
