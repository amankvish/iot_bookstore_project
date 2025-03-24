import { api } from "./api";

export const login = async (username, password) => {
  const response = await api.post("users/login/", { username, password });
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post("users/signup/", userData);
  return response.data;
};
