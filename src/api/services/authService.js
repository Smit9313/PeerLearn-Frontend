import api from '../config';

export const authService = {
  login: async (credentials) => {
    const response = await api.post('/api/auth/login', credentials);
    return response.data;
  },
  
  register: async (userData) => {
    const response = await api.post('/api/auth/signup', userData);
    return response.data;
  },
  
  logout: async () => {
    const response = await api.post('/api/auth/logout');
    return response.data;
  },
  
  getCurrentUser: async () => {
    const response = await api.get('/api/auth/me');
    return response.data;
  },
  
  refreshToken: async () => {
    const response = await api.post('/api/auth/refresh-token');
    return response.data;
  }
}; 