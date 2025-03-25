import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/books/');
                setBooks(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="danger">
                Error loading books: {error}
            </Alert>
        );
    }

    return (
        <div>
            <h4 className="mb-4">Available Books</h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                {books.map(book => (
                    <Col key={book.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img 
                                variant="top" 
                                src={book.image || 'https://via.placeholder.com/150'} 
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text className="text-muted">
                                    by {book.author}
                                </Card.Text>
                                <Card.Text>
                                    ${book.price}
                                </Card.Text>
                                <button className="btn btn-primary w-100">
                                    View Details
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BookList;