import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <Card className="h-100 shadow-sm book-card">
      <Card.Img variant="top" src={book.image || '/images/default-book.jpg'} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
        <Card.Text className="flex-grow-1">
          {book.description?.substring(0, 100)}...
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">${book.price}</span>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => addToCart(book)}
          >
            Add to Cart
          </Button>
        </div>
        <Link to={`/books/${book.id}`} className="stretched-link" />
      </Card.Body>
    </Card>
  );
};

export default BookCard;