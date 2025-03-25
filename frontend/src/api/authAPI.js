import api from "./axiosConfig";

export const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get("/auth/profile");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateProfile = async (userData) => {
  try {
    const response = await api.put("/auth/profile", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
