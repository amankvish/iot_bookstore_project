import api from "./axiosConfig";

export const fetchBooks = async () => {
  try {
    const response = await api.get("/books");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchBookById = async (id) => {
  try {
    const response = await api.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const searchBooks = async (query) => {
  try {
    const response = await api.get("/books/search", { params: { query } });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
