import { api } from "./api";

export const getBooks = async () => {
  const response = await api.get("books/");
  return response.data;
};

export const getBookById = async (id) => {
  const response = await api.get(`books/${id}/`);
  return response.data;
};
