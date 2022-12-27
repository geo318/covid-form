import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export default axiosInstance;
