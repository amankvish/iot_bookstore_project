// src/hooks/useBooks.js
import { useState, useEffect, useCallback } from 'react';
import api from '../api/axiosConfig';  // Ensure this axiosConfig is correctly set up.

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all books
  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/books');  // Make sure the endpoint is correct
      setBooks(response.data);
      setError(null);
    } catch (err) {
      setError('Error loading books');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch a single book by ID
  const getBookById = useCallback(async (id) => {
    try {
      const response = await api.get(`/books/${id}`);  // Ensure the endpoint is correct
      return response.data;
    } catch (err) {
      throw new Error('Failed to fetch book details');
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return { books, loading, error, getBookById };
};

export default useBooks;
