import axios from "axios";

const API = "http://localhost:5000";

// REGISTER
export const registerUser = async (userData) => {
  const res = await axios.post(`${API}/users`, userData);
  return res.data;
};

// LOGIN
export const loginUser = async (email, password) => {
  const res = await axios.get(
    `${API}/users?email=${email}&password=${password}`
  );
  return res.data[0];
};

// GET USER
export const getUserById = async (id) => {
  const res = await axios.get(`${API}/users/${id}`);
  return res.data;
};