import apiClient from './apiClient';

// GET all items
export const getContents = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data; // ✅ only return data
  } catch (error) {
    throw error;
  }
};