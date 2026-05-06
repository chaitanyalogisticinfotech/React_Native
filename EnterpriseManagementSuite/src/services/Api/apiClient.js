import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:3000/contents/'; 

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;