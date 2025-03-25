import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';  // Import Button here

const BookFilter = ({ categories, onFilter }) => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    searchQuery: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4 p-3 bg-light rounded">
      <Row>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Min Price</Form.Label>
            <Form.Control
              type="number"
              name="minPrice"
              placeholder="Min"
              value={filters.minPrice}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Max Price</Form.Label>
            <Form.Control
              type="number"
              name="maxPrice"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              name="searchQuery"
              placeholder="Search books..."
              value={filters.searchQuery}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BookFilter;
