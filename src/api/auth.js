import axios from 'axios';
import { DB_URL } from '@env';

export const register = async (name, email, password) => {
  const res = await axios.post(`${DB_URL}/register`, { name, email, password });
  return res.data;
};

export const login = async (email, password) => {
  const res = await axios.post(`${DB_URL}/login`, { email, password });
  return res.data;
};

export const forgotPassword = async (email) => {
  const res = await axios.post(`${DB_URL}/forgot-password`, { email });
  return res.data;
};

export const resetPassword = async (token, newPassword) => {
  const res = await axios.post(`${DB_URL}/reset-password`, { token, newPassword });
  return res.data;
};
