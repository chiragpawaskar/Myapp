import axios from "axios";

// Base URL — "proxy" in client/package.json forwards /api → localhost:5000
const API = "/api";

export const getUsers = async () => {
  const res = await axios.get(`${API}/users`);
  return res.data.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`${API}/users/${id}`);
  return res.data.data;
};

export const createUser = async (userData) => {
  const res = await axios.post(`${API}/users`, userData);
  return res.data.data;
};

export const updateUser = async (id, userData) => {
  const res = await axios.put(`${API}/users/${id}`, userData);
  return res.data.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${API}/users/${id}`);
  return res.data.data;
};
