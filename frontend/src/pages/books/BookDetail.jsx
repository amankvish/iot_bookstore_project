// src/pages/books/BookDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Alert, Spinner } from 'react-bootstrap';
import useBooks from '../../hooks/useBooks';  // Import the updated useBooks hook
import { useCart } from '../../contexts/CartContext';

const BookDetail = () => {
  const { id } = useParams();
  const { getBookById } = useBooks();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBookById(id);
        setBook(bookData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id, getBookById]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!book) {
    return (
      <Container className="my-5">
        <Alert variant="warning">Book not found</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <img 
            src={book.image || '/images/default-book.jpg'} 
            alt={book.title} 
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={8}>
          <h1>{book.title}</h1>
          <h4 className="text-muted mb-4">{book.author}</h4>
          
          <div className="d-flex align-items-center mb-4">
            <span className="h3 me-3">${book.price}</span>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => addToCart(book)}
            >
              Add to Cart
            </Button>
          </div>

          <div className="mb-4">
            <h5>Description</h5>
            <p>{book.description}</p>
          </div>

          <div className="mb-4">
            <h5>Details</h5>
            <ul className="list-unstyled">
              <li><strong>Category:</strong> {book.category}</li>
              <li><strong>Pages:</strong> {book.pages}</li>
              <li><strong>Published:</strong> {book.publishedDate}</li>
              <li><strong>ISBN:</strong> {book.isbn}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetail;
