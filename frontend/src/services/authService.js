import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

const register = async (userData) => {
  const response = await axios.post(API_URL + "register/", {
    email: userData.email,
    name: userData.name,
    phone: userData.phone,
    password: userData.password,
  });
  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "login/", { email, password });
  if (response.data.access) {
    localStorage.setItem("token", response.data.access);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
