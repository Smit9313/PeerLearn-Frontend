import axios from 'axios';
import { store } from '../store';
import { setError } from '../store/slices/authSlice';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'Something went wrong';
    store.dispatch(setError(message));
    
    if (error.response?.status === 401) {
      // Handle unauthorized access
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default api; 