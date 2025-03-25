// src/pages/books/BookStore.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookCard from '../../components/books/BookCard';  // Ensure this component exists
import BookFilter from '../../components/books/BookFilter';  // Ensure this component exists
import useBooks from '../../hooks/useBooks';  // Import the updated useBooks hook

const BookStore = () => {
  const { books, loading, error } = useBooks();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (books.length) {
      setFilteredBooks(books);
      const uniqueCategories = [...new Set(books.map(book => book.category))];
      setCategories(uniqueCategories);
    }
  }, [books]);

  const handleFilter = (filters) => {
    let result = [...books];
    
    if (filters.category) {
      result = result.filter(book => book.category === filters.category);
    }
    if (filters.minPrice) {
      result = result.filter(book => book.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter(book => book.price <= Number(filters.maxPrice));
    }
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
      );
    }

    setFilteredBooks(result);
  };

  if (loading) return <div className="text-center my-5">Loading books...</div>;
  if (error) return <div className="alert alert-danger">Error loading books: {error}</div>;

  return (
    <Container className="py-5">
      <h1 className="mb-4">Book Catalog</h1>
      
      <BookFilter categories={categories} onFilter={handleFilter} />
      
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {filteredBooks.map(book => (
          <Col key={book.id}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookStore;
